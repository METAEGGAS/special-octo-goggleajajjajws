var trdHTML='<style>@keyframes trdpls{0%,100%{opacity:1}50%{opacity:.3}}@keyframes trdglow{0%,100%{box-shadow:0 10px 30px rgba(20,90,220,.45),0 0 18px rgba(0,229,255,.25)}50%{box-shadow:0 10px 30px rgba(20,90,220,.6),0 0 34px rgba(0,229,255,.5)}}@keyframes trdspin{to{transform:rotate(360deg)}}@keyframes trdspinrev{to{transform:rotate(-360deg)}}</style>'
+'<div style="padding:8px 14px 40px;background:#050a14;min-height:100%">'
+'<div style="display:flex;align-items:center;justify-content:flex-end;padding:6px 2px 14px">'
+'<div onclick="goHome()" style="display:flex;align-items:center;gap:7px;cursor:pointer">'
+'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f7bf6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.5"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>'
+'<span style="font-size:15px;font-weight:600;color:#e8f1ff;letter-spacing:.3px">السجل</span>'
+'</div>'
+'</div>'
+'<div style="position:relative;border-radius:22px;overflow:hidden;border:1px solid rgba(0,229,255,.3);box-shadow:0 0 0 1px rgba(47,123,246,.15),0 18px 44px rgba(0,20,60,.6),inset 0 0 40px rgba(0,229,255,.06);background:radial-gradient(ellipse at 50% 82%,#062046 0%,#041226 58%,#020a18 100%)">'
+'<img src="https://i.ibb.co/Pv3gPVXM/file-0000000034348210919c6cf6b2d1473f.png" alt="trade sync" style="width:100%;display:block">'
+'<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 20px">'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)">نشر للمستخدمين</div>'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)">الأصدقاء للتزامن</div>'
+'<div style="font-size:34px;font-weight:800;color:#fff;line-height:1.55;text-shadow:0 2px 14px rgba(0,10,40,.85),0 0 26px rgba(0,180,255,.35)">معهم</div>'
+'</div>'
+'</div>'
+'<div style="margin-top:20px;text-align:center;font-size:15px;font-weight:500;color:#f2f6ff;letter-spacing:.2px">الحصول على عمولة دعوة عالية</div>'
+'<div style="margin-top:18px;background:#1a2130;border:1px solid rgba(150,195,245,.14);border-radius:10px;padding:16px 14px">'
+'<input id="trdCodeInput" type="text" placeholder="يرجى إدخال كود الطلب" style="width:100%;background:transparent;border:none;outline:none;color:#e8f1ff;font-size:14px;text-align:right;font-family:inherit">'
+'</div>'
+'<div id="trdSyncBtn" onclick="trdSync()" style="margin-top:16px;border-radius:10px;background:linear-gradient(135deg,#1a5fb4 0%,#2f7bf6 55%,#00b8e5 100%);border:1px solid rgba(160,215,255,.5);padding:16px;text-align:center;cursor:pointer;box-shadow:0 10px 30px rgba(20,90,220,.45),inset 0 1px 1px rgba(220,240,255,.4)">'
+'<span id="trdSyncBtnTxt" style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.3px">التزامن بالصفقة</span>'
+'</div>'
+'</div>';

var TRD_FB_CFG={apiKey:"AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",authDomain:"hhhxh-5ebe4.firebaseapp.com",projectId:"hhhxh-5ebe4",storageBucket:"hhhxh-5ebe4.firebasestorage.app",messagingSenderId:"79243000696",appId:"1:79243000696:web:ee0fb2d2ccce791954e68d",measurementId:"G-08BR6LN6PT"};
var TRD_PROFIT_RATE=0.016667;
var TRD_MAX_CODES_PER_DAY=3;
var TRD_TOTAL_CODES=300;
var trdFB={ready:false,uid:null,db:null,auth:null,fs:null,busy:false};
var trdResultTimer=null;

