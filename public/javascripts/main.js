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

$('.go-top').on("click", function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

$('#sprint').on("click", function() {
    $(".selected-img").removeClass("selected-img");
    $("#sprintImg").addClass("selected-img");

    $(".selected").removeClass("selected");
    $("#sprint").addClass("selected");
});

$('#product').on("click", function() {
    $(".selected-img").removeClass("selected-img");
    $("#productImg").addClass("selected-img");

    $(".selected").removeClass("selected");
    $("#product").addClass("selected");
});

$('#release').on("click", function() {
    $(".selected-img").removeClass("selected-img");
    $("#releaseImg").addClass("selected-img");

    $(".selected").removeClass("selected");
    $("#release").addClass("selected");
});