"use strict";function n(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var a,s,c,l,u,d,e,t,r,o,m,f,h=document.querySelector(".profile-img_js"),g=document.querySelector(".profile-name_js"),p=document.querySelector(".profile-surname_js"),w=document.querySelector(".profile-email_js"),y=document.querySelector(".profile-password_js"),v=document.querySelector(".profile-location_js"),S=document.querySelector(".profile-age_js"),j={};T(),logout.addEventListener("click",function(){T()}),a=document.querySelector(".change-password_js"),s=document.querySelector(".modal-change-password_js"),c=document.forms["change-password"],modalOpen(a,s,c),c.addEventListener("submit",function(e){if(e.preventDefault(),!isLoading){isLoading=!0;var t=localStorage.getItem("token");if(!t)return window.location.pathname="https://evidens2150.github.io/kr-melnikov-dmitry-3/index.html";var r=getFormData(e.target,{},"formData"),o=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};""===e.oldPassword&&(t.oldPassword="Your password is incorrect");""===e.newPassword?t.newPassword="Please enter your new password":e.newPassword.length<8&&(t.newPassword="Your new password is too short");e.newPasswordRepeat===e.newPassword&&""!==e.newPasswordRepeat||(t.newPasswordRepeat="Your password is incorrect, check it");return t}(getFormData(e.target));setFormErrors(c,o),0===Object.keys(o).length&&(c.insertAdjacentHTML("beforeend",'<div class="preloader"></div>'),r.querySelector(".preloader").innerHTML=formPreloaderCreator(),fetchData({method:"PUT",body:r,url:"/api/users/",headers:{"x-access-token":t}}).then(function(e){return e.json()}).then(function(e){e.success?setTimeout(function(){modalClose(a,s,c),sendResult(document.querySelector(".modal-success_js")),T()},2e3):setTimeout(function(){throw modalClose(a,s,c),sendResult(document.querySelector(".modal-error_js")),e},2e3),isLoading=!1}).catch(function(){console.error("Error of change password of User".concat(userId)),isLoading=!1}))}}),l=document.querySelector(".change-data_js"),u=document.querySelector(".modal-change-data_js"),d=document.forms["change-data"],l.addEventListener("click",function(){setValueToForm(d,j)}),modalOpen(l,u,d),d.addEventListener("submit",function(e){e.preventDefault();var t=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};checkEmail(e.email)||(t.email="Please enter a valid email adress");""===e.name?t.name="Please enter your name":(e.name.length<2||20<=e.name.length)&&(t.name="Your name is not valid, check it");""===e.surname?t.surname="Please enter your surname":(e.surname.length<2||20<=e.surname.length)&&(t.surname="Your surname is not valid, check it");""===e.location?t.location="Please enter your location":(e.location.length<2||20<=e.location.length)&&(t.location="Location name is not valid");!isNaN(e.age)&&""!==e.age||(t.age="Please enter your age");return t}(getFormData(e.target));if(setFormErrors(d,t),console.log(t),0===Object.keys(t).length){if(d.insertAdjacentHTML("beforeend",'<div class="preloader"></div>'),(void 0).querySelector(".preloader").innerHTML=formPreloaderCreator(),isLoading)return;isLoading=!0;var r=localStorage.getItem("token");if(!r)return window.location.pathname="https://evidens2150.github.io/kr-melnikov-dmitry-3/index.html";var o=getFormData(e.target,{},"formData");fetchData({method:"PUT",body:o,url:"/api/users/",headers:{"x-access-token":r}}).then(function(e){return e.json()}).then(function(e){e.success?setTimeout(function(){modalClose(l,u,d),sendResult(document.querySelector(".modal-success_js")),T()},2e3):setTimeout(function(){throw modalClose(l,u,d),sendResult(document.querySelector(".modal-error_js")),e},2e3),isLoading=!1}).catch(function(){console.error("Error of change data of User"),setFormErrors(e.target,err.errors),console.error(err.errors),isLoading=!1})}}),e=document.querySelector(".delete-profile_js"),t=document.querySelector(".modal_delete-profile_js"),r=document.forms["delete-profile"],o=document.querySelector(".delete-profile-accept_js"),m=localStorage.getItem("token"),f=localStorage.getItem("userId"),modalOpen(e,t,r),o.addEventListener("click",function(e){e.preventDefault(),isLoading=!0,fetchData({method:"DELETE",url:"/api/users/".concat(f),headers:{"x-access-token":m}}).then(function(e){return e.json()}).then(function(e){if(!e.success)throw console.error("Error of Delete User");localStorage.removeItem("userId"),localStorage.removeItem("token"),console.log("User was successfully deleted"),window.location.pathname="https://evidens2150.github.io/kr-melnikov-dmitry-3/index.html",isLoading=!1})});var L=document.forms["change-data"].querySelector(".avatar-inner-text_js"),_=document.forms["change-data"].querySelector(".modal__close");function T(){var e=localStorage.getItem("token"),t=localStorage.getItem("userId");if(!e||!t)return window.location.pathname="https://evidens2150.github.io/kr-melnikov-dmitry-3/index.html";fetchData({method:"GET",url:"/api/users/".concat(t)}).then(function(e){return e.json()}).then(function(e){if(!e.success)throw e;!function(e){for(var t=[],r=1;r<=e.password.length;r++)t.push("*");h.setAttribute("src","".concat(SERVER_URL).concat(e.photoUrl)),g.innerText=e.name,p.innerText=e.surname,w.innerText=e.email,y.innerText=t.join(""),v.innerText=e.location,S.innerText=e.age}(j=e.data)}).catch(function(e){return console.error(e),window.location.pathname="https://evidens2150.github.io/kr-melnikov-dmitry-3/index.html"})}window.FileList&&window.File&&(document.querySelector(".avatar__input_js").addEventListener("change",function(e){L.innerText="";var t,r=n(e.target.files);try{for(r.s();!(t=r.n()).done;){var o=t.value;L.innerText="".concat(o.name)}}catch(e){r.e(e)}finally{r.f()}}),document.forms["change-data"].addEventListener("submit",function(e){e.preventDefault(),L.innerText="Choose a picture..."}),_.addEventListener("click",function(e){e.preventDefault(),L.innerText="Choose a picture..."}));