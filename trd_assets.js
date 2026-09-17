trdHTML='<style>@keyframes trdpls{0%,100%{opacity:1}50%{opacity:.3}}@keyframes trdglow{0%,100%{box-shadow:0 10px 30px rgba(20,90,220,.45),0 0 18px rgba(0,229,255,.25)}50%{box-shadow:0 10px 30px rgba(20,90,220,.6),0 0 34px rgba(0,229,255,.5)}}@keyframes trdspin{to{transform:rotate(360deg)}}</style>'
+'<div style="padding:8px 14px 40px;background:#050a14;min-height:100%">'
// ===== Top bar: السجل (top right) =====
+'<div style="display:flex;align-items:center;justify-content:flex-end;padding:6px 2px 14px">'
+'<div onclick="goHome()" style="display:flex;align-items:center;gap:7px;cursor:pointer">'
+'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f7bf6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.5"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>'
+'<span style="font-size:15px;font-weight:600;color:#e8f1ff;letter-spacing:.3px">السجل</span>'
+'</div>'
+'</div>'
// ===== Hero: same image with overlaid text (exactly like the screenshot) =====
+'<div style="position:relative;border-radius:22px;overflow:hidden;border:1px solid rgba(0,229,255,.3);box-shadow:0 0 0 1px rgba(47,123,246,.15),0 18px 44px rgba(0,20,60,.6),inset 0 0 40px rgba(0,229,255,.06);background:radial-gradient(ellipse at 50% 82%,#062046 0%,#041226 58%,#020a18 100%)">'
+'<img src="https://i.ibb.co/Pv3gPVXM/file-0000000034348210919c6cf6b2d1473f.png" alt="trade sync" style="width:100%;display:block">'
+'<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 20px">'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)">نشر للمستخدمين</div>'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)">الأصدقاء للتزامن</div>'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)">معهم</div>'
+'</div>'
+'</div>'
// ===== Sub text =====
+'<div style="margin-top:20px;text-align:center;font-size:15px;font-weight:500;color:#f2f6ff;letter-spacing:.2px">الحصول على عمولة دعوة عالية</div>'
// ===== Input field =====
+'<div style="margin-top:18px;background:#1a2130;border:1px solid rgba(150,195,245,.14);border-radius:10px;padding:16px 14px">'
+'<input id="trdCodeInput" type="text" placeholder="يرجى إدخال كود الطلب" style="width:100%;background:transparent;border:none;outline:none;color:#e8f1ff;font-size:14px;text-align:right;font-family:inherit">'
+'</div>'
// ===== Main button =====
+'<div id="trdSyncBtn" onclick="trdSync()" style="margin-top:16px;border-radius:10px;background:linear-gradient(135deg,#1a5fb4 0%,#2f7bf6 55%,#00b8e5 100%);border:1px solid rgba(160,215,255,.5);padding:16px;text-align:center;cursor:pointer;box-shadow:0 10px 30px rgba(20,90,220,.45),inset 0 1px 1px rgba(220,240,255,.4)">'
+'<span id="trdSyncBtnTxt" style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.3px">التزامن بالصفقة</span>'
+'</div>'
+'</div>';

// ============================================================
// ===== Firebase: جلسة المستخدم + نظام الأكواد + الأرباح =====
// ============================================================
var TRD_FB_CFG={apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",authDomain:"hhhxh-5ebe4.firebaseapp.com",projectId:"hhhxh-5ebe4",storageBucket:"hhhxh-5ebe4.firebasestorage.app",messagingSenderId:"79243000696",appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",measurementId:"G-08BR6LN6PT"};
var TRD_PROFIT_RATE=0.016667; // 1.6667%
var TRD_MAX_CODES_PER_DAY=3;
var TRD_TOTAL_CODES=300;
var trdFB={ready:false,uid:null,db:null,auth:null,fs:null,busy:false};

