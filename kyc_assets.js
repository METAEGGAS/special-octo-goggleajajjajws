
var kycHTML='<div class="kyin"><div class="wdt"><div class="pfb" onclick="closeKyc()"><img src="https://i.ibb.co/k69JQ9LS/IMG.png" alt="back"></div><h1 data-t="kyc">التحقق من الهوية</h1><div class="dsp"></div></div><div class="ksub" data-t="kycSub">يرجى تقديم بيانات حقيقية، حيث أن البيانات المزيفة لن تحظى بحماية من أي نوع</div><div class="fld"><input data-ph="phName" placeholder="الاسم الحقيقي"></div><div class="fld"><input inputmode="numeric" data-ph="phId" placeholder="رقم الهوية"></div><div class="fld" onclick="selDoc()"><span class="ph" id="docPh"></span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div><div class="ksec" data-t="idPic">صورة الهوية</div><div class="ids"><div class="idb" onclick="pick(\'f\')"><div class="idf"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i><img id="imf" src="https://i.ibb.co/1DK8KR8/IMG.png" alt="front"></div><p data-t="idFront">صورة امامية الهوية</p><input type="file" id="pf" accept="image/*" onchange="setImg(\'f\',this)"></div><div class="idb" onclick="pick(\'b\')"><div class="idf"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i><img id="imb" src="https://i.ibb.co/JWV5ZCcm/IMG.png" alt="back"></div><p data-t="idBack">صورة خلفية الهوية</p><input type="file" id="pb" accept="image/*" onchange="setImg(\'b\',this)"></div></div><button class="kgo" onclick="subKyc()" data-t="submit">إرسال التعديلات</button></div>';
</script>

