!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/build/",n(n.s=6)}([function(t,e,n){"use strict";$(document).ready(function(){var t=$(".popup__DoneJS");$("#submit-form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"server.php",data:e.serialize()}).done(function(){t.fadeTo("slow",0,function(){$(this).fadeTo("slow",1).after(function(){var t=this;setTimeout(function(){$(t).fadeTo("slow",0)},7e3)})}),setTimeout(function(){e.trigger("reset")},1e3)}),!1})}),$(document).ready(function(){var t=$(".popup__DoneJS1");$("#submit-form1").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"server.php",data:e.serialize()}).done(function(){t.fadeTo("slow",0,function(){$(this).fadeTo("slow",1).after(function(){var t=this;setTimeout(function(){$(t).fadeTo("slow",0)},7e3)})}),setTimeout(function(){e.trigger("reset")},1e3)}),!1})})},function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",function(t){!function(t){var e=document.querySelectorAll('[href^="#"]'),n=.3,o=document.querySelector(".header-container").offsetHeight;console.log(o);for(var r=0;r<e.length;r++)e[r].addEventListener("click",function(t){t.preventDefault();var e=window.pageYOffset,r=this.href.replace(/[^#]*(.*)/,"$1"),i=document.querySelector(r).getBoundingClientRect().top-o,c=null;requestAnimationFrame(function t(o){null===c&&(c=o);var r=o-c;var u=i<0?Math.max(e-r/n,e+i):Math.min(e+r/n,e+i);window.scrollTo(0,u);u!=e+i&&requestAnimationFrame(t)})},!1)}()})},function(t,e,n){"use strict";window.onload=function(){!function(){var t=document.querySelectorAll(".header-second__btn-cont"),e=Array.from(t);function n(t){return new Promise(function(n){setTimeout(function(){e[t].style.opacity="1",n()},300)})}n(0).then(function(){return n(1)}).then(function(){return n(2)}).then(function(){return n(3)}).then(function(){return n(4)}).then(function(){return n(5)})}()}},function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",function(t){var e,n,o,r,i,c,u,s;e=document.querySelectorAll(".ourworks-btn"),Array.from(e).forEach(function(t){t.addEventListener("mouseover",function(e){var n=e.target.innerHTML;e.target.innerHTML="Заказать",t.addEventListener("mouseout",function(t){t.target.innerHTML=n})})}),n=document.querySelectorAll(".js-popup-btn"),o=Array.from(n),r=document.querySelector(".popup-cont"),i=document.querySelector(".popup-wrap"),c=document.querySelector(".popup-exit"),u=document.querySelector(".body"),s=!1,r.addEventListener("click",function(t){t.stopPropagation(),(s=!0)&&(r.style.display="none",i.style.display="none",u.style.overflow="initial")}),c.addEventListener("click",function(t){t.stopPropagation(),(s=!0)&&(r.style.display="none",i.style.display="none",u.style.overflow="initial")}),o.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();var e=-document.body.getBoundingClientRect().top;r.style.display="block",r.style.top=e+"px",i.style.display="block",i.style.top=e+"px",u.style.overflow="hidden",s=!s})})})},function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",function(t){!function(){var t=document.querySelectorAll(".howitworks-right__tab"),e=document.querySelectorAll(".howitworks-right__line"),n=document.querySelector(".howitworks-left__desc-text"),o=[],r=[],i=[{id:"jsDocs",text:"Мы пробиваем автомобиль по всем возможным базам РФ. Специалист выполняет проверку идентификационных номеров на кузове, VIN номера в блоках управления, подтверждение сервисной истории и пробега, расшифровку кодов комплектации и сопоставление их с реальной комплектацией авто, проверка наличия и подлинности документов о покупке авто первым собственником и общение с ним (если владельцев было больше одного), проверка на штрафы и ограничения на регистрационные действия и т.д."},{id:"jsBody",text:"Полностью проверяем силовую часть кузова (крышу, стойки, лонжероны, днище) и навесные элементы (крылья, двери, капот и т.д.) Эталоном считается кузов нового автомобиля, и все сравнение происходит с ним. Опытный специалист уже при общем визуальном осмотре увидит все дефекты, вторичные окрасы, замаскированные ремонты и т.д. Незаметные глазу проблемы позволит увидеть толщиномер - прибор для замера толщины краски. Он покажет, перекрашена ли машина, есть ли шпаклевка под краской и т.п."},{id:"jsEngine",text:"Специалист выполняет общий осмотр двигателя, заводит и слушает его. Если подозрений не возникает, то следует тест-драйв. Если ничего не выявилось во время тест-драйва – автомобиль отправляется на сервис для детальной проверки."},{id:"jsWheel",text:"Большинство неисправностей подвески опытный специалист легко выявит во время внимательного осмотра и тест-драйва. Выполняется осмотр резиновых пыльников и чехлов, диагностика амортизаторов, проверка утечек масла, проверка на люфт опор стабилизаторов, подшипников верхних опор и тяги и т.д. Если проблем не выявлено, автомобиль отправляется на сервисную станцию для комплексного осмотра, который позволит увидеть каждый параметр каждой системы подвески и покажет скрытые неисправности."},{id:"jsBrake",text:"Мы уделяем особое внимание проверке тормозной системы автомобиля, ведь ее состояние - это вопрос вашей безопасности. Специалист проверяет общий износ расходных частей тормозной системы (диски и колодки), равномерность этого износа и оценит оставшийся срок службы. Затем специалист проверит состояние суппортов и других тормозных механизмов, а также электронных систем (антиблокировка, антипробуксовка, антизанос)."}];function c(t,e,n){for(var o=Array.from(t),r=0;r<=e;r++)n.push(o[r])}n.innerHTML="<p>"+i[0].text+"</p>",c(t,i.length-1,o),c(e,i.length-1,r),o.forEach(function(t){t.addEventListener("click",function(t){var e=t.target.getAttribute("id"),c=[].concat(i).filter(function(t){return t.id===e}),u=[].concat(r).filter(function(t){return t.classList.contains(e)});for(var s in o)o[s].classList.remove("js-tab-active");for(var a in r)r[a].classList.remove("js-line-active");n.innerHTML,!t.target.classList.contains("js-tab-active")&&(t.target.classList.add("js-tab-active"),u[0].classList.add("js-line-active"),n.innerHTML="<p>"+c[0].text+"</p>")})})}()})},function(t,e,n){"use strict";document.addEventListener("DOMContentLoaded",function(t){var e,n,o,r;e=document.querySelector(".js-slider-left"),n=document.querySelector(".js-slider-right"),o=document.querySelector(".js-slider-items"),r=0,o.style.right=r,n.onclick=function(){r<1400&&(r+=700,o.style.right=r+"px",e.style.opacity=1,e.style.cursor="pointer"),1400===r&&(n.style.opacity=.2,n.style.cursor="initial")},e.onclick=function(){r>0&&(r-=700,o.style.right=r+"px",n.style.opacity=1,n.style.cursor="pointer"),0===r&&(e.style.opacity=.2,e.style.cursor="initial")}})},function(t,e,n){"use strict";o(n(5)),o(n(4)),o(n(3)),o(n(2)),o(n(1)),o(n(0)),o(n(7));function o(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict"}]);
//# sourceMappingURL=bundle.js.map