// ===== تحميل Firebase والتحقق من جلسة المستخدم في الخلفية =====
(async function(){
  try{
    var authM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js');
    var fsM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js');
    trdFB.fs=fsM;
    // الربط بجلسة المستخدم المسجّل في الصفحة الرئيسية (بدون إنشاء تطبيق ثانٍ أو دخول مجهول)
    var app=(window.__exFB&&window.__exFB.app)?window.__exFB.app:null;
    if(app){
      trdFB.auth=window.__exFB.auth||authM.getAuth(app);
      trdFB.db=window.__exFB.db||fsM.getFirestore(app);
    }else{
      var appM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js');
      var app2=appM.initializeApp(TRD_FB_CFG,'trdApp');
      trdFB.auth=authM.getAuth(app2);
      trdFB.db=fsM.getFirestore(app2);
    }
    // التحقق من جلسة المستخدم بالخلفية — نفس جلسة المستخدم المسجّل
    authM.onAuthStateChanged(trdFB.auth,async function(u){
      try{
        if(!u){trdFB.ready=false;trdFB.uid=null;return;}
        trdFB.uid=u.uid;
        trdFB.ready=true;
        await trdEnsureUserDoc();
        await trdSeedCodes();
      }catch(e){}
    });
  }catch(e){}
})();

// ===== إنشاء مستند المستخدم إن لم يكن موجوداً (مع حقل balance) =====
async function trdEnsureUserDoc(){
  var fs=trdFB.fs,ref=fs.doc(trdFB.db,'users',trdFB.uid);
  var snap=await fs.getDoc(ref);
  if(!snap.exists()){await fs.setDoc(ref,{balance:0,uses:[],createdAt:Date.now()},{merge:true});}
}

// ===== إنشاء 300 كود عند أول فتح (مرة واحدة فقط) =====
async function trdSeedCodes(){
  var fs=trdFB.fs,metaRef=fs.doc(trdFB.db,'meta','codes');
  var meta=await fs.getDoc(metaRef);
  if(meta.exists()&&meta.data().seeded)return;
  var chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var batch=fs.writeBatch(trdFB.db);
  var usedSet={};
  for(var i=0;i<TRD_TOTAL_CODES;i++){
    var code='';
    do{code='';for(var j=0;j<8;j++)code+=chars.charAt(Math.floor(Math.random()*chars.length));}while(usedSet[code]);
    usedSet[code]=1;
    batch.set(fs.doc(trdFB.db,'codes',code),{code:code,used:false,usedBy:null,usedAt:null,createdAt:Date.now()});
  }
  batch.set(metaRef,{seeded:true,total:TRD_TOTAL_CODES,seededAt:Date.now()});
  await batch.commit();
}

// ===== عدد الأكواد المستخدمة خلال آخر 24 ساعة =====
function trdUsesLast24h(uses){
  var now=Date.now(),day=24*60*60*1000,c=0;
  (uses||[]).forEach(function(t){if(now-t<day)c++;});
  return c;
}

// ===== طبقة التحميل السوداء الشفافة =====
function trdShowLoading(){
  trdHideLoading();
  var ov=document.createElement('div');
  ov.id='trdOverlay';
  ov.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.72);z-index:99998;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px';
  ov.innerHTML='<div style="width:52px;height:52px;border:4px solid rgba(255,255,255,.15);border-top-color:#2f7bf6;border-radius:50%;animation:trdspin .8s linear infinite"></div>'
  +'<div style="font-size:14px;font-weight:600;color:#cfe2ff;letter-spacing:.3px">جاري التحقق من الكود...</div>';
  document.body.appendChild(ov);
}
function trdHideLoading(){var o=document.getElementById('trdOverlay');if(o)o.remove();}

// ===== رسالة نجاح / خطأ بملء الشاشة =====
function trdShowResult(ok,title,msg){
  trdHideLoading();
  var old=document.getElementById('trdResult');if(old)old.remove();
  var color=ok?'#22c55e':'#ef4444';
  var icon=ok
    ?'<svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="'+color+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12.5 11 15.5 16 9.5"/></svg>'
    :'<svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="'+color+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>';
  var d=document.createElement('div');
  d.id='trdResult';
  d.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(3,7,17,.96);z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px';
  d.innerHTML='<div style="margin-bottom:18px;filter:drop-shadow(0 0 18px '+(ok?'rgba(34,197,94,.5)':'rgba(239,68,68,.5)')+')">'+icon+'</div>'
  +'<div style="font-size:24px;font-weight:800;color:'+color+';margin-bottom:10px">'+title+'</div>'
  +'<div style="font-size:15px;font-weight:500;color:#e8f1ff;line-height:1.9;max-width:320px">'+msg+'</div>'
  +'<div onclick="this.parentElement.remove()" style="margin-top:30px;border-radius:10px;background:linear-gradient(135deg,#1a5fb4 0%,#2f7bf6 55%,#00b8e5 100%);border:1px solid rgba(160,215,255,.5);padding:13px 44px;cursor:pointer;box-shadow:0 10px 30px rgba(20,90,220,.45)"><span style="font-size:15px;font-weight:700;color:#fff">حسناً</span></div>';
  document.body.appendChild(d);
}

