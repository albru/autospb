!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/build/",r(r.s=1)}([function(t,e,r){"use strict";var n,i,o,c;n=document.querySelector(".js-slider-left"),i=document.querySelector(".js-slider-right"),o=document.querySelector(".js-slider-items"),c=0,o.style.right=c,i.onclick=function(){c<1400&&(c+=700,o.style.right=c+"px",n.style.opacity=1,n.style.cursor="pointer"),1400===c&&(i.style.opacity=.2,i.style.cursor="initial")},n.onclick=function(){c>0&&(c-=700,o.style.right=c+"px",i.style.opacity=1,i.style.cursor="pointer"),0===c&&(n.style.opacity=.2,n.style.cursor="initial")}},function(t,e,r){"use strict";var n=c(r(0)),i=c(r(2)),o=c(r(3));function c(t){return t&&t.__esModule?t:{default:t}}document.addEventListener("DOMContentLoaded",function(t){n.default,i.default,o.default})},function(t,e,r){"use strict";!function(){var t=document.querySelectorAll(".howitworks-right__tab"),e=document.querySelectorAll(".howitworks-right__line"),r=document.querySelector(".howitworks-left__desc-text"),n=[],i=[],o=[{id:"jsDocs",text:"Мы пробиваем автомобиль по всем возможным базам РФ. Специалист выполняет проверку идентификационных номеров на кузове, VIN номера в блоках управления, подтверждение сервисной истории и пробега, расшифровку кодов комплектации и сопоставление их с реальной комплектацией авто, проверка наличия и подлинности документов о покупке авто первым собственником и общение с ним (если владельцев было больше одного), проверка на штрафы и ограничения на регистрационные действия и т.д."},{id:"jsBody",text:"Полностью проверяем силовую часть кузова (крышу, стойки, лонжероны, днище) и навесные элементы (крылья, двери, капот и т.д.) Эталоном считается кузов нового автомобиля, и все сравнение происходит с ним. Опытный специалист уже при общем визуальном осмотре увидит все дефекты, вторичные окрасы, замаскированные ремонты и т.д. Незаметные глазу проблемы позволит увидеть толщиномер - прибор для замера толщины краски. Он покажет, перекрашена ли машина, есть ли шпаклевка под краской и т.п."},{id:"jsEngine",text:"Специалист выполняет общий осмотр двигателя, заводит и слушает его. Если подозрений не возникает, то следует тест-драйв. Если ничего не выявилось во время тест-драйва – автомобиль отправляется на сервис для детальной проверки."},{id:"jsWheel",text:"Большинство неисправностей подвески опытный специалист легко выявит во время внимательного осмотра и тест-драйва. Выполняется осмотр резиновых пыльников и чехлов, диагностика амортизаторов, проверка утечек масла, проверка на люфт опор стабилизаторов, подшипников верхних опор и тяги и т.д. Если проблем не выявлено, автомобиль отправляется на сервисную станцию для комплексного осмотра, который позволит увидеть каждый параметр каждой системы подвески и покажет скрытые неисправности."},{id:"jsBrake",text:"Мы уделяем особое внимание проверке тормозной системы автомобиля, ведь ее состояние - это вопрос вашей безопасности. Специалист проверяет общий износ расходных частей тормозной системы (диски и колодки), равномерность этого износа и оценит оставшийся срок службы. Затем специалист проверит состояние суппортов и других тормозных механизмов, а также электронных систем (антиблокировка, антипробуксовка, антизанос)."}];function c(t,e,r){for(var n=Array.from(t),i=0;i<=e;i++)r.push(n[i])}r.innerHTML=o[0].text,c(t,o.length-1,n),c(e,o.length-1,i),n.forEach(function(t){t.addEventListener("click",function(t){var e=t.target.getAttribute("id"),c=[].concat(o).filter(function(t){return t.id===e}),s=[].concat(i).filter(function(t){return t.classList.contains(e)});for(var u in console.log(c),n)n[u].classList.remove("js-tab-active");for(var l in i)i[l].classList.remove("js-line-active");r.innerHTML,!t.target.classList.contains("js-tab-active")&&(t.target.classList.add("js-tab-active"),s[0].classList.add("js-line-active"),r.innerHTML=c[0].text)})})}()},function(t,e,r){"use strict";!function(t){var e=document.querySelectorAll(".ourworks-btn");Array.from(e).forEach(function(t){t.addEventListener("mouseover",function(e){var r=e.target.innerHTML;e.target.innerHTML="Заказать",t.addEventListener("mouseout",function(t){t.target.innerHTML=r})})})}()}]);
//# sourceMappingURL=bundle.js.map