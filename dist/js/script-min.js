$(document).ready(function(){function e(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var a=e.indexOf("Trident/");if(a>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var n=e.indexOf("Edge/");return n>0&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}var t=function(){$(".slider-item").slick({slidesToShow:4,autoplay:!1,speed:500,arrows:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]})};t(),$(".slider-control--right").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickNext")}),$(".slider-control--left").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickPrev")}),$(".tab-head__el").click(function(){var e=$(this).closest(".tab-container");e.find(".tab-head__el").removeClass("tab-head__el--active"),$(this).addClass("tab-head__el--active");var t=$(this).index();console.log(t),e.find(".content-tab").removeClass("content-tab--active"),e.find(".content-tab").eq(t).addClass("content-tab--active")}),$(".filter-toggle").click(function(){$(".filter-item-extend").slideToggle(),$(this).toggleClass("filter-toggle--show")}),$(".range").each(function(){var e=1*$(this).data("min"),t=1*$(this).data("max"),a=1*$(this).data("from"),i=1*$(this).data("to");$(this).ionRangeSlider({type:"double",grid:!1,min:e,max:t,from:a,to:i})}),$(".select-beauty").niceSelect(),$(".cat-nav__el-title").click(function(){$(this).closest(".cat-nav__el").find(".cat-nav__el-content").slideToggle(),$(this).closest(".cat-nav__el").find(".cat-nav__el-icon").toggleClass("cat-nav__el-icon--open")}),$(".cat-filter").click(function(){$(".cat-nav").slideToggle()}),$(".cat-head-toggle__el").click(function(){$(".cat-head-toggle__el").removeClass("cat-head-toggle__el--active"),$(this).addClass("cat-head-toggle__el--active");var e=$(this).data("type");$(".cat-type").removeClass("cat-type--open"),$(".cat-type").each(function(){$(this).data("type")===e&&$(this).addClass("cat-type--open")})}),$(".bay-location__list").perfectScrollbar(),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,t){"use strict";var a="img/pack.html",i=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var n,o,l="localStorage"in e&&null!==e.localStorage,s=function(){t.body.insertAdjacentHTML("afterbegin",o)},r=function(){t.body?s():t.addEventListener("DOMContentLoaded",s)};if(l&&localStorage.getItem("inlineSVGrev")==i&&(o=localStorage.getItem("inlineSVGdata")))return r(),!0;try{n=new XMLHttpRequest,n.open("GET",a,!0),n.onload=function(){n.status>=200&&n.status<400&&(o=n.responseText,r(),l&&(localStorage.setItem("inlineSVGdata",o),localStorage.setItem("inlineSVGrev",i)))},n.send()}catch(c){}}(window,document);