// ===== MD5 =====
function md5(s){function sa(x,y){const l=(x&65535)+(y&65535);return((x>>16)+(y>>16)+(l>>16)<<16)|(l&65535)}function br(n,c){return(n<<c)|(n>>>(32-c))}function cm(q,a,b,x,s,t){return sa(br(sa(sa(a,q),sa(x,t)),s),b)}function ff(a,b,c,d,x,s,t){return cm((b&c)|(~b&d),a,b,x,s,t)}function gg(a,b,c,d,x,s,t){return cm((b&d)|(c&~d),a,b,x,s,t)}function hh(a,b,c,d,x,s,t){return cm(b^c^d,a,b,x,s,t)}function ii(a,b,c,d,x,s,t){return cm(c^(b|~d),a,b,x,s,t)}
function core(m,l){m[l>>5]|=128<<(l%32);m[(((l+64)>>>9)<<4)+14]=l;let a=1732584193,b=-271733879,c=-1732584194,d=271733878;for(let i=0;i<m.length;i+=16){const[oa,ob,oc,od]=[a,b,c,d];a=ff(a,b,c,d,m[i],7,-680876936);d=ff(d,a,b,c,m[i+1],12,-389564586);c=ff(c,d,a,b,m[i+2],17,606105819);b=ff(b,c,d,a,m[i+3],22,-1044525330);a=ff(a,b,c,d,m[i+4],7,-176418897);d=ff(d,a,b,c,m[i+5],12,1200080426);c=ff(c,d,a,b,m[i+6],17,-1473231341);b=ff(b,c,d,a,m[i+7],22,-45705983);a=ff(a,b,c,d,m[i+8],7,1770035416);d=ff(d,a,b,c,m[i+9],12,-1958414417);c=ff(c,d,a,b,m[i+10],17,-42063);b=ff(b,c,d,a,m[i+11],22,-1990404162);a=ff(a,b,c,d,m[i+12],7,1804603682);d=ff(d,a,b,c,m[i+13],12,-40341101);c=ff(c,d,a,b,m[i+14],17,-1502002290);b=ff(b,c,d,a,m[i+15],22,1236535329);a=gg(a,b,c,d,m[i+1],5,-165796510);d=gg(d,a,b,c,m[i+6],9,-1069501632);c=gg(c,d,a,b,m[i+11],14,643717713);b=gg(b,c,d,a,m[i],20,-373897302);a=gg(a,b,c,d,m[i+5],5,-701558691);d=gg(d,a,b,c,m[i+10],9,38016083);c=gg(c,d,a,b,m[i+15],14,-660478335);b=gg(b,c,d,a,m[i+4],20,-405537848);a=gg(a,b,c,d,m[i+9],5,568446438);d=gg(d,a,b,c,m[i+14],9,-1019803690);c=gg(c,d,a,b,m[i+3],14,-187363961);b=gg(b,c,d,a,m[i+8],20,1163531501);a=gg(a,b,c,d,m[i+13],5,-1444681467);d=gg(d,a,b,c,m[i+2],9,-51403784);c=gg(c,d,a,b,m[i+7],14,1735328473);b=gg(b,c,d,a,m[i+12],20,-1926607734);a=hh(a,b,c,d,m[i+5],4,-378558);d=hh(d,a,b,c,m[i+8],11,-2022574463);c=hh(c,d,a,b,m[i+11],16,1839030562);b=hh(b,c,d,a,m[i+14],23,-35309556);a=hh(a,b,c,d,m[i+1],4,-1530992060);d=hh(d,a,b,c,m[i+4],11,1272893353);c=hh(c,d,a,b,m[i+7],16,-155497632);b=hh(b,c,d,a,m[i+10],23,-1094730640);a=hh(a,b,c,d,m[i+13],4,681279174);d=hh(d,a,b,c,m[i],11,-358537222);c=hh(c,d,a,b,m[i+3],16,-722521979);b=hh(b,c,d,a,m[i+6],23,76029189);a=hh(a,b,c,d,m[i+9],4,-640364487);d=hh(d,a,b,c,m[i+12],11,-421815835);c=hh(c,d,a,b,m[i+15],16,530742520);b=hh(b,c,d,a,m[i+2],23,-995338651);a=ii(a,b,c,d,m[i],6,-198630844);d=ii(d,a,b,c,m[i+7],10,1126891415);c=ii(c,d,a,b,m[i+14],15,-1416354905);b=ii(b,c,d,a,m[i+5],21,-57434055);a=ii(a,b,c,d,m[i+12],6,1700485571);d=ii(d,a,b,c,m[i+3],10,-1894986606);c=ii(c,d,a,b,m[i+10],15,-1051523);b=ii(b,c,d,a,m[i+1],21,-2054922799);a=ii(a,b,c,d,m[i+8],6,1873313359);d=ii(d,a,b,c,m[i+15],10,-30611744);c=ii(c,d,a,b,m[i+6],15,-1560198380);b=ii(b,c,d,a,m[i+13],21,1309151649);a=ii(a,b,c,d,m[i+4],6,-145523070);d=ii(d,a,b,c,m[i+11],10,-1120210379);c=ii(c,d,a,b,m[i+2],15,718787259);b=ii(b,c,d,a,m[i+9],21,-343485551);a=sa(a,oa);b=sa(b,ob);c=sa(c,oc);d=sa(d,od)}return[a,b,c,d]}
function s2b(s){const b={};for(let i=0;i<s.length*8;i+=8)b[i>>5]=(b[i>>5]||0)|(s.charCodeAt(i/8)&255)<<(i%32);return b}
function b2r(i){let o='';for(let j=0;j<i.length*32;j+=8)o+=String.fromCharCode((i[j>>5]>>>(j%32))&255);return o}
function r2h(i){const t='0123456789abcdef';let o='';for(let j=0;j<i.length;j++){const x=i.charCodeAt(j);o+=t[(x>>>4)&15]+t[x&15]}return o}
function utf8(s){let o='',i=-1,x;while(++i<s.length){x=s.charCodeAt(i);if(x<=127)o+=String.fromCharCode(x);else if(x<=2047)o+=String.fromCharCode(192|(x>>>6),128|(x&63));else o+=String.fromCharCode(224|(x>>>12),128|((x>>>6)&63),128|(x&63))}return o}
return r2h(b2r(core(s2b(utf8(s)),utf8(s).length*8)))}

