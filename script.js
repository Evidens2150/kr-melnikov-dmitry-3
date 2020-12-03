"use strict";function L(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function e(){var e;1e3<=window.pageYOffset&&f&&(f=!(e=function(e,t,n){return function(){if(t<++e)return clearTimeout(e);n.innerText="".concat(e,"%")}}),n.classList.add("skills__bar__html_animation"),i.classList.add("skills__bar__css_animation"),a.classList.add("skills__bar__js_animation"),o.classList.add("skills__bar__git_animation"),s.classList.add("skills__bar__figma_animation"),setInterval(e(0,85,l),100),setInterval(e(0,55,c),150),setInterval(e(0,5,u),1600),setInterval(e(0,15,_),550),setInterval(e(0,80,d),100))}var t,n,i,a,o,s,l,c,u,_,d,f;!function(e){var t=e.sliderEl,n=void 0===t?".slider":t,r=e.defaultActiveSlide,i=void 0===r?+localStorage.getItem("activeSlide")||0:r,a=document.querySelector(n);if(!a)return console.warn('Element "Slider" with querySelector "'.concat(n,'" is NOT FOUND on this page, please check your querySelector.'));var o=a.querySelector(".slider__wrapper"),s=a.querySelector(".slider__inner-wrapper"),l=a.querySelector(".slider__pagination"),c=a.querySelector(".slider__button_previous"),u=a.querySelector(".slider__button_next"),_=L(a.querySelectorAll(".slider__slide")),d=500;i<0&&(i=0);i>=_.length&&(i=_.length-1);var f,m=i,v=0,b=[],y=null;function p(){v=o.clientWidth;var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=k(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}(_);try{for(t.s();!(e=t.n()).done;){e.value.style.width="".concat(v,"px")}}catch(e){t.e(e)}finally{t.f()}}function h(e,t){var n,r=!(1<arguments.length&&void 0!==t)||t;e<0||e>=_.length||(r&&(n=d,clearTimeout(y),s.style.transition="transform ".concat(n,"ms"),y=setTimeout(function(){s.style.transition=""},n)),b[m].classList.remove("slider__pagination__item_active"),b[e].classList.add("slider__pagination__item_active"),0===e?c.setAttribute("disabled",""):c.removeAttribute("disabled"),e===_.length-1?u.setAttribute("disabled",""):u.removeAttribute("disabled"),s.style.transform="translateX(-".concat(v*e,"px)"),m=e,localStorage.setItem("activeSlide",m))}p(),function(){for(var e=0;e<_.length;e++){var t=function(e){var t=document.createElement("button");t.classList.add("slider__pagination__item"),e===m&&t.classList.add("slider__pagination__item_active");return t.addEventListener("click",function(){h(e)}),t}(e);l.insertAdjacentElement("beforeend",t),b.push(t)}}(),h(m,!1),window.addEventListener("resize",function(){p(),h(m,!1)}),c.addEventListener("click",function(){h(m-1)}),u.addEventListener("click",function(){h(m+1)});var g=0,S=!1,w=!1;o.addEventListener("touchstart",function(e){f=e.changedTouches[0].pageX,w=S=!0}),o.addEventListener("touchmove",function(e){var t;S&&(150+(t=f-e.changedTouches[0].pageX)<(g=-t)&&w&&(h(m-1),w=!1),150+g<t&&w&&(h(m+1),w=!1))}),o.addEventListener("touchend",function(e){g=0,S=!1})}({}),t=L(document.querySelectorAll(".skills__percent")),n=document.querySelector(".skills__bar__html"),i=document.querySelector(".skills__bar__css"),a=document.querySelector(".skills__bar__js"),o=document.querySelector(".skills__bar__git"),s=document.querySelector(".skills__bar__figma"),l=t[0],c=t[1],u=t[2],_=t[3],d=t[4],f=!0,t.forEach(function(e){return e.innerText="0%"}),window.addEventListener("scroll",e),setInterval(function(){n.classList.remove("skills__bar__html_animation"),i.classList.remove("skills__bar__css_animation"),a.classList.remove("skills__bar__js_animation"),o.classList.remove("skills__bar__git_animation"),s.classList.remove("skills__bar__figma_animation"),t.forEach(function(e){return e.innerText="0%"}),setTimeout(e(f=!0),100)},15e3),new Swiper(".swiper-container",{direction:"horizontal",loop:!0,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}});