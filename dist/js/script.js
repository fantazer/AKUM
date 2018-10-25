$(document).ready(function () {

	//slider
	var slider = function() {
		$('.slider-item').slick({
			slidesToShow: 4,
			autoplay: false,
			speed: 500,
			arrows: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	};
	slider();
	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	//slider===end

	//tabs control
	$('.tab-head__el').click(function(){
		var currentTabContainer = $(this).closest('.tab-container');
		currentTabContainer.find('.tab-head__el').removeClass('tab-head__el--active');
		$(this).addClass('tab-head__el--active');
		var currentTab = $(this).index();
		console.log(currentTab);
		currentTabContainer.find('.content-tab').removeClass('content-tab--active');
		currentTabContainer.find('.content-tab').eq(currentTab).addClass('content-tab--active');
	});

	$('.filter-toggle').click(function(){
		$('.filter-item-extend').slideToggle();
		$(this).toggleClass('filter-toggle--show');
	});


	//tabs control ===end

	function detectIE() {
		var ua = window.navigator.userAgent;

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
			// Edge (IE 12+) => return version number
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		// other browser
		return false;
	}

	if (detectIE() <= 14 && detectIE()) {
		$('body').empty();
		$('body').prepend('' +
			'<div class="old-browser">' +
			'<div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br>' +
			'<div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br>' +
			'</div>');
	}
	//for init SVG

	// ==== clear storage =====
	localStorage.clear();
	sessionStorage.clear();
	$(window).unload(function () {
		localStorage.clear();
	});
	// ==== clear storage end =====


	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/

})

//cash SVG

;(function (window, document) {
	'use strict';

	var file = 'img/pack.html',
		revision = 1;

	if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
		return true;

	var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
		request,
		data,
		insertIT = function () {
			document.body.insertAdjacentHTML('afterbegin', data);
		},
		insert = function () {
			if (document.body) insertIT();
			else document.addEventListener('DOMContentLoaded', insertIT);
		};

	if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
		data = localStorage.getItem('inlineSVGdata');
		if (data) {
			insert();
			return true;
		}
	}

	try {
		request = new XMLHttpRequest();
		request.open('GET', file, true);
		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				data = request.responseText;
				insert();
				if (isLocalStorage) {
					localStorage.setItem('inlineSVGdata', data);
					localStorage.setItem('inlineSVGrev', revision);
				}
			}
		}
		request.send();
	}
	catch (e) {
	}

}(window, document));