<!-- 2) نضام Firebase الكامل (جلسة + حفظ + حالة) — لا يمس الحقن -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
  import { getFirestore, doc, setDoc, onSnapshot, serverTimestamp }
    from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",
    authDomain: "hhhxh-5ebe4.firebaseapp.com",
    projectId: "hhhxh-5ebe4",
    storageBucket: "hhhxh-5ebe4.firebasestorage.app",
    messagingSenderId: "79243000696",
    appId: "1:79243000696:web:ee0fb2d2ccce791954e68d",
    measurementId: "G-08BR6LN6PT"
  };

  const app  = initializeApp(firebaseConfig);
  isSupported().then(ok => { if (ok) getAnalytics(app); }).catch(()=>{});
  const auth = getAuth(app);
  const db   = getFirestore(app);

  const ICON_PENDING  = "https://i.ibb.co/JWYFWVPG/IMG.png"; // جاري المراجعة
  const ICON_APPROVED = "https://i.ibb.co/9m6G4BMQ/IMG.png"; // تم التحقق

  const kycState = { f: null, b: null, docType: null };
  let unsubKyc = null;

  const css = document.createElement('style');
  css.textContent = `
    #kycAuth{position:fixed;inset:0;z-index:99998;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55);backdrop-filter:blur(4px);font-family:'Noto Sans Arabic',Tahoma,sans-serif}
    #kycAuth .ka-box{width:min(92vw,360px);background:#14161c;border:1px solid #2a2e3a;border-radius:18px;padding:26px 22px;text-align:center;color:#fff;box-shadow:0 20px 60px rgba(0,0,0,.5)}
    #kycAuth h2{margin:0 0 6px;font-size:20px}
    #kycAuth .ka-sub{margin:0 0 16px;font-size:12.5px;color:#9aa1b0;line-height:1.7}
    #kycAuth input{width:100%;box-sizing:border-box;margin:6px 0;padding:12px 14px;border-radius:12px;border:1px solid #2a2e3a;background:#0d0f14;color:#fff;font-size:14px;outline:none;font-family:inherit}
    #kycAuth input:focus{border-color:#4c8dff}
    #kycAuth button{width:100%;margin-top:10px;padding:12px;border:0;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;background:#4c8dff;color:#fff}
    #kycAuth button.ka-alt{background:transparent;border:1px solid #3a4152;color:#c8d0de}
    #kycAuth .ka-err{min-height:18px;font-size:12px;color:#ff6b6b;margin-top:6px}
    #kycStatus{position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:99999;display:flex;align-items:center;gap:10px;background:#14161c;border:1px solid #2a2e3a;border-radius:999px;padding:8px 18px 8px 12px;color:#fff;font-size:14px;font-weight:700;font-family:'Noto Sans Arabic',Tahoma,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.45);direction:rtl}
    #kycStatus img{width:30px;height:30px;object-fit:contain}
    #kycDocMenu{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99999;width:min(92vw,340px);background:#14161c;border:1px solid #2a2e3a;border-radius:16px;overflow:hidden;box-shadow:0 16px 44px rgba(0,0,0,.5);font-family:'Noto Sans Arabic',Tahoma,sans-serif}
    #kycDocMenu .dm-item{padding:14px 18px;color:#fff;font-size:14.5px;cursor:pointer;border-bottom:1px solid #20242e;text-align:right}
    #kycDocMenu .dm-item:last-child{border-bottom:0}
    #kycDocMenu .dm-item:active,#kycDocMenu .dm-item:hover{background:#1c2130}
    #kycToast{position:fixed;bottom:26px;left:50%;transform:translateX(-50%);z-index:999999;background:#22262f;color:#fff;padding:11px 20px;border-radius:12px;font-size:13.5px;font-family:'Noto Sans Arabic',Tahoma,sans-serif;box-shadow:0 10px 28px rgba(0,0,0,.5);opacity:0;transition:opacity .25s;pointer-events:none}
  `;
  document.head.appendChild(css);

  function toast(msg){
    let t = document.getElementById('kycToast');
    if(!t){ t = document.createElement('div'); t.id = 'kycToast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(t._h);
    t._h = setTimeout(()=> t.style.opacity = '0', 2600);
  }

  // ضغط الصورة وتحويلها base64 (حتى لا تتجاوز حد Firestore 1MB)
  function fileToBase64(file){
    return new Promise((resolve, reject)=>{
      const rd = new FileReader();
      rd.onload = e => {
        const img = new Image();
        img.onload = () => {
          const MAX = 900;
          let w = img.width, h = img.height;
          if (w > MAX){ h = Math.round(h * MAX / w); w = MAX; }
          const c = document.createElement('canvas');
          c.width = w; c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(c.toDataURL('image/jpeg', 0.72));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      rd.onerror = reject;
      rd.readAsDataURL(file);
    });
  }

  window.pick = function(side){
    const inp = document.getElementById(side === 'f' ? 'pf' : 'pb');
    if (inp) inp.click();
  };

  window.setImg = async function(side, input){
    const file = input && input.files && input.files[0];
    if (!file) return;
    try{
      const b64 = await fileToBase64(file);
      kycState[side] = b64;
      const im = document.getElementById(side === 'f' ? 'imf' : 'imb');
      if (im) im.src = b64;
    }catch(e){ toast('تعذر قراءة الصورة، حاول بصورة أخرى'); }
  };

  if (typeof window.closeKyc !== 'function'){
    window.closeKyc = function(){ document.getElementById('kycHost')?.remove(); };
  }
  if (typeof window.selDoc !== 'function'){
    window.selDoc = function(){
      let m = document.getElementById('kycDocMenu');
      if (m){ m.remove(); return; }
      m = document.createElement('div');
      m.id = 'kycDocMenu';
      m.setAttribute('dir','rtl');
      ['بطاقة هوية وطنية','جواز سفر','رخصة قيادة'].forEach(t => {
        const d = document.createElement('div');
        d.className = 'dm-item';
        d.textContent = t;
        d.onclick = () => {
          kycState.docType = t;
          const ph = document.getElementById('docPh');
          if (ph) ph.textContent = t;
          m.remove();
        };
        m.appendChild(d);
      });
      document.body.appendChild(m);
    };
  }

  // إرسال الطلب: حفظ كامل في Firestore بمجموعة kyc
  window.subKyc = async function(){
    const user = auth.currentUser;
    if (!user){ mountAuth(); return; }

    const root = document.querySelector('.kyin');
    if (!root) return;
    const inputs = root.querySelectorAll('.fld input');
    const name  = (inputs[0]?.value || '').trim();
    const idNum = (inputs[1]?.value || '').trim();

    if (!name)              { toast('يرجى إدخال الاسم الحقيقي'); return; }
    if (!idNum)             { toast('يرجى إدخال رقم الهوية'); return; }
    if (!kycState.docType)  { toast('يرجى اختيار نوع المستند'); return; }
    if (!kycState.f || !kycState.b){ toast('يرجى إرفاق صورتي الهوية الأمامية والخلفية'); return; }

    const btn = root.querySelector('.kgo');
    if (btn) btn.disabled = true;

    try{
      await setDoc(doc(db, 'kyc', user.uid), {
        name:       name,
        idNumber:   idNum,
        docType:    kycState.docType,
        idFront:    kycState.f,   // base64
        idBack:     kycState.b,   // base64
        email:      user.email,
        status:     'pending',
        createdAt:  serverTimestamp(),
        updatedAt:  serverTimestamp()
      }, { merge: true });

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        kyc: 'pending'   // حقل باسم kyc يحمل حالة التوثيق
      }, { merge: true });

      toast('تم إرسال الطلب بنجاح');
    }catch(e){
      console.error(e);
      toast('حدث خطأ أثناء الإرسال، حاول مجددًا');
      if (btn) btn.disabled = false;
    }
  };

  function mountKyc(){
    if (document.querySelector('.kyin')) return;
    const host = document.createElement('div');
    host.id = 'kycHost';
    host.innerHTML = kycHTML;
    document.body.appendChild(host);
  }

  // تسجيل دخول: بريد + كلمة سر فقط (ممنوع مجهول)
  function mountAuth(){
    if (document.getElementById('kycAuth')) return;
    const w = document.createElement('div');
    w.id = 'kycAuth';
    w.setAttribute('dir','rtl');
    w.innerHTML = `
      <div class="ka-box">
        <h2>تسجيل الدخول</h2>
        <p class="ka-sub">التحقق من الهوية يتطلب حسابًا مسجلًا بالبريد الإلكتروني وكلمة المرور فقط</p>
        <input type="email" id="kaEmail" placeholder="البريد الإلكتروني" autocomplete="email">
        <input type="password" id="kaPass" placeholder="كلمة المرور" autocomplete="current-password">
        <div class="ka-err" id="kaErr"></div>
        <button id="kaLogin">دخول</button>
        <button id="kaReg" class="ka-alt">إنشاء حساب جديد</button>
      </div>`;
    document.body.appendChild(w);

    const err = m => document.getElementById('kaErr').textContent = m;
    const creds = () => ({
      e: document.getElementById('kaEmail').value.trim(),
      p: document.getElementById('kaPass').value
    });

    document.getElementById('kaLogin').onclick = async () => {
      const {e, p} = creds();
      if (!e || !p){ err('أدخل البريد الإلكتروني وكلمة المرور'); return; }
      err('');
      try{ await signInWithEmailAndPassword(auth, e, p); }
      catch(ex){ err('بيانات الدخول غير صحيحة'); }
    };

    document.getElementById('kaReg').onclick = async () => {
      const {e, p} = creds();
      if (!e || p.length < 6){ err('أدخل بريدًا صحيحًا وكلمة مرور 6 أحرف على الأقل'); return; }
      err('');
      try{ await createUserWithEmailAndPassword(auth, e, p); }
      catch(ex){
        err(ex.code === 'auth/email-already-in-use' ? 'هذا البريد مسجل بالفعل، سجل دخولك' : 'تعذر إنشاء الحساب، حاول مجددًا');
      }
    };
  }

  // شارة الحالة: قيد المراجعة / تم التحقق
  function mountStatus(status){
    document.getElementById('kycStatus')?.remove();
    const approved = status === 'approved';
    const bar = document.createElement('div');
    bar.id = 'kycStatus';
    bar.setAttribute('dir','rtl');
    bar.innerHTML = `
      <img src="${approved ? ICON_APPROVED : ICON_PENDING}" alt="status">
      <span>${approved ? 'تم التحقق بنجاح' : 'جاري المراجعة والتدقيق'}</span>`;
    document.body.appendChild(bar);

    const form = document.querySelector('.kyin');
    if (form){
      form.querySelectorAll('input, button, .fld, .idb').forEach(el => {
        el.style.pointerEvents = 'none';
        el.style.opacity = '.55';
      });
    }
  }

  // مراقبة الجلسة في الخلفية بشكل دائم
  onAuthStateChanged(auth, user => {
    if (!user){
      if (unsubKyc){ unsubKyc(); unsubKyc = null; }
      document.getElementById('kycHost')?.remove();
      document.getElementById('kycStatus')?.remove();
      mountAuth();
      return;
    }

    document.getElementById('kycAuth')?.remove();
    mountKyc();

    if (unsubKyc) unsubKyc();
    unsubKyc = onSnapshot(doc(db, 'kyc', user.uid), snap => {
      if (!snap.exists()){
        document.getElementById('kycStatus')?.remove();
        return;
      }
      const st = snap.data().status;
      if (st === 'pending' || st === 'approved'){
        mountStatus(st);
      } else {
        document.getElementById('kycStatus')?.remove();
      }
    }, err => console.error('kyc listener:', err));
  });
