jQuery(window).load(function () {
	$(window).scroll(function() {
        if ($(document).scrollTop() > 0) {
            $('#feature_1_text').addClass("animated fadeInLeftBig");
            $('#feature_1_img').addClass("animated fadeInRightBig");
        } 
        if ($(document).scrollTop() > 500) {
        	$('#feature_2_img').addClass("animated fadeInLeftBig");
        	$('#feature_2_text').addClass("animated fadeInRightBig");
        }
        if ($(document).scrollTop() > 1000) {
            $('#feature_3_text').addClass("animated fadeInLeftBig");
            $('#feature_3_img').addClass("animated fadeInRightBig");
        } 
        if ($(document).scrollTop() > 1450) {
        	$('#feature_4_img').addClass("animated fadeInLeftBig");
        	$('#feature_4_text').addClass("animated fadeInRightBig");
        }
        if ($(document).scrollTop() > 1850) {
            $('#feature_5_text').addClass("animated fadeInLeftBig");
            $('#feature_5_img').addClass("animated fadeInRightBig");
        } 
        if ($(document).scrollTop() > 2250) {
        	$('#feature_6_img').addClass("animated fadeInLeftBig");
        	$('#feature_6_text').addClass("animated fadeInRightBig");
        }
    });
});