// ===== RSA =====
const PK=`-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDfF+ITlc6m9IPM
gBBp+rhkmrzPri10fzQFyJdKtfn1RfChr8wEz5x2HhNkWhgjE7F7YAuYjTXKrNBl
W7/c9vipahvZwWdkthGd3jlWkYTcPkLsOYJPMQLcig7S1VYtT2uab3VC21ZMNV5V
LZQeGnI2CtCTEJaeIdtsAc3AUjhJzNs5tRgxdmDSBI5fb3gTIecH2WLF7ixYGaFS
iQVaDWyyuUtPbIn+yVKjyi51VemFn30GaUz9NVgjepUhvM0+Rq3+3Zjl5HXQC3e+
9tQ3bEL0kzelNKFWFWHAumxI0pdG96lymCpiaIybJAJ7RGi2NWmBmjwrm461JxIY
4S/yrmmzAgMBAAECggEAJ9yemp1D5XT/L8UaKbWQyPkVD46xtIUeCIKE9eZ6GSc8
DcfZjmqCLGDHWkD22x2jssXAjKt+lw411kaEi7jdSXgaLdhu3wHhN/IDEMLDmI7P
amIENJ4vQrSwXV+dHE96jIepzh5e1xMaHeIc+xwCmEFqbzyhjPPDvxK7bsfCIv1Q
B6hgwdiILmRTqGU3ACZdPerWbfZGcYuZ0ecUERuH9fbxvOA6/t4Ivmag5K3GCG/v
8HHz1ehPwDeYMjNzzhUmyKMAWnumVqTcxOt7D9wlRiIiGv5bxgOWnB19MqLgPqFF
3ndMttFBnmKCO9KfviuM5ruNNg3nASXKtKsLJLePIQKBgQD92plfh49yesXTxswF
oV4RjBM87D3tFbnTTpAto96JCjov5ghVfnRpUmQrQWSwqeEmSFu/1Gun02vOEAha
3M3h9c1aHSRexM0SDWXOCofqyodt/vsCGRSOu9eUgUCz8J1dyShPqpgZEPtahydn
HlDyeUSwiBWGkzUahNvsJBtFWQKBgQDg+rXspVOgZ9lKKvYY6bY/z/u+u7j7n4wy
ojsViEhQGmA+s0jWTBqBa/742wnHb3w4kKB0ojRLK0z8onr+hi20hFL9NeI4T5nK
swD/+yb0NOcC28aoGyGwyktxrtIkXVvnBDmGMsPORf3LL/OnSY5DTTtxoctEL3tk
htJU0g6p6wKBgG5G5lXfl+tNdl8Xf0362diZl0nh/szdoUowWOXayDOUI87nCTvK
oVuXlThNQiaUxeBRkrn014eiirSLtnVycmX01+6Ltl8M82EiPNWTMZRHwyl/mR9C
MfIHnBFBTRBeOJ6jYkWpgEVzYR3klLNxMg0DrVla5K7/iBQrHzaoQMiRAoGBAK5n
K+hLMUzDtFoee7BMXI+TN2BgPcIxqIkH4i2K/CO8jqeMbAZT8Kgrg/h+NFJ6Rh3D
X9+KbmdnJcMiYZ41ffDWM08/GiL08g+EPF4z37qn1/0LSjC+95sI9vslvpmaFcg8
Kiux5sBc2aVNguBH0RSzJkWsWtp8xHblXN+MBvoJAoGBAJrSVgLIkyriTAi1r/7n
s8a4H/pa+GyRh3fMqeZHYKwHrfWWbNhO6te2XYmVrkEcsu7z59lt8gnMSBTsgwdZ
GClbi66qDiZ66TYq2v5NI4knON0DWLmuzWuqikcN5PGsKbllpl9/+reGHHK9cl1S
f0I9iSQe0vQLksxTBFVgevFl
-----END PRIVATE KEY-----`;
let _rk=null;
async function getRK(){if(_rk)return _rk;const p=PK.replace(/-----[^-]+-----/g,'').replace(/\s+/g,'');const b=Uint8Array.from(atob(p),c=>c.charCodeAt(0));_rk=await crypto.subtle.importKey('pkcs8',b.buffer,{name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'},false,['sign']);return _rk}
async function rsaSign(msg){const k=await getRK();const s=await crypto.subtle.sign('RSASSA-PKCS1-v1_5',k,new TextEncoder().encode(msg));return btoa(String.fromCharCode(...new Uint8Array(s)))}

// ===== SIGN HELPERS =====
function isArr(v){return Object.prototype.toString.call(v)==='[object Array]'}
function isObj(v){return Object.prototype.toString.call(v)==='[object Object]'}
function rmArr(o){for(const k in o){if(isArr(o[k]))delete o[k];else if(isObj(o[k]))rmArr(o[k])}}
function sortP(p){const r={},ks=[];if(!p||!isObj(p))return'';const c=Object.assign({},p);rmArr(c);for(const k in c){let v=c[k];if(isObj(v))v=JSON.stringify(v);if(v===undefined||v===null||v===''||v==='null')continue;ks.push(k);r[k]=k+v}ks.sort((a,b)=>a.localeCompare(b));let o='';for(const k of ks)o+=r[k];return o}
async function hdrs(ep,data,tok,uid){const st=tok?'MD5':'RSA';const ts=Number(new Date());const hf={appId:'h5_client',sign:'',signType:st,clientType:'H5',clientVersion:'1.0.0',token:'',userId:uid||'',timestamp:ts,extra:''};const ub=ep.split('?')[0];let ss;if(st==='RSA')ss=ub+sortP(data)+sortP(hf);else ss=ub+sortP(data)+tok+sortP(hf);const sig=st==='RSA'?await rsaSign(ss):md5(ss);return{'token':tok||'','userId':uid||'','lang':'en','clientType':'H5','appId':'h5_client','clientVersion':'1.0.0','signType':st,'sign':sig,'extra':'','timestamp':String(ts),'Content-Type':'application/json','Cache-Control':'no-cache'}}

// ===== API =====
const BASE='https://api.excorx.info';
async function api(m,ep,data,tok,uid){const h=await hdrs(ep,data||{},tok,uid);const o={method:m,headers:h};if(m!=='GET'&&data&&Object.keys(data).length)o.body=JSON.stringify(data);A.log(`← ${m} ${ep}`,'lin');try{const r=await fetch(BASE+ep,o);const j=await r.json();const ok=(r.status===200)&&(j.code===200);A.log(`→ ${r.status} [${j.code}] ${j.msg||'OK'}`,ok?'lok':'lwa');return{ok,data:j,status:r.status}}catch(e){A.log('✗ خطأ: '+e.message,'ler');return{ok:false,error:e.message}}}

// ===== WALLET GEN =====
const WG={
  h(l){const a=new Uint8Array(l);crypto.getRandomValues(a);return Array.from(a).map(b=>b.toString(16).padStart(2,'0')).join('')},
  TRX(){const c='123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';let a='T';const r=new Uint8Array(33);crypto.getRandomValues(r);for(const b of r)a+=c[b%c.length];return a},
  ETH(){return'0x'+this.h(20)},
  BTC(){const c='123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';let a='1';const r=new Uint8Array(33);crypto.getRandomValues(r);for(const b of r)a+=c[b%c.length];return a.slice(0,34)}
};

// ===== NETWORKS CONFIG =====
const NETS={
  USDT:['TRC20','ERC20','BEP20'],BTC:['BTC'],ETH:['ERC20','BEP20'],TRX:['TRC20']
};
const NET_HINTS={
  TRC20:'عنوان TRX يبدأ بـ T (34 حرف)',ERC20:'عنوان ETH يبدأ بـ 0x (42 حرف)',
  BEP20:'عنوان BSC يبدأ بـ 0x (42 حرف)',BTC:'عنوان BTC يبدأ بـ 1 أو 3 أو bc1'
};

// ===== APP =====
const A={
  tok:localStorage.getItem('exc_token')||'',
  uid:localStorage.getItem('exc_userId')||'',
  wAddr:localStorage.getItem('exc_walletAddr')||'',
  wType:localStorage.getItem('exc_walletType')||'TRX',
  rWType:'TRX',
  selNet:{dp:'TRC20',wd:'TRC20'},
  cache:{ac:[],or:[],ad:[],dp:[],wd:[],rf:null,rfl:[],rfc:[]},
  _wh:{TRX:'مثال: TXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (34 حرف يبدأ بـ T)',ETH:'مثال: 0x742d35Cc... (42 حرف يبدأ بـ 0x)',BTC:'مثال: 1BvBMSEYstWet... (يبدأ بـ 1 أو 3)'},

  log(msg,cls='lin'){
    const add=id=>{const e=document.getElementById(id);if(!e)return;e.innerHTML+=`<div class="ll ${cls}">[${new Date().toLocaleTimeString()}] ${msg}</div>`;e.scrollTop=e.scrollHeight};
    add('ml');const ll=document.getElementById('ll');if(ll&&ll.style.display!=='none')add('ll');
    const rl=document.getElementById('rl');if(rl&&rl.style.display!=='none')add('rl')
  },
  clr(){document.getElementById('ml').innerHTML=''},
  toast(msg,t='',d=2800){const e=document.getElementById('toast');e.textContent=msg;e.className='show'+(t==='lok'?' success':t==='ler'?' error':'');setTimeout(()=>e.className='',d)},

  init(){if(this.tok)this.dash()},

  dash(){
    document.getElementById('aw').style.display='none';
    document.getElementById('dl').style.display='flex';
    document.getElementById('navStatus').textContent=`متصل • ${this.uid}`;
    document.getElementById('navStatus').classList.add('on');
    document.getElementById('logoutBtn').style.display='inline-flex';
    this._buildWdNets('USDT')
  },

  tab(t){
    const l=t==='login';
    document.getElementById('tl').classList.toggle('active',l);
    document.getElementById('tr').classList.toggle('active',!l);
    document.getElementById('lb').style.display=l?'block':'none';
    document.getElementById('rb').style.display=l?'none':'block'
  },

  go(p){
    document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.sbi').forEach(x=>x.classList.remove('active'));
    const pg=document.getElementById('p-'+p);if(pg)pg.classList.add('active');
    const si=document.querySelector(`[data-p="${p}"]`);if(si)si.classList.add('active')
  },

  logout(){['exc_token','exc_userId','exc_walletAddr','exc_walletInfo','exc_walletType'].forEach(k=>localStorage.removeItem(k));location.reload()},
  rwt(t,btn){this.rWType=t;document.querySelectorAll('#rb .wtbtn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.getElementById('rwh').textContent=this._wh[t]},
  genRW(){const t=this.rWType||'TRX';const a=WG[t]();document.getElementById('rwa').value=a;document.getElementById('rwi').value=t+'-Auto';this.toast('✓ تم توليد عنوان '+t+' تلقائياً','lok')},

  async sendCode(){
    const email=document.getElementById('lm').value.trim();
    if(!email){this.toast('أدخل البريد أولاً','ler');return}
    const btn=document.getElementById('scb');btn.disabled=true;
    const r=await api('POST','/login/sendEmailVerify',{email},'','');
    if(r.ok){this.toast('✓ تم إرسال الكود','lok');this._countdown(btn)}
    else{btn.disabled=false;this.toast('✗ '+(r.data?.msg||'فشل'),'ler')}
  },
  async sendRegCode(){
    const email=document.getElementById('rm').value.trim();
    if(!email){this.toast('أدخل بريدك أولاً','ler');return}
    const btn=document.getElementById('rscb');btn.disabled=true;
    const r=await api('POST','/login/sendEmailVerify',{email},'','');
    if(r.ok){this.toast('✓ تم إرسال الكود','lok');this._countdown(btn)}
    else{btn.disabled=false;this.toast('✗ '+(r.data?.msg||'فشل'),'ler')}
  },
  async sendWdCode(){
    const email=localStorage.getItem('exc_email')||'';
    if(!email){this.toast('لم يتم العثور على البريد، سجّل دخول مجدداً','ler');return}
    const btn=document.getElementById('wdECBtn');btn.disabled=true;
    const r=await api('POST','/login/sendEmailVerify',{email},'','');
    if(r.ok){this.toast('✓ تم إرسال كود التحقق للبريد','lok');this._countdown(btn)}
    else{btn.disabled=false;this.toast('✗ '+(r.data?.msg||'فشل إرسال الكود'),'ler')}
  },
  _countdown(btn,orig){const tx=orig||btn.textContent;let t=60;const tm=setInterval(()=>{btn.textContent=`${t--}ث`;if(t<0){clearInterval(tm);btn.disabled=false;btn.textContent=tx}},1000)},

  async login(){
    const email=document.getElementById('lm').value.trim();
    const pass=document.getElementById('lp').value.trim();
    const gc=document.getElementById('gc').value.trim();
    const eb=document.getElementById('le'),ll=document.getElementById('ll'),btn=document.getElementById('lbtn');
    if(!email||!pass){eb.textContent='⚠️ يرجى إدخال البريد وكلمة المرور';eb.classList.add('show');return}
    eb.classList.remove('show');ll.style.display='block';
    btn.disabled=true;btn.innerHTML='<span class="sp"></span> جاري الدخول...';
    const payload={email,password:pass,type:'0'};
    if(gc)payload.googleCode=gc;
    const r=await api('POST','/login/login',payload,'','');
    if(r.ok&&r.data.data){
      this.tok=r.data.data.token;this.uid=String(r.data.data.uid);
      localStorage.setItem('exc_token',this.tok);localStorage.setItem('exc_userId',this.uid);
      localStorage.setItem('exc_email',email);
      this.log('✓ تم تسجيل الدخول','lok');this.toast('✅ مرحباً! تم الدخول بنجاح','lok');
      this.dash();this.exAddr(r.data);this.all()
    } else {
      const code=r.data?.code,msg=r.data?.msg||'فشل تسجيل الدخول';
      eb.textContent=msg;eb.classList.add('show');this.log('✗ '+msg+` [${code}]`,'ler');
      if(code===40007||code===40008||/google|captcha|2fa|verify|code/i.test(msg)){
        document.getElementById('cs').style.display='block';this.toast('🔑 مطلوب كود التحقق','',4000)
      }
    }
    btn.disabled=false;btn.innerHTML='دخول'
  },

  async register(){
    const email=document.getElementById('rm').value.trim(),pass=document.getElementById('rp').value.trim(),conf=document.getElementById('rpc').value.trim();
    const wa=document.getElementById('rwa').value.trim(),wi=document.getElementById('rwi').value.trim();
    const inv=document.getElementById('ri').value.trim(),ec=document.getElementById('rec').value.trim();
    const eb=document.getElementById('re'),btn=document.getElementById('rbtn');
    if(!email||!pass||!conf){eb.textContent='⚠️ البريد وكلمة المرور مطلوبان';eb.classList.add('show');return}
    if(pass!==conf){eb.textContent='⚠️ كلمة المرور غير متطابقة';eb.classList.add('show');return}
    if(!wa){eb.textContent='⚠️ يرجى إدخال عنوان محفظة السحب';eb.classList.add('show');document.getElementById('rwa').classList.add('ef');return}
    eb.classList.remove('show');document.getElementById('rl').style.display='block';
    btn.disabled=true;btn.innerHTML='<span class="sp"></span> جاري الإنشاء...';
    const payload={email,password:pass,repassword:pass,type:'0',wallet_address:wa,walletlnfo:wi||wa};
    if(inv)payload.inviteCode=inv;if(ec)payload.emailCode=ec;
    localStorage.setItem('exc_walletAddr',wa);localStorage.setItem('exc_walletInfo',wi||wa);
    localStorage.setItem('exc_walletType',this.rWType||'TRX');localStorage.setItem('exc_email',email);
    const r=await api('POST','/login/register',payload,'','');
    if(r.ok){
      this.log('✓ تم إنشاء الحساب','lok');this.toast('✅ تم الإنشاء! جاري تسجيل الدخول...','lok');
      document.getElementById('lm').value=email;document.getElementById('lp').value=pass;
      this.tab('login');await this.login()
    } else {
      const msg=r.data?.msg||'فشل إنشاء الحساب';eb.textContent=msg;eb.classList.add('show');
      this.log('✗ '+msg,'ler');this.toast('✗ '+msg,'ler')
    }
    btn.disabled=false;btn.innerHTML='إنشاء الحساب'
  },

  async all(){this.log('◎ جلب جميع البيانات...','lin');await Promise.all([this.fui(),this.fac(),this.for(),this.fdp(),this.fwd(),this.frf()]);this.ovr()},

  async fui(){const r=await api('GET','/personal/userInfo',{},this.tok,this.uid);if(r.ok&&r.data.data){this.rui(r.data.data);this.exAddr(r.data)}},
  rui(d){
    const f=[['المعرّف (UID)',d.uid],['الاسم',d.nickname||d.name||d.username],['البريد',d.email],['الهاتف',d.mobile],['مستوى التحقق',d.kycLevel??d.authLevel],['الحالة',d.status===1?'✓ نشط':d.status],['كود الدعوة',d.inviteCode||d.referralCode],['تاريخ الإنشاء',d.createTime||d.registerTime],['آخر دخول',d.loginTime||d.lastLoginTime]];
    document.getElementById('uig').innerHTML=f.filter(([,v])=>v!=null&&v!=='').map(([k,v])=>`<div class="ii"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('')||'<div class="empty">لا بيانات</div>';
    document.getElementById('ou').textContent=d.email||d.nickname||'';
    if(d.inviteCode||d.referralCode){const c=d.inviteCode||d.referralCode;if(document.getElementById('rfCode').textContent==='——')this._setRef(c)}
    if(d.email)localStorage.setItem('exc_email',d.email)
  },

  async fac(){const r=await api('POST','/account/getAllUserAccountById',{},this.tok,this.uid);if(r.ok){const l=r.data.data||[];this.cache.ac=l;this.rac(l);this.exAddr(r.data)}},
  rac(l){const b=document.getElementById('acb');if(!l.length){b.innerHTML='<tr><td colspan="5" class="empty">لا بيانات</td></tr>';return}
  b.innerHTML=l.map(a=>`<tr><td><strong>${a.symbol||a.coinName||'—'}</strong></td><td>${Number(a.balance||a.available||0).toFixed(8)}</td><td>${Number(a.freeze||a.frozen||0).toFixed(8)}</td><td>${Number((a.balance||0)+(a.freeze||0)).toFixed(8)}</td><td><span class="badge bg">نشط</span></td></tr>`).join('')},

  async for(){const r=await api('GET','/newCurrency/orders',{},this.tok,this.uid);if(r.ok){const l=Array.isArray(r.data.data)?r.data.data:(r.data.data?.list||r.data.data?.records||[]);this.cache.or=l;this.ror(l)}},
  ror(l){const b=document.getElementById('orb');if(!l.length){b.innerHTML='<tr><td colspan="7" class="empty">لا بيانات</td></tr>';return}
  b.innerHTML=l.map((o,i)=>`<tr><td>${o.id||i+1}</td><td>${o.type===1?'<span class="badge bg">شراء</span>':'<span class="badge br2">بيع</span>'}</td><td>${o.symbol||o.coinName||'—'}</td><td>${o.amount||o.num||'—'}</td><td>${o.price||'—'}</td><td>${this._os(o.status)}</td><td>${o.createTime||o.time||'—'}</td></tr>`).join('')},
  _os(s){return({0:'<span class="badge bw">معلّق</span>',1:'<span class="badge bg">مكتمل</span>',2:'<span class="badge br2">ملغي</span>'})[s]||`<span class="badge bb">${s}</span>`},

  async fdp(){
    const st=document.getElementById('dpFilter').value;
    const params={};if(st!=='')params.status=st;
    const eps=['/recharge/rechargeList','/recharge/list','/finance/rechargeList','/user/rechargeList'];
    let done=false;
    for(const ep of eps){
      const r=await api('GET',ep,params,this.tok,this.uid);
      if(r.ok){const l=r.data.data?.list||r.data.data?.records||r.data.data||[];this.cache.dp=Array.isArray(l)?l:[];this.rdp(this.cache.dp);done=true;break}
    }
    if(!done)this.log('⚠️ لم يتم العثور على endpoint للإيداعات','lwa')
  },
  rdp(l){
    const b=document.getElementById('dpb');
    document.getElementById('odp').textContent=l.length;
    if(!l.length){b.innerHTML='<tr><td colspan="9" class="empty">لا توجد إيداعات</td></tr>';return}
    b.innerHTML=l.map((d,i)=>`<tr>
      <td>${d.id||i+1}</td><td><strong>${d.symbol||d.coinName||d.currency||'—'}</strong></td>
      <td>${d.chainName||d.network||d.chain||'—'}</td>
      <td>${Number(d.amount||d.num||0).toFixed(8)}</td>
      <td title="${d.address||''}"><span style="font-family:monospace;font-size:.75rem">${this._short(d.address||d.toAddress||'—')}</span></td>
      <td title="${d.txId||d.txHash||''}">${this._txlink(d.txId||d.txHash||'')}</td>
      <td>${d.confirmCount||d.confirms||d.confirm||'—'}</td>
      <td>${this._ds(d.status)}</td>
      <td>${d.createTime||d.time||'—'}</td>
    </tr>`).join('')
  },
  _ds(s){return({0:'<span class="badge bw">معالجة</span>',1:'<span class="badge bg">مكتمل</span>',2:'<span class="badge br2">فاشل</span>'})[s]||`<span class="badge bb">${s??'—'}</span>`},

  async getDepAddr(){
    const coin=document.getElementById('dpCoin').value;
    const nets=NETS[coin]||['TRC20'];
    document.getElementById('dpNets').innerHTML=nets.map((n,i)=>`<button class="net-tab ${i===0?'active':''}" onclick="A.selDepNet('${coin}','${n}',this)">${n}</button>`).join('');
    this.selNet.dp=nets[0];
    await this._fetchDepAddr(coin,nets[0])
  },
  async selDepNet(coin,net,btn){
    document.querySelectorAll('#dpNets .net-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    this.selNet.dp=net;await this._fetchDepAddr(coin,net)
  },
  async _fetchDepAddr(coin,net){
    const box=document.getElementById('dpAddrBox');
    box.innerHTML='<div class="info-box"><span class="sp" style="border-top-color:var(--bl2)"></span> جاري جلب العنوان...</div>';
    const eps=[
      `/recharge/getRechargeAddress?coinName=${coin}&chainName=${net}`,
      `/recharge/address?symbol=${coin}&network=${net}`,
      `/finance/getDepositAddress?currency=${coin}&chain=${net}`,
      `/user/getDepositAddress?coinName=${coin}&chainName=${net}`
    ];
    for(const ep of eps){
      const r=await api('GET',ep,{},this.tok,this.uid);
      if(r.ok&&r.data.data){
        const addr=r.data.data.address||r.data.data.rechargeAddress||r.data.data;
        if(addr&&typeof addr==='string'){
          const memo=r.data.data.memo||r.data.data.tag||'';
          box.innerHTML=`<div class="dep-addr">
            <div class="da-label">✅ عنوان الإيداع — ${coin} (${net})</div>
            <div class="da-val" id="depAddrVal">${addr}</div>
            ${memo?`<div style="margin-top:8px"><span style="color:var(--tx2);font-size:.78rem">MEMO/TAG:</span> <code>${memo}</code></div>`:''}
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn bo bs" onclick="navigator.clipboard.writeText('${addr}');A.toast('✓ تم نسخ العنوان','lok')">📋 نسخ العنوان</button>
            ${memo?`<button class="btn bo bs" onclick="navigator.clipboard.writeText('${memo}');A.toast('✓ تم نسخ الـ MEMO','lok')">📋 نسخ MEMO</button>`:''}
          </div>`;
          this.exAddr({data:{address:addr,coinName:coin,chainName:net}});return
        }
      }
    }
    const saved=this.cache.ad.filter(a=>(coin==='USDT'||coin===a.type.split('/')[0]));
    if(saved.length){
      box.innerHTML=saved.map(a=>`<div class="dep-addr"><div class="da-label">🏦 ${a.type} — ${a.purpose}</div><div class="da-val">${a.address}</div></div>
      <button class="btn bo bs" style="margin-bottom:10px" onclick="navigator.clipboard.writeText('${a.address}');A.toast('✓ تم النسخ','lok')">📋 نسخ</button>`).join('');
    } else {
      box.innerHTML='<div class="warn-box">⚠️ لم يتم العثور على عنوان إيداع لهذه العملة/الشبكة. تواصل مع الدعم.</div>'
    }
  },

  _buildWdNets(coin){
    const nets=NETS[coin]||['TRC20'];
    document.getElementById('wdNets').innerHTML=nets.map((n,i)=>`<button class="net-tab wnet-tab ${i===0?'active':''}" onclick="A.selWdNet('${n}',this)">${n}</button>`).join('');
    this.selNet.wd=nets[0];this._updWdHint()
  },
  selWdNet(net,btn){document.querySelectorAll('#wdNets .wnet-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');this.selNet.wd=net;this._updWdHint()},
  onWdCoin(){const c=document.getElementById('wdCoin').value;this._buildWdNets(c);this._updWdBal()},
  _updWdHint(){const n=this.selNet.wd;document.getElementById('wdAddrHint').textContent=NET_HINTS[n]||''},
  _updWdBal(){
    const coin=document.getElementById('wdCoin').value;
    const acc=this.cache.ac.find(a=>(a.symbol||a.coinName||'').toUpperCase()===coin.toUpperCase());
    document.getElementById('wdBal').textContent=`الرصيد المتاح: ${acc?Number(acc.balance||acc.available||0).toFixed(8):'—'} | الحد الأدنى: 10 | الرسوم: 1`
  },
  wdMax(){
    const coin=document.getElementById('wdCoin').value;
    const acc=this.cache.ac.find(a=>(a.symbol||a.coinName||'').toUpperCase()===coin.toUpperCase());
    if(acc)document.getElementById('wdAmt').value=Number(acc.balance||acc.available||0).toFixed(8)
  },
  previewWd(){
    const coin=document.getElementById('wdCoin').value,addr=document.getElementById('wdAddr').value.trim(),amt=document.getElementById('wdAmt').value;
    const net=this.selNet.wd;
    const box=document.getElementById('wdSummary');
    box.style.display='block';
    box.innerHTML=`<strong>📋 معاينة طلب السحب:</strong><br>العملة: <strong>${coin}</strong> | الشبكة: <strong>${net}</strong><br>المبلغ: <strong>${amt}</strong> | العنوان: <code style="font-size:.75rem">${addr||'—'}</code>`
  },
  async submitWd(){
    const coin=document.getElementById('wdCoin').value,addr=document.getElementById('wdAddr').value.trim();
    const amt=document.getElementById('wdAmt').value,ec=document.getElementById('wdEC').value.trim();
    const gc=document.getElementById('wdGC').value.trim(),pwd=document.getElementById('wdPwd').value.trim();
    const note=document.getElementById('wdNote').value.trim(),net=this.selNet.wd;
    const eb=document.getElementById('we');
    if(!addr){eb.textContent='⚠️ أدخل عنوان المحفظة';eb.classList.add('show');return}
    if(!amt||Number(amt)<=0){eb.textContent='⚠️ أدخل مبلغاً صحيحاً';eb.classList.add('show');return}
    if(!pwd){eb.textContent='⚠️ كلمة المرور مطلوبة';eb.classList.add('show');return}
    eb.classList.remove('show');
    if(!confirm(`تأكيد سحب ${amt} ${coin} إلى:\n${addr}\nالشبكة: ${net}`))return;
    const payload={coinName:coin,chainName:net,address:addr,num:amt,password:pwd};
    if(ec)payload.emailCode=ec;if(gc)payload.googleCode=gc;if(note)payload.remark=note;
    const eps=['/withdraw/applyWithdraw','/withdraw/apply','/finance/withdraw','/user/withdraw'];
    let done=false;
    for(const ep of eps){
      const r=await api('POST',ep,payload,this.tok,this.uid);
      if(r.ok){this.toast('✅ تم تقديم طلب السحب بنجاح','lok');document.getElementById('wdSummary').style.display='none';await this.fwd();done=true;break}
      else if(r.data?.code!==404&&r.data?.code!==405){this.toast('✗ '+(r.data?.msg||'فشل السحب'),'ler');done=true;break}
    }
    if(!done)this.toast('✗ فشل الاتصال بخادم السحب','ler')
  },
  async fwd(){
    const st=document.getElementById('wdFilter').value;
    const params={};if(st!=='')params.status=st;
    const eps=['/withdraw/withdrawList','/withdraw/list','/finance/withdrawList','/user/withdrawList'];
    let done=false;
    for(const ep of eps){
      const r=await api('GET',ep,params,this.tok,this.uid);
      if(r.ok){const l=r.data.data?.list||r.data.data?.records||r.data.data||[];this.cache.wd=Array.isArray(l)?l:[];this.rwd(this.cache.wd);done=true;break}
    }
    if(!done)this.log('⚠️ لم يتم العثور على endpoint للسحوبات','lwa')
  },
  rwd(l){
    const b=document.getElementById('wdb');
    document.getElementById('owc').textContent=l.length;
    if(!l.length){b.innerHTML='<tr><td colspan="10" class="empty">لا توجد سحوبات</td></tr>';return}
    b.innerHTML=l.map((w,i)=>`<tr>
      <td>${w.id||i+1}</td><td><strong>${w.symbol||w.coinName||w.currency||'—'}</strong></td>
      <td>${w.chainName||w.network||w.chain||'—'}</td>
      <td>${Number(w.num||w.amount||0).toFixed(8)}</td>
      <td>${Number(w.fee||w.fees||0).toFixed(8)}</td>
      <td>${Number((w.num||w.amount||0)-(w.fee||w.fees||0)).toFixed(8)}</td>
      <td title="${w.address||''}"><span style="font-family:monospace;font-size:.75rem">${this._short(w.address||'—')}</span></td>
      <td>${this._txlink(w.txId||w.txHash||'')}</td>
      <td>${this._ws(w.status)}</td>
      <td>${w.createTime||w.time||'—'}</td>
    </tr>`).join('')
  },
  _ws(s){return({0:'<span class="badge bw">مراجعة</span>',1:'<span class="badge bb">معالجة</span>',2:'<span class="badge bg">مكتمل</span>',3:'<span class="badge br2">مرفوض</span>'})[s]||`<span class="badge bb">${s??'—'}</span>`},

  async frf(){
    const eps=['/invite/info','/personal/inviteInfo','/referral/info','/user/inviteInfo','/invite/myInfo'];
    for(const ep of eps){
      const r=await api('GET',ep,{},this.tok,this.uid);
      if(r.ok&&r.data.data){this.cache.rf=r.data.data;this.rrf(r.data.data);break}
    }
    await this.frfl();await this.frfc()
  },
  rrf(d){
    if(!d)return;
    const code=d.inviteCode||d.referralCode||d.code||'';
    const total=d.totalNum||d.totalCount||d.inviteCount||0;
    const direct=d.directNum||d.directCount||d.level1Count||0;
    const comm=d.totalCommission||d.commission||d.totalReward||0;
    const today=d.todayCommission||d.todayReward||0;
    document.getElementById('rfTotal').textContent=total;
    document.getElementById('rfDirect').textContent=direct;
    document.getElementById('rfComm').textContent=Number(comm).toFixed(2)+' USDT';
    document.getElementById('rfToday').textContent=Number(today).toFixed(2)+' USDT';
    document.getElementById('oref').textContent=total;
    if(code)this._setRef(code)
  },
  _setRef(code){
    document.getElementById('rfCode').textContent=code;
    const link=`${location.origin}${location.pathname}?ref=${code}`;
    document.getElementById('rfLink').textContent=link;
    localStorage.setItem('exc_refCode',code)
  },
  copyRef(t){
    const code=document.getElementById('rfCode').textContent;
    if(t==='code'){navigator.clipboard.writeText(code);this.toast('✓ تم نسخ كود الدعوة','lok')}
    else{const link=document.getElementById('rfLink').textContent;navigator.clipboard.writeText(link);this.toast('✓ تم نسخ رابط الدعوة','lok')}
  },
  shareRef(){
    const link=document.getElementById('rfLink').textContent;
    const code=document.getElementById('rfCode').textContent;
    const txt=`🎁 انضم إلى Excorex واحصل على مكافآت!\nاستخدم كود الدعوة: ${code}\nأو انقر على الرابط: ${link}`;
    if(navigator.share){navigator.share({title:'Excorex — دعوة',text:txt,url:link})}
    else{navigator.clipboard.writeText(txt);this.toast('✓ تم نسخ نص المشاركة','lok')}
  },
  async frfl(){
    const lv=document.getElementById('rfLevel').value;
    const eps=[`/invite/list?level=${lv}`,`/personal/inviteList?level=${lv}`,`/referral/list?level=${lv}`,`/invite/memberList?level=${lv}`];
    for(const ep of eps){
      const r=await api('GET',ep,{level:lv},this.tok,this.uid);
      if(r.ok){const l=r.data.data?.list||r.data.data?.records||r.data.data||[];this.cache.rfl=Array.isArray(l)?l:[];this.rrfl(this.cache.rfl);break}
    }
  },
  rrfl(l){
    const b=document.getElementById('rfb');
    if(!l.length){b.innerHTML='<tr><td colspan="6" class="empty">لا يوجد مُحالون</td></tr>';return}
    b.innerHTML=l.map((u,i)=>`<tr>
      <td>${u.id||i+1}</td>
      <td>${u.email||u.nickname||u.username||u.userId||'—'}</td>
      <td>${u.createTime||u.registerTime||'—'}</td>
      <td>${u.status===1?'<span class="badge bg">نشط</span>':'<span class="badge bw">غير نشط</span>'}</td>
      <td>${Number(u.commission||u.reward||u.profit||0).toFixed(4)} USDT</td>
      <td>${u.lastTradeTime||u.lastOrderTime||'—'}</td>
    </tr>`).join('')
  },
  async frfc(){
    const eps=['/invite/commissionList','/personal/commissionList','/referral/commissionList','/invite/rewardList'];
    for(const ep of eps){
      const r=await api('GET',ep,{},this.tok,this.uid);
      if(r.ok){const l=r.data.data?.list||r.data.data?.records||r.data.data||[];this.cache.rfc=Array.isArray(l)?l:[];this.rrfc(this.cache.rfc);break}
    }
  },
  rrfc(l){
    const b=document.getElementById('rfcb');
    if(!l.length){b.innerHTML='<tr><td colspan="7" class="empty">لا توجد عمولات</td></tr>';return}
    b.innerHTML=l.map((c,i)=>`<tr>
      <td>${c.id||i+1}</td>
      <td>${c.fromEmail||c.fromUser||c.userId||'—'}</td>
      <td>${c.coinName||c.symbol||'USDT'}</td>
      <td>${Number(c.commission||c.amount||c.reward||0).toFixed(8)}</td>
      <td>${c.rate||c.ratio||'—'}</td>
      <td>${c.source||c.type||'تداول'}</td>
      <td>${c.createTime||c.time||'—'}</td>
    </tr>`).join('')
  },

  exAddr(data){
    const f=[];
    function w(o,p){if(!o||typeof o!=='object')return;for(const[k,v]of Object.entries(o)){const pt=p?`${p}.${k}`:k;if(typeof v==='string'){const e=/^0x[0-9a-fA-F]{40}$/.test(v);const b=/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(v);const t=/^T[A-Za-z0-9]{33}$/.test(v);if(e||b||t){const tp=e?'ETH/ERC20':b?'BTC':'TRX/TRC20';const pu=/withdraw|member|payout/i.test(k)?'سحب':/recharge|deposit|funding/i.test(k)?'إيداع':'عام';f.push({key:pt,address:v,type:tp,purpose:pu})}}if(typeof v==='object')w(v,pt)}}
    w(data,'');if(f.length){this.cache.ad.push(...f);this.rad()}
  },
  rad(){
    const u=[...new Map(this.cache.ad.map(a=>[a.address,a])).values()];this.cache.ad=u;
    document.getElementById('odr').textContent=u.length;
    document.getElementById('adg').innerHTML=u.map(a=>`<div><div class="ii"><div class="k">${a.purpose} — ${a.type} — <code style="font-size:.75rem;color:var(--tx2)">${a.key}</code></div><div class="av">${a.address}</div><button class="btn bo bs" style="margin-top:6px" onclick="navigator.clipboard.writeText('${a.address}');A.toast('✓ تم النسخ','lok')">📋 نسخ</button></div></div>`).join('')||'<div class="empty">لا توجد عناوين</div>'
  },

  _short(s){if(!s||s==='—')return'—';return s.length>16?s.slice(0,8)+'...'+s.slice(-6):s},
  _txlink(tx){if(!tx||tx==='—'||tx==='')return'—';const s=tx.slice(0,8)+'...'+tx.slice(-4);return`<a href="https://tronscan.org/#/transaction/${tx}" target="_blank" style="color:var(--bl2);font-family:monospace;font-size:.75rem" title="${tx}">${s}</a>`},

  ovr(){
    document.getElementById('oa').textContent=this.cache.ac.length;
    document.getElementById('oo').textContent=this.cache.or.length;
    document.getElementById('odr').textContent=this.cache.ad.length
  }
};
window.addEventListener('DOMContentLoaded',()=>A.init());
