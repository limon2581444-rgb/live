javascript:(function(){
let PASSWORD="999999999999999999999999999999999999999999999999";
let entered=prompt("QX LIVE - Enter License Password:");

if(entered!==PASSWORD){
alert("Invalid Password! Access Denied.");
return;
}

let e=document.getElementById("qx-live-overlay");
if(e)e.remove();

let t=document.createElement("div");
t.id="qx-live-overlay";
t.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="#00e676" style="transform:rotate(-50deg);margin-right:6px;display:block;flex-shrink:0;"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg><span class="live-txt">LIVE</span>';

let o=document.createElement("style");
o.innerHTML="#qx-live-overlay{position:fixed;top:7px;left:10px;width:66px;height:21px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;background:#28303d;border-radius:4px;z-index:9999999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased;pointer-events:none;}#qx-live-overlay .live-txt{font-size:11px;font-weight:800;color:#00e676;letter-spacing:0.6px;line-height:1;}";

document.head.appendChild(o);
document.body.appendChild(t);
})();
javascript:(()=>{history.replaceState(null,"","/tr/trade");document.title="Live trading | Quotex"})()
