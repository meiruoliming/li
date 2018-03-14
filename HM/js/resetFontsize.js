// 以iphone6为基础
// (function (doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function () {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             docEl.style.fontSize = 100 * (clientWidth / 768) + 'px';
//         };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);
 var _paq = _paq || [];
        var token = "yzrLLYgB1E1ALL3yNYJEPjoXvXc2uTiCqVnRCB96";
        var app_url_flag = "wapdatebao";
        var clientType = "";
        var datebaoUrl = "http://m.datebao.com";
        var redirectUrl = "https://m.datebao.com";
        
        !function(e,t){function i(){o=1,e.devicePixelRatioValue=o,s=1/o;var t=a.createElement("meta");if(t.setAttribute("name","viewport"),t.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),d.firstElementChild)d.firstElementChild.appendChild(t);else{var i=a.createElement("div");i.appendChild(t),a.write(i.innerHTML)}}function n(){var e=Math.min(d.getBoundingClientRect().width,750);r=100*e/t.desinWidth,d.style.fontSize=r+"px"}var a=e.document,d=a.documentElement,o=(e.devicePixelRatio,1),s=1;i();var l,r=100;t.desinWidth=750,t.baseFont=0.28,t.init=function(){e.addEventListener("resize",function(){clearTimeout(l),l=setTimeout(n,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(l),l=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=t.baseFont*o+"rem":a.addEventListener("DOMContentLoaded",function(){},!1),n(),d.setAttribute("data-dpr",o)}}(window,window.adaptive||(window.adaptive={}));window['adaptive'].init();// 调用初始化方法
        