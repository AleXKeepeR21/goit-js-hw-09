!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),d=null;e.setAttribute("disabled",!0),t.addEventListener("click",(function(){e.removeAttribute("disabled"),t.setAttribute("disabled",!0),d=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",!0),t.removeAttribute("disabled"),clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.2ea4717e.js.map