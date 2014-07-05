jQuery(window).load(function () {
	$(window).scroll(function() {
        var startingPoint; //Should I use this?
        if ($(document).scrollTop() > 2350) {
        	$('#testimonial1').addClass("animated flipInX");
        }
        if ($(document).scrollTop() > 2500) {
            $('#testimonial2').addClass("animated flipInX");;
        }
        if ($(document).scrollTop() > 2600) {
            $('#testimonial3').addClass("animated flipInX");
        }
    });
});