jQuery(window).load(function () {
	$(window).scroll(function() {
        if ($(document).scrollTop() > 150) {
            $('#masthead').addClass("navbar-scrolled");
            $('.go-top').css('bottom', '12px');
        } else {
            $('#masthead').removeClass("navbar-scrolled");
            $('.go-top').css('bottom', '-44px');
        }
    });
});

function goTop () {
	window.scrollTo(0, 0);
}

$('.go-top').on("click", function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});