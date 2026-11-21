
javascript:(()=>{
const PASSWORD="999999999999999999999999999999999999999999999999";
const STORAGE_KEY="qx_live_saved_license";

if(document.getElementById("qx-login-overlay"))return;

const savedPassword=localStorage.getItem(STORAGE_KEY)||"";

const overlay=document.createElement("div");
overlay.id="qx-login-overlay";

overlay.innerHTML=`
<div class="qx-login-card">
  <div class="qx-login-logo">QX</div>
  <div class="qx-login-title">QX LIVE</div>
  <div class="qx-login-subtitle">Secure License Verification</div>

  <div class="qx-input-label">LICENSE PASSWORD</div>
  <input id="qx-license-input" type="password"
    placeholder="Enter your license password"
    autocomplete="off">

  <div class="qx-saved-status">
    <span class="qx-status-dot"></span>
    <span id="qx-status-text">${savedPassword ? "Saved password detected" : "Enter your license password"}</span>
  </div>

  <button id="qx-login-btn">CONFIRM &amp; LOGIN</button>
  <div id="qx-error"></div>
  <div class="qx-footer">SECURED BY QX LIVE</div>
</div>`;

const style=document.createElement("style");
style.id="qx-login-style";
style.textContent=`
#qx-login-overlay{
 position:fixed;inset:0;z-index:2147483647;
 display:flex;align-items:center;justify-content:center;
 background:rgba(5,10,18,.76);
 backdrop-filter:blur(9px);
 -webkit-backdrop-filter:blur(9px);
 font-family:Arial,sans-serif;
}
#qx-login-overlay *{box-sizing:border-box}
.qx-login-card{
 width: min(340px, calc(100vw - 36px));
 padding:28px 23px 20px;
 border:1px solid rgba(0,230,118,.25);
 border-radius:19px;
 background:linear-gradient(145deg,#182331,#0b111c);
 box-shadow:0 18px 65px rgba(0,0,0,.55);
 text-align:center;color:#fff;
}
.qx-login-logo{
 width:52px;height:52px;margin:0 auto 13px;
 display:flex;align-items:center;justify-content:center;
 border-radius:15px;background:rgba(0,230,118,.12);
 border:1px solid rgba(0,230,118,.4);
 color:#00e676;font-size:21px;font-weight:900;
}
.qx-login-title{font-size:22px;font-weight:900;letter-spacing:2px}
.qx-login-subtitle{font-size:11px;color:#8998a9;margin:6px 0 25px}
.qx-input-label{
 text-align:left;font-size:10px;font-weight:800;
 letter-spacing:1.2px;color:#9aabba;margin-bottom:9px;
}
#qx-license-input{
 width:100%;height:47px;padding:0 14px;
 border-radius:10px;border:1px solid #344457;
 outline:none;background:#0b1420;color:#fff;
 font-size:13px;letter-spacing:2px;
 transition:.2s;
}
#qx-license-input:focus{
 border-color:#00e676;
 box-shadow:0 0 0 3px rgba(0,230,118,.09);
}
#qx-license-input::placeholder{letter-spacing:0;color:#657487}
.qx-saved-status{
 display:flex;align-items:center;gap:7px;
 margin:12px 0 19px;text-align:left;
 color:#8fa0af;font-size:10px;
}
.qx-status-dot{
 width:7px;height:7px;border-radius:50%;
 background:#00e676;box-shadow:0 0 8px #00e676;
}
#qx-login-btn{
 width:100%;height:46px;border:0;border-radius:10px;
 background:linear-gradient(100deg,#00c96b,#00e676);
 color:#062014;font-size:12px;font-weight:900;
 letter-spacing:.7px;cursor:pointer;
 box-shadow:0 5px 18px rgba(0,230,118,.16);
}
#qx-login-btn:active{transform:scale(.98)}
#qx-error{min-height:17px;margin-top:10px;color:#ff6677;font-size:11px}
.qx-footer{
 margin-top:13px;color:#536477;font-size:9px;
 letter-spacing:1.5px;
}
`;

document.head.appendChild(style);
document.body.appendChild(overlay);

const input=overlay.querySelector("#qx-license-input");
const button=overlay.querySelector("#qx-login-btn");
const error=overlay.querySelector("#qx-error");

input.value=savedPassword;

function login(){
 const entered=input.value;

 if(entered!==PASSWORD){
   error.textContent="Invalid password. Access denied.";
   input.value="";
   input.focus();
   return;
 }

 try{
   localStorage.setItem(STORAGE_KEY,entered);
 }catch(e){}

 overlay.remove();
 style.remove();

 history.replaceState(null,"","/tr/trade");
 document.title="Live trading | Quotex";

 let old=document.getElementById("qx-live-overlay");
 if(old)old.remove();

 let badge=document.createElement("div");
 badge.id="qx-live-overlay";
 badge.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="#00e676" style="transform:rotate(-50deg);margin-right:6px;display:block;flex-shrink:0;"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg><span class="live-txt">LIVE</span>';

 let badgeStyle=document.createElement("style");
 badgeStyle.id="qx-live-badge-style";
 badgeStyle.textContent="#qx-live-overlay{position:fixed;top:7px;left:10px;width:66px;height:21px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;background:#28303d;border-radius:4px;z-index:9999999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased;pointer-events:none;}#qx-live-overlay .live-txt{font-size:11px;font-weight:800;color:#00e676;letter-spacing:0.6px;line-height:1;}";

 document.head.appendChild(badgeStyle);
 document.body.appendChild(badge);
}

button.addEventListener("click",login);
input.addEventListener("keydown",e=>{
 if(e.key==="Enter")login();
});

if(savedPassword){
 input.focus();
}else{
 input.focus();
}
})();
