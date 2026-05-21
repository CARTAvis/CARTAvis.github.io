"use strict";

$(document).ready(function () {
	/* Random Banner Image Selection */
	const darkBanners = [
		'banner_dark.png',
		'banner_dark_tim.png',
		'banner_dark_kyra.png'
	];
	
	const lightBanners = [
		'banner_light.png',
		'banner_light_tim.png',
		'banner_light_kyra.png'
	];
	
	// Detect if user prefers dark mode
	const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	
	// Select random banner from appropriate array
	const banners = prefersDark ? darkBanners : lightBanners;
	const randomBanner = banners[Math.floor(Math.random() * banners.length)];
	
	// Apply the random banner image
	const bannerElement = document.getElementById('banner');
	if (bannerElement) {
		bannerElement.style.backgroundImage = `url('images/banner-images/${randomBanner}')`;
		bannerElement.style.backgroundRepeat = 'no-repeat';
		bannerElement.style.backgroundPosition = 'center top';
		bannerElement.style.backgroundSize = 'cover';
	}

	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});
