!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/build/",n(n.s=7)}([function(t,e,n){"use strict";$(document).ready(function(){var t=document.getElementsByTagName("INPUT");console.log(t);for(var e=0;e<t.length;e++)t[e].oninvalid=function(t){if(!t.target.validity.valid)switch(t.target.id){case"name":case"name1":t.target.setCustomValidity("Введите имя");break;case"phone":case"phone1":t.target.setCustomValidity("Напишите Ваш телефон");break;case"form-check-input":case"form-check-input1":t.target.setCustomValidity("Необходимо согласие на обработку");break;default:t.target.setCustomValidity("")}},t[e].oninput=function(t){t.target.setCustomValidity("")}})},function(t,e,n){"use strict";var o=$(".popup__DoneJS"),r=$("#submit-form"),i=$(".popup__DoneJS1"),c=$("#submit-form1");function u(t,e){$(document).ready(function(){var n=e;t.submit(function(){var t=$(this);return $.ajax({type:"POST",url:"server.php",data:t.serialize()}).done(function(){n.fadeTo("slow",0,function(){$(this).fadeTo("slow",1).after(function(){var t=this;setTimeout(function(){$(t).fadeTo("slow",0)},7e3)})}),setTimeout(function(){t.trigger("reset")},1e3)}),!1})})}u(r,o),u(c,i)},function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",function(t){!function(t){var e=document.querySelectorAll('[href^="#"]'),n=.3,o=document.querySelector(".header-container").offsetHeight,r=document.querySelector(".header-second__container"),i=document.querySelector(".header-wrap");"static"!==window.getComputedStyle(i).position&&(r.style.paddingTop=o+"px");for(var c=0;c<e.length;c++)e[c].addEventListener("click",function(t){t.preventDefault();var e=window.pageYOffset,r=this.href.replace(/[^#]*(.*)/,"$1"),i=document.querySelector(r).getBoundingClientRect().top-o,c=null;requestAnimationFrame(function t(o){null===c&&(c=o);var r=o-c;var u=i<0?Math.max(e-r/n,e+i):Math.min(e+r/n,e+i);window.scrollTo(0,u);u!=e+i&&requestAnimationFrame(t)})},!1)}()})},function(t,e,n){"use strict";window.onload=function(){!function(){var t=document.querySelectorAll(".header-second__btn-cont"),e=Array.from(t);function n(t){return new Promise(function(n){setTimeout(function(){e[t].style.opacity="1",n()},300)})}n(0).then(function(){return n(1)}).then(function(){return n(2)}).then(function(){return n(3)}).then(function(){return n(4)}).then(function(){return n(5)})}()}},function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",function(t){e=document.querySelectorAll(".ourworks-btn"),Array.from(e).forEach(function(t){t.addEventListener("mouseover",function(e){var n=e.target.innerHTML;e.target.innerHTML="Заказать",t.addEventListener("mouseout",function(t){t.target.innerHTML=n})})});var e,n=document.querySelector(".header-second__form-privacy"),o=document.querySelector(".privacy-cont"),r=document.querySelector(".popup__form-privacy"),i=document.querySelector(".popup-privacy-cont");function c(t,e){t.addEventListener("mouseover",function(){e.style.opacity=1}),t.addEventListener("mouseleave",function(){e.style.opacity=0})}c(n,o),c(r,i);!function(t){var e=document.querySelectorAll(".js-popup-btn"),n=Array.from(e),o=document.querySelector(".popup-cont"),r=document.querySelector(".popup-wrap"),i=document.querySelector(".popup-exit"),c=document.querySelector(".body"),u=!1;function a(t){t.addEventListener("click",function(t){t.stopPropagation(),(u=!0)&&(o.style.display="none",r.style.display="none",c.style.overflow="initial")})}a(o),a(i),n.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();var e=-document.body.getBoundingClientRect().top;o.style.display="block",o.style.top=e+"px",r.style.display="block",r.style.top=e+"px",c.style.overflow="hidden",u=!u})})}()})},function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",function(t){!function(){var t=document.querySelectorAll(".howitworks-right__tab"),e=document.querySelectorAll(".howitworks-right__line"),n=document.querySelector(".howitworks-left__desc-text"),o=[],r=[],i=[{id:"jsDocs",text:"Мы пробиваем автомобиль по всем возможным базам РФ. Специалист выполняет проверку идентификационных номеров на кузове, VIN номера в блоках управления, подтверждение сервисной истории и пробега, расшифровку кодов комплектации и сопоставление их с реальной крегистрационные действия и т.д."},{id:"jsBody",text:"Полностью проверяем силовую часть кузова (крышу, стойки, лонжероны, днище) и навесные элементы (крылья, двери, капот и т.д.) Эталоном считается кузов нового автомобиля, и все толщиномер - прибор для замера толщины краски. Он покажет, перекрашена ли машина, есть ли шпаклевка под краской и т.п."},{id:"jsEngine",text:"Специалист выполняет общий осмотр двигателя, заводит и слушает его. Если подозрений не возникает, то следует тест-драйв. Если ничего не выявилось во время тест-драйва – автомобиль отправляется на сервис для детальной проверки."},{id:"jsWheel",text:"Большинство неисправностей подвески опытный специалист легко выявит во время внимательного осмотра и тест-драйва. Выполняется осмотр резиновых пыльников и чехлов, диагностика амортизаторов, проверка утечек масла, проверка на люфт опор стабилизаторов, подшипников "},{id:"jsBrake",text:"Мы уделяем особое внимание проверке тормозной системы автомобиля, ведь ее состояние - это вопрос вашей безопасности. Специалист проверяет общий износ расходных частей танизмов, а также электронных систем (антиблокировка, антипробуксовка, антизанос)."}];function c(t,e,n){for(var o=Array.from(t),r=0;r<=e;r++)n.push(o[r])}n.innerHTML="<p>"+i[0].text+"</p>",c(t,i.length-1,o),c(e,i.length-1,r),o.forEach(function(t){t.addEventListener("click",function(t){var e=t.target.getAttribute("id"),c=[].concat(i).filter(function(t){return t.id===e}),u=[].concat(r).filter(function(t){return t.classList.contains(e)});for(var a in o)o[a].classList.remove("js-tab-active");for(var s in r)r[s].classList.remove("js-line-active");n.innerHTML,!t.target.classList.contains("js-tab-active")&&(t.target.classList.add("js-tab-active"),u[0].classList.add("js-line-active"),n.innerHTML="<p>"+c[0].text+"</p>")})})}()})},function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",function(t){var e,n,o,r;e=document.querySelector(".js-slider-left"),n=document.querySelector(".js-slider-right"),o=document.querySelector(".js-slider-items"),r=0,o.style.right=r,n.onclick=function(){r<1400&&(r+=700,o.style.right=r+"px",e.style.opacity=1,e.style.cursor="pointer"),1400===r&&(n.style.opacity=.2,n.style.cursor="initial")},e.onclick=function(){r>0&&(r-=700,o.style.right=r+"px",n.style.opacity=1,n.style.cursor="pointer"),0===r&&(e.style.opacity=.2,e.style.cursor="initial")}})},function(t,e,n){"use strict";o(n(6)),o(n(5)),o(n(4)),o(n(3)),o(n(2)),o(n(1)),o(n(0));function o(t){return t&&t.__esModule?t:{default:t}}}]);
//# sourceMappingURL=bundle.js.map