// ===== معالج زر التزامن بالصفقة =====
async function trdSync(){
  if(trdFB.busy)return;
  var btn=document.getElementById('trdSyncBtn'),txt=document.getElementById('trdSyncBtnTxt');
  var input=document.getElementById('trdCodeInput');
  var code=input?input.value.trim().toUpperCase():'';
  if(!code){trdShowResult(false,'خطأ','يرجى إدخال كود الطلب أولاً');return;}
  if(!trdFB.ready){trdShowResult(false,'خطأ','جاري التحقق من الجلسة، حاول مرة أخرى بعد ثوانٍ');return;}
  trdFB.busy=true;
  if(txt)txt.textContent='جاري التزامن...';
  if(btn)btn.style.animation='trdglow 1.2s infinite';
  trdShowLoading();
  try{
    var fs=trdFB.fs;
    // 1) قراءة رصيد المستخدم وسجل استخدامه من Firebase
    var userRef=fs.doc(trdFB.db,'users',trdFB.uid);
    var userSnap=await fs.getDoc(userRef);
    var udata=userSnap.exists()?userSnap.data():{balance:0,uses:[]};
    // 2) التحقق من حد 3 أكواد خلال آخر 24 ساعة
    if(trdUsesLast24h(udata.uses)>=TRD_MAX_CODES_PER_DAY){
      trdShowResult(false,'خطأ','لقد تجاوزت الحد المسموح: 3 أكواد خلال 24 ساعة');
      return;
    }
    // 3) البحث عن الكود
    var q=fs.query(fs.collection(trdFB.db,'codes'),fs.where('code','==',code));
    var qs=await fs.getDocs(q);
    if(qs.empty){trdShowResult(false,'خطأ','الكود غير صالح');return;}
    var codeRef=qs.docs[0].ref;
    if(qs.docs[0].data().used){trdShowResult(false,'خطأ','هذا الكود تم استخدامه من قبل');return;}
    // 4) معاملة ذرّية: تعليم الكود كمستخدم + احتساب الربح وإضافته للرصيد
    var result=await fs.runTransaction(trdFB.db,async function(tx){
      var cSnap=await tx.get(codeRef);
      if(!cSnap.exists())throw 'invalid';
      if(cSnap.data().used)throw 'used';
      var uSnap=await tx.get(userRef);
      var ud=uSnap.exists()?uSnap.data():{balance:0,uses:[]};
      var now=Date.now(),day=24*60*60*1000;
      var recent=(ud.uses||[]).filter(function(t){return now-t<day;});
      if(recent.length>=TRD_MAX_CODES_PER_DAY)throw 'limit';
      var balance=Number(ud.balance)||0;
      var profit=balance*TRD_PROFIT_RATE;
      var newBalance=balance+profit;
      tx.update(codeRef,{used:true,usedBy:trdFB.uid,usedAt:now});
      tx.set(userRef,{balance:newBalance,uses:recent.concat([now])},{merge:true});
      return {profit:profit,newBalance:newBalance};
    });
    if(input)input.value='';
    try{
      var balEl=document.getElementById('balV');
      if(balEl)balEl.textContent=result.newBalance.toFixed(2);
      localStorage.setItem('trdLastSync',JSON.stringify({code:code,profit:result.profit,balance:result.newBalance,at:Date.now()}));
    }catch(e){}
    trdShowResult(true,'تم التزامن بنجاح','تمت إضافة ربح '+result.profit.toFixed(4)+' إلى رصيدك<br>رصيدك الجديد: '+result.newBalance.toFixed(4));
  }catch(e){
    if(e==='used')trdShowResult(false,'خطأ','هذا الكود تم استخدامه من قبل');
    else if(e==='invalid')trdShowResult(false,'خطأ','الكود غير صالح');
    else if(e==='limit')trdShowResult(false,'خطأ','لقد تجاوزت الحد المسموح: 3 أكواد خلال 24 ساعة');
    else trdShowResult(false,'خطأ','حدث خطأ أثناء التحقق، حاول مرة أخرى');
  }finally{
    trdHideLoading();
    trdFB.busy=false;
    if(txt)txt.textContent='التزامن بالصفقة';
    if(btn)btn.style.animation='';
  }
}
