astHTML='<div class="astin" dir="ltr"><div class="acard"><div><div class="albl">إجمالي الأصول (USDT)<svg id="ey" onclick="tgE()" viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div><div class="aval" id="av">0.00</div></div><div class="aday"><div class="albl2">أرباح اليوم</div><div class="aval2" id="ady">0</div></div></div><div class="abtns"><button class="abtn dep" onclick="openDep()"><img src="https://i.ibb.co/FbbVgh74/IMG.png" alt="">الإيداع</button><button class="abtn wd" onclick="openWd()"><img src="https://i.ibb.co/DDgGy91y/IMG.png" alt="">سحب العملات</button></div><div class="atabs"><div class="atab on">الأصول</div><div class="atab">إجمالي الأصول</div><div class="arec"><svg viewBox="0 0 24 24"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 8.5h6M9 12h6M9 15.5h4"/></svg>السجل</div></div><div class="arow"><span>حساب الأموال</span><b id="fundV">0 USDT</b></div><div class="arow"><span>أرباح الفريق</span><b>0.00 USDT</b></div></div>';
var depHTML='<div class="dpin"><div class="wdt"><div class="pfb" onclick="closeDep()"><img src="https://i.ibb.co/k69JQ9LS/IMG.png" alt="back"></div><h1>الإيداع في العملة</h1><div class="wdb" onclick="openRec(\'dep\')"><svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M9 11.5h6M9 15.5h6M9 7.5h2.5"/></svg></div></div><div class="dsub">اختيار العملة</div><div class="dnet"><span>USDT-TRC20</span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div><div class="dqrw"><div class="dqr"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAAE2AQAAAADDx4MEAAACHklEQVR4nO2aQYrkMAxFv8beOzfoo6Ru0GeamzkHKkiWAzF/FpJdLpqBhmacVEpZFKn4QWyE8qVvC/Gdq/z6FgY49zMOzO2OayBJ0gbSXofSfvZ1XIhLJMkdAIpgmQANyrzaHfNLrOMyXBGRCcAyAbCgtGcicvT83pqb10AAQfNj3HudAwDEL0+2CRqKZbr/v/c6928ukFwBIJFyA4BlKqJCP5u8v8I6rsBFYJP2r0QuH3vk8mkPbCidfh1X4ayC0jIqkaofM6k/9fJ6dxDXtRk1KDtqPB4DHo9BnHaBAAKZUVMDj1YQgczeD47itD9/6Dlzev58cQdmz49RnIbCkkQ/VXv9hiVqznh+jON6/8oSor+am3L2dVyF63JBQ5EB2F0Tes+PYZy5uhmWH52SsCm768cwzvQjJ5prZQUV+5rL/fZhnEm5eutrqP3H2uRkBTwe4zhYBaWpAXRFb4api+v5OC4C6S4AinD5vKvdK81qF6TgfuIRXKDctghmFA0PmvErtxPM7424QMxrkcdWFH9LBHTjUER8v3Yc98XfBUxTuv7c9WMY93S+hF1BpT/VzvJ4jOPa+ZJFRLBMgd0mOrZ49Pzeimt+yY6HoVtr4Hp5fz6Me4pH35DX43Gr9+fHcUXqrmCg3NIfEfnQdv0c87s+F2GuVQHm2qITKHVgi/uR83tDbhMRkainfKqABwKbSDv58wLruAQnfr79VNxfhObGJu8HsgcAAAAASUVORK5CYII=" alt="QR"></div></div><div class="dcpr"><span class="t">عنوان الإيداع في العملة</span><span class="dcp" onclick="cpT(\'TZ76Nx4tri1Seth6TuVGknLQDU49dKYxg\')"><svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>نسخ</span></div><div class="daddr">TZ76Nx4tri1Seth6TuVGknLQDU49dKYxg</div><div class="wnote"><b>ملاحظة أمنية</b><p>The minimum deposit amount is 100 USDT. Please ensure that the currency and grid information are correct to avoid financial loss. If the deposit currency is incorrect or the deposit amount is less than 100 USDT, the lost funds will be irrecoverable.</p></div></div>';
var d=document.getElementById('dep');if(d){d.className='dpw';d.innerHTML=depHTML}

