"use strict";!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/build/",r(r.s=7)}([function(e,t,n){$(document).ready(function(){var e=document.getElementsByTagName("INPUT");console.log(e);for(var t=0;t<e.length;t++)e[t].oninvalid=function(e){if(!e.target.validity.valid)switch(e.target.id){case"name":case"name1":e.target.setCustomValidity("Введите имя");break;case"phone":case"phone1":e.target.setCustomValidity("Напишите Ваш телефон");break;case"form-check-input":case"form-check-input1":e.target.setCustomValidity("Необходимо согласие на обработку");break;default:e.target.setCustomValidity("")}},e[t].oninput=function(e){e.target.setCustomValidity("")}})},function(e,t,n){var o=$(".popup__DoneJS"),r=$("#submit-form"),i=$(".popup__DoneJS1"),c=$("#submit-form1");function u(e,n){$(document).ready(function(){var t=n;e.submit(function(){var e=$(this);return $.ajax({type:"POST",url:"server.php",data:e.serialize()}).done(function(){t.fadeTo("slow",0,function(){$(this).fadeTo("slow",1).after(function(){var e=this;setTimeout(function(){$(e).fadeTo("slow",0)},7e3)})}),setTimeout(function(){e.trigger("reset")},1e3)}),!1})})}u(r,o),u(c,i)},function(e,t,n){document.addEventListener("DOMContentLoaded",function(e){!function(e){var t=document.querySelectorAll('[href^="#"]'),n=document.querySelector(".header-container").offsetHeight,o=document.querySelector(".header-second__container"),r=document.querySelector(".header-wrap");"static"!==window.getComputedStyle(r).position&&(o.style.paddingTop=n+"px");for(var i=0;i<t.length;i++)t[i].addEventListener("click",function(e){e.preventDefault();var r=window.pageYOffset,t=this.href.replace(/[^#]*(.*)/,"$1"),i=document.querySelector(t).getBoundingClientRect().top-n,c=null;requestAnimationFrame(function e(t){null===c&&(c=t);var n=t-c,o=i<0?Math.max(r-n/.3,r+i):Math.min(r+n/.3,r+i);window.scrollTo(0,o),o!=r+i&&requestAnimationFrame(e)})},!1)}()})},function(e,t,n){window.onload=function(){!function(){var e=document.querySelectorAll(".header-second__btn-cont"),n=Array.from(e);function t(t){return new Promise(function(e){setTimeout(function(){n[t].style.opacity="1",e()},300)})}t(0).then(function(){return t(1)}).then(function(){return t(2)}).then(function(){return t(3)}).then(function(){return t(4)}).then(function(){return t(5)})}()}},function(e,t,n){document.addEventListener("DOMContentLoaded",function(e){t=document.querySelectorAll(".ourworks-btn"),Array.from(t).forEach(function(n){n.addEventListener("mouseover",function(e){var t=e.target.innerHTML;e.target.innerHTML="Заказать",n.addEventListener("mouseout",function(e){e.target.innerHTML=t})})});var t,n=document.querySelector(".header-second__form-privacy"),o=document.querySelector(".privacy-cont"),r=document.querySelector(".popup__form-privacy"),i=document.querySelector(".popup-privacy-cont");function c(e,t){e.addEventListener("mouseover",function(){t.style.opacity=1}),e.addEventListener("mouseleave",function(){t.style.opacity=0})}c(n,o),c(r,i),function(e){var t=document.querySelectorAll(".js-popup-btn"),n=Array.from(t),o=document.querySelector(".popup-cont"),r=document.querySelector(".popup-wrap"),i=document.querySelector(".popup-exit"),c=document.querySelector(".body"),u=!1;function a(e){e.addEventListener("click",function(e){e.stopPropagation(),(u=!0)&&(o.style.display="none",r.style.display="none",c.style.overflow="initial")})}a(o),a(i),u?document.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()}):document.removeEventListener("touchmove"),n.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=-document.body.getBoundingClientRect().top;o.style.display="block",o.style.top=t+"px",r.style.display="block",r.style.top=t+"px",c.style.overflow="hidden",u=!u})})}()})},function(e,t,n){document.addEventListener("DOMContentLoaded",function(e){!function(){var e=document.querySelectorAll(".howitworks-right__tab"),t=document.querySelectorAll(".howitworks-right__line"),c=document.querySelector(".howitworks-left__desc-text"),u=[],a=[],s=[{id:"jsDocs",text:"Мы пробиваем автомобиль по всем возможным базам РФ. Специалист выполняет проверку идентификационных номеров на кузове, VIN номера в блоках управления, подтверждение сервисной истории и пробега, расшифровку кодов комплектации и сопоставление их с реальной крегистрационные действия и т.д."},{id:"jsBody",text:"Полностью проверяем силовую часть кузова (крышу, стойки, лонжероны, днище) и навесные элементы (крылья, двери, капот и т.д.) Эталоном считается кузов нового автомобиля, и все толщиномер - прибор для замера толщины краски. Он покажет, перекрашена ли машина, есть ли шпаклевка под краской и т.п."},{id:"jsEngine",text:"Специалист выполняет общий осмотр двигателя, заводит и слушает его. Если подозрений не возникает, то следует тест-драйв. Если ничего не выявилось во время тест-драйва – автомобиль отправляется на сервис для детальной проверки."},{id:"jsWheel",text:"Большинство неисправностей подвески опытный специалист легко выявит во время внимательного осмотра и тест-драйва. Выполняется осмотр резиновых пыльников и чехлов, диагностика амортизаторов, проверка утечек масла, проверка на люфт опор стабилизаторов, подшипников "},{id:"jsBrake",text:"Мы уделяем особое внимание проверке тормозной системы автомобиля, ведь ее состояние - это вопрос вашей безопасности. Специалист проверяет общий износ расходных частей танизмов, а также электронных систем (антиблокировка, антипробуксовка, антизанос)."}];function n(e,t,n){for(var o=Array.from(e),r=0;r<=t;r++)n.push(o[r])}c.innerHTML="<p>"+s[0].text+"</p>",n(e,s.length-1,u),n(t,s.length-1,a),u.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.getAttribute("id"),n=[].concat(s).filter(function(e){return e.id===t}),o=[].concat(a).filter(function(e){return e.classList.contains(t)});for(var r in u)u[r].classList.remove("js-tab-active");for(var i in a)a[i].classList.remove("js-line-active");c.innerHTML,!e.target.classList.contains("js-tab-active")&&(e.target.classList.add("js-tab-active"),o[0].classList.add("js-line-active"),c.innerHTML="<p>"+n[0].text+"</p>")})})}()})},function(e,t,n){document.addEventListener("DOMContentLoaded",function(e){var t,n,o,r;t=document.querySelector(".js-slider-left"),n=document.querySelector(".js-slider-right"),o=document.querySelector(".js-slider-items"),r=0,o.style.right=r,n.onclick=function(){r<1400&&(r+=700,o.style.right=r+"px",t.style.opacity=1,t.style.cursor="pointer"),1400===r&&(n.style.opacity=.2,n.style.cursor="initial")},t.onclick=function(){0<r&&(r-=700,o.style.right=r+"px",n.style.opacity=1,n.style.cursor="pointer"),0===r&&(t.style.opacity=.2,t.style.cursor="initial")}})},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}o(n(6)),o(n(5)),o(n(4)),o(n(3)),o(n(2)),o(n(1)),o(n(0))}]);