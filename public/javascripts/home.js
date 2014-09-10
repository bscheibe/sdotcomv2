jQuery(window).load(function () {
	$(window).scroll(function() {
        var startingPoint; //Should I use this?
        if ($(document).scrollTop() > 1850) {
        	$('#testimonial1').addClass("animated flipInX");
        }
        if ($(document).scrollTop() > 2100) {
            $('#testimonial2').addClass("animated flipInX");;
        }
        if ($(document).scrollTop() > 2350) {
            $('#testimonial3').addClass("animated flipInX");
        }
    });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});

$('.companies').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows : false,
  pauseOnHover : false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$("#subscribe").submit(function(event) 
{
    /* stop form from submitting normally */
    event.preventDefault();

    /* get some values from elements on the page: */
    var $form = $( this ),
        $submit = $form.find( 'button[type="submit"]' ),
        email_value = $form.find( 'input[name="email"]' ).val(),
        url = $form.attr('action');

     /* Send the data using post */
    var posting = $.post( url, { 
                       email: email_value, 
                    });

    posting.done(function( data )
    {
        /* Clear the result of the input field */
        $('#email').val('');

        /* Put the results in a div */
        $( "#successMessage" ).html("You have successfully subscribed! Look for the confirmation email.");

    });

    posting.fail(function( data )
    {
        /* Clear the result of the input field */
        $('#email').val('');
        
        /* Put the results in a div */
        $( "#errorMessage" ).html("There was an error when trying to subscribe. Please try again.");
    })
});