(async function(){
  try{
    var authM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js');
    var fsM=await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js');
    trdFB.fs=fsM;
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

async function trdEnsureUserDoc(){
  var fs=trdFB.fs,ref=fs.doc(trdFB.db,'users',trdFB.uid);
  var snap=await fs.getDoc(ref);
  if(!snap.exists()){await fs.setDoc(ref,{balance:0,uses:[],createdAt:Date.now()},{merge:true});}
}

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

function trdUsesLast24h(uses){
  var now=Date.now(),day=24*60*60*1000,c=0;
  (uses||[]).forEach(function(t){if(now-t<day)c++;});
  return c;
}

function trdShowLoading(){
  trdHideLoading();
  var ov=document.createElement('div');
  ov.id='trdOverlay';
  ov.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:99998;display:flex;align-items:center;justify-content:center;pointer-events:none;background:transparent';
  ov.innerHTML='<div style="position:relative;width:58px;height:58px">'
  +'<div style="position:absolute;top:0;left:0;width:58px;height:58px;box-sizing:border-box;border:5px solid transparent;border-top-color:#ef4444;border-radius:50%;animation:trdspin .9s linear infinite"></div>'
  +'<div style="position:absolute;top:10px;left:10px;width:38px;height:38px;box-sizing:border-box;border:5px solid transparent;border-top-color:#22c55e;border-radius:50%;animation:trdspinrev .9s linear infinite"></div>'
  +'</div>';
  document.body.appendChild(ov);
}
function trdHideLoading(){var o=document.getElementById('trdOverlay');if(o)o.remove();}

function trdHideResult(){
  if(trdResultTimer){clearTimeout(trdResultTimer);trdResultTimer=null;}
  document.removeEventListener('click',trdHideResult,true);
  var d=document.getElementById('trdResult');if(d)d.remove();
}

function trdShowResult(ok){
  trdHideLoading();
  trdHideResult();
  var icon=ok
    ?'https://i.ibb.co/prhVWmWy/IMG.png'
    :'https://i.ibb.co/6RN7BvjS/file-00000000baa882109658b900050054ca.png';
  var txt=ok?'تم اتباع الطلب بنجاح':'نفذ وقت الطلب';
  var d=document.createElement('div');
  d.id='trdResult';
  d.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;display:flex;align-items:center;justify-content:center;pointer-events:none;background:transparent';
  d.innerHTML='<div style="pointer-events:auto;background:#3f444f;border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:22px 34px;display:flex;flex-direction:column;align-items:center;gap:12px;cursor:pointer;box-shadow:0 12px 34px rgba(0,0,0,.5)">'
  +'<img src="'+icon+'" alt="" style="width:84px;height:84px;object-fit:contain;display:block">'
  +'<div style="font-size:15px;font-weight:700;color:#e8f1ff;text-align:center;letter-spacing:.2px">'+txt+'</div>'
  +'</div>';
  document.body.appendChild(d);
  trdResultTimer=setTimeout(trdHideResult,3000);
  document.addEventListener('click',trdHideResult,true);
}

async function trdSync(){
  if(trdFB.busy)return;
  var btn=document.getElementById('trdSyncBtn'),txt=document.getElementById('trdSyncBtnTxt');
  var input=document.getElementById('trdCodeInput');
  var code=input?input.value.trim().toUpperCase():'';
  if(!code){trdShowResult(false);return;}
  if(!trdFB.ready){trdShowResult(false);return;}
  trdFB.busy=true;
  if(txt)txt.textContent='جاري التزامن...';
  if(btn)btn.style.animation='trdglow 1.2s infinite';
  trdShowLoading();
  try{
    var fs=trdFB.fs;
    var userRef=fs.doc(trdFB.db,'users',trdFB.uid);
    var userSnap=await fs.getDoc(userRef);
    var udata=userSnap.exists()?userSnap.data():{balance:0,uses:[]};
    if(trdUsesLast24h(udata.uses)>=TRD_MAX_CODES_PER_DAY){
      trdShowResult(false);
      return;
    }
    var q=fs.query(fs.collection(trdFB.db,'codes'),fs.where('code','==',code));
    var qs=await fs.getDocs(q);
    if(qs.empty){trdShowResult(false);return;}
    var codeRef=qs.docs[0].ref;
    if(qs.docs[0].data().used){trdShowResult(false);return;}
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
    trdShowResult(true);
  }catch(e){
    trdShowResult(false);
  }finally{
    trdHideLoading();
    trdFB.busy=false;
    if(txt)txt.textContent='التزامن بالصفقة';
    if(btn)btn.style.animation='';
  }
}
