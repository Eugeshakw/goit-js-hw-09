!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var n={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},e=null;n.btnStart.addEventListener("click",(function(a){a.preventDefault(),e=setInterval((function(){document.body.style.backgroundColor=t()}),1e3),document.body.style.backgroundColor=t(),n.btnStart.disabled=!0,n.btnStop.disabled=!1})),n.btnStop.addEventListener("click",(function(t){t.preventDefault(),clearInterval(e),n.btnStop.disabled=!0,n.btnStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.71006c90.js.map