var AST_FB_CFG={apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",authDomain:"hhhxh-5ebe4.firebaseapp.com",projectId:"hhhxh-5ebe4",storageBucket:"hhhxh-5ebe4.firebasestorage.app",messagingSenderId:"79243000696",appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",measurementId:"G-08BR6LN6PT"};
var astFB={ready:false,uid:null,db:null,auth:null,fs:null};
var astBal=(typeof astBal!=='undefined')?astBal:0;
var astEyeOpen=(typeof astEyeOpen!=='undefined')?astEyeOpen:true;
try{var _astEyeSaved=localStorage.getItem('astEye');if(_astEyeSaved==='0')astEyeOpen=false;}catch(e){}
var AST_EYE_OPEN='<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>';
var AST_EYE_OFF='<path d="M3 3l18 18"/><path d="M10.6 5.1A9.7 9.7 0 0 1 12 5c5 0 9 4.6 10 7-.35.9-1.2 2.3-2.6 3.6M6.6 6.6C4.2 8 2.6 10.4 2 12c1 2.4 5 7 10 7 1.4 0 2.8-.35 4-.95M9.9 9.9a3 3 0 0 0 4.2 4.2"/>';

if(!window.__astInit){
window.__astInit=true;
(async function(){
  try{
    var authM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js');
    var fsM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js');
    astFB.fs=fsM;
    var app=(window.__exFB&&window.__exFB.app)?window.__exFB.app:null;
    if(app){
      astFB.auth=window.__exFB.auth||authM.getAuth(app);
      astFB.db=window.__exFB.db||fsM.getFirestore(app);
    }else{
      var appM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js');
      var app2;
      try{app2=appM.getApp('trdApp');}catch(e){app2=appM.initializeApp(AST_FB_CFG,'astApp');}
      astFB.auth=authM.getAuth(app2);
      astFB.db=fsM.getFirestore(app2);
    }
    authM.onAuthStateChanged(astFB.auth,async function(u){
      try{
        if(!u){astFB.ready=false;astFB.uid=null;return;}
        astFB.uid=u.uid;
        astFB.ready=true;
        await astLoadUser();
      }catch(e){}
    });
  }catch(e){}
})();
}

async function astLoadUser(){
  try{
    var fs=astFB.fs;
    var snap=await fs.getDoc(fs.doc(astFB.db,'users',astFB.uid));
    if(snap.exists()){
      var d=snap.data()||{};
      var nb=Number(d.balance);
      if(isFinite(nb))astBal=nb;
      astRenderBal();
      var now=Date.now(),day=24*60*60*1000,profit=0;
      (d.records||[]).forEach(function(r){if(r&&r.type==='buy'&&(now-r.at)<day)profit+=Number(r.amount)||0;});
      var ady=document.getElementById('ady');
      if(ady)ady.textContent=profit.toFixed(2);
    }
  }catch(e){}
}

function astRenderBal(){
  var nb=Number(astBal);
  if(!isFinite(nb))nb=0;
  var av=document.getElementById('av');
  if(av){
    var cur=av.textContent.trim();
    if(astEyeOpen){
      av.textContent=nb>0?nb.toFixed(2):(av.dataset.astLast||cur||'0.00');
    }else{
      if(cur&&cur!=='*** ***'&&cur!=='0.00')av.dataset.astLast=cur;
      av.textContent='*** ***';
    }
  }
  var fv=document.getElementById('fundV');
  if(fv){
    var fcur=fv.textContent.replace('USDT','').trim();
    if(astEyeOpen){
      fv.textContent=(nb>0?nb.toFixed(2):(fv.dataset.astLast||fcur||'0.00'))+' USDT';
    }else{
      if(fcur&&fcur!=='*** ***'&&fcur!=='0.00')fv.dataset.astLast=fcur;
      fv.textContent='*** *** USDT';
    }
  }
  var ey=document.getElementById('ey');
  if(ey){var ic=astEyeOpen?AST_EYE_OPEN:AST_EYE_OFF;if(ey.innerHTML!==ic)ey.innerHTML=ic;}
}

async function astRefresh(){
  astRenderBal();
  if(astFB.ready&&astFB.uid){
    try{await astLoadUser();}catch(e){astRenderBal();}
  }
}

if(!window.__astObserver&&typeof MutationObserver!=='undefined'&&document.body){
  window.__astObserver=new MutationObserver(function(){
    var av=document.getElementById('av');
    if(av&&!av.dataset.astBound){
      av.dataset.astBound='1';
      astRefresh();
    }
  });
  window.__astObserver.observe(document.body,{childList:true,subtree:true});
}
astRefresh();

