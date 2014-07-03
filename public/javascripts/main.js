$(document).ready(function() {
	alert("cool");
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('#masthead').addClass("navbar-scrolled");
        }
        else {
            $('#masthead').removeClass("navbar-scrolled");
        }
    });
});​