window.tgE=function(){
  astEyeOpen=!astEyeOpen;
  try{localStorage.setItem('astEye',astEyeOpen?'1':'0');}catch(e){}
  astRenderBal();
};

/* ===== قسم السحب (رمادي شفاف + رصيد حقيقي + عنوان دائم من Firebase) ===== */
var astWdAddr='';
var wdHTML='<div class="wdin" dir="ltr" style="min-height:100vh;background:rgba(120,120,120,0.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);">'
+'<div class="wdt"><div class="pfb" onclick="closeWd()"><img src="https://i.ibb.co/k69JQ9LS/IMG.png" alt="back"></div><h1>سحب العملات</h1><div class="wdb" onclick="openRec(\'wd\')"><svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M9 11.5h6M9 15.5h6M9 7.5h2.5"/></svg></div></div>'
+'<div style="margin:14px;padding:16px;border-radius:14px;background:rgba(95,95,95,0.4);">'
+'<div style="font-size:14px;color:#f2f2f2;">الرصيد المتاح للسحب</div>'
+'<div id="wdbal" style="font-size:26px;font-weight:700;color:#ffffff;margin-top:6px;">0.00 USDT</div>'
+'</div>'
+'<div style="margin:14px;padding:16px;border-radius:14px;background:rgba(95,95,95,0.4);">'
+'<div style="font-size:14px;color:#f2f2f2;margin-bottom:8px;">عنوان السحب الدائم (USDT-TRC20)</div>'
+'<input id="wdaddr" readonly placeholder="لم يتم تعيين عنوان بعد" style="width:100%;box-sizing:border-box;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.25);background:rgba(70,70,70,0.55);color:#ffffff;font-size:15px;direction:ltr;text-align:left;">'
+'<div style="font-size:13px;color:#f0f0f0;margin-top:8px;line-height:1.7;">هذا العنوان دائم ومحفوظ في حسابك على Firebase ولا يمكن تغييره بعد حفظه.</div>'
+'</div>'
+'<div style="margin:14px;padding:16px;border-radius:14px;background:rgba(95,95,95,0.4);color:#f6f6f6;">'
+'<b style="font-size:15px;">تعليمات السحب</b>'
+'<p style="margin:8px 0 0;font-size:14px;line-height:1.8;">1. الحد الأدنى للسحب هو 10 USDT.</p>'
+'<p style="margin:4px 0 0;font-size:14px;line-height:1.8;">2. يتم إرسال العملات إلى عنوان السحب الدائم المحفوظ في حسابك فقط.</p>'
+'<p style="margin:4px 0 0;font-size:14px;line-height:1.8;">3. تأكد من اختيار شبكة USDT-TRC20 لتجنب فقدان الأموال.</p>'
+'<p style="margin:4px 0 0;font-size:14px;line-height:1.8;">4. تتم معالجة طلبات السحب خلال 24 ساعة.</p>'
+'</div>'
+'</div>';

function astWdSheet(show){
  var sh=document.getElementById('wdSheet');
  if(!sh){
    sh=document.createElement('div');
    sh.id='wdSheet';
    sh.innerHTML='<div onclick="closeWdSheet()" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.35);z-index:9998;"></div>'
    +'<div dir="rtl" style="position:fixed;left:0;right:0;bottom:0;height:50vh;z-index:9999;background:rgba(125,125,125,0.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:18px 18px 0 0;padding:18px 16px;box-sizing:border-box;overflow-y:auto;">'
    +'<div style="display:flex;justify-content:space-between;align-items:center;">'
    +'<div style="font-size:17px;font-weight:700;color:#ffffff;">عنوان السحب الدائم</div>'
    +'<div onclick="closeWdSheet()" style="font-size:14px;color:#ffffff;cursor:pointer;padding:4px 10px;border-radius:8px;background:rgba(70,70,70,0.5);">إغلاق</div>'
    +'</div>'
    +'<div style="font-size:14px;color:#ffffff;line-height:1.8;margin-top:10px;">أدخل عنوان محفظة USDT-TRC20 الخاص بك. سيتم حفظ هذا العنوان في حسابك على Firebase بشكل دائم، ولا يمكن تغييره بعد الحفظ.</div>'
    +'<input id="wdSheetIn" placeholder="أدخل عنوان السحب الدائم" style="width:100%;box-sizing:border-box;margin-top:12px;padding:13px;border-radius:10px;border:1px solid rgba(255,255,255,0.35);background:rgba(255,255,255,0.15);color:#ffffff;font-size:15px;direction:ltr;text-align:left;">'
    +'<button id="wdSheetSave" onclick="astWdSave()" style="width:100%;margin-top:14px;padding:13px;border:none;border-radius:10px;background:rgba(60,60,60,0.7);color:#ffffff;font-size:15px;font-weight:700;cursor:pointer;">تأكيد وحفظ العنوان بشكل دائم</button>'
    +'<div id="wdSheetMsg" style="font-size:13px;color:#ffe9a8;margin-top:10px;line-height:1.7;text-align:center;">تنبيه: بعد الحفظ لا يمكن تغيير العنوان نهائيًا.</div>'
    +'</div>';
    document.body.appendChild(sh);
  }
  sh.style.display=show?'block':'none';
}

window.closeWdSheet=function(){astWdSheet(false);};

function astWdFill(){
  var inp=document.getElementById('wdaddr');
  if(inp)inp.value=astWdAddr||'';
  var sin=document.getElementById('wdSheetIn');
  if(sin){sin.value=astWdAddr||'';sin.readOnly=!!astWdAddr;}
  var btn=document.getElementById('wdSheetSave');
  if(btn)btn.style.display=astWdAddr?'none':'block';
  var msg=document.getElementById('wdSheetMsg');
  if(msg)msg.textContent=astWdAddr?'عنوانك الدائم محفوظ في حسابك على Firebase ولا يمكن تغييره.':'تنبيه: بعد الحفظ لا يمكن تغيير العنوان نهائيًا.';
}

window.openWd=async function(){
  var d=document.getElementById('wd')||document.getElementById('withdraw');
  if(d){d.className='wdw';d.innerHTML=wdHTML;}
  var nb=Number(astBal);if(!isFinite(nb))nb=0;
  var wb=document.getElementById('wdbal');
  if(wb)wb.textContent=nb.toFixed(2)+' USDT';
  if(astFB.ready&&astFB.uid){
    try{
      var fs=astFB.fs;
      var snap=await fs.getDoc(fs.doc(astFB.db,'users',astFB.uid));
      if(snap.exists()){
        var dd=snap.data()||{};
        if(typeof dd.withdrawAddress==='string'&&dd.withdrawAddress)astWdAddr=dd.withdrawAddress;
      }
    }catch(e){}
  }
  astWdFill();
};

window.closeWd=function(){
  astWdSheet(false);
  var d=document.getElementById('wd')||document.getElementById('withdraw');
  if(d){d.className='';d.innerHTML='';}
};

window.astWdSave=async function(){
  var inp=document.getElementById('wdSheetIn');
  if(!inp)return;
  if(astWdAddr){alert('العنوان محفوظ مسبقًا ولا يمكن تغييره.');astWdFill();return;}
  var v=(inp.value||'').trim();
  if(v.length<20){alert('يرجى إدخال عنوان سحب صحيح.');return;}
  if(!confirm('تأكيد نهائي: سيتم حفظ هذا العنوان في حسابك على Firebase بشكل دائم ولا يمكن تغييره لاحقًا. هل أنت متأكد؟'))return;
  if(!(astFB.ready&&astFB.uid)){alert('يرجى تسجيل الدخول أولاً.');return;}
  try{
    var fs=astFB.fs;
    var ref=fs.doc(astFB.db,'users',astFB.uid);
    var snap=await fs.getDoc(ref);
    if(snap.exists()){
      var dd=snap.data()||{};
      if(typeof dd.withdrawAddress==='string'&&dd.withdrawAddress){
        astWdAddr=dd.withdrawAddress;astWdFill();
        alert('العنوان محفوظ مسبقًا ولا يمكن تغييره.');return;
      }
    }
    await fs.setDoc(ref,{withdrawAddress:v},{merge:true});
    astWdAddr=v;
    astWdFill();
    alert('تم حفظ عنوان السحب الدائم بنجاح.');
  }catch(e){alert('حدث خطأ أثناء الحفظ، حاول مرة أخرى.');}
};
