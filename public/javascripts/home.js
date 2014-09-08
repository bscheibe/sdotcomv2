jQuery(window).load(function () {
	$(window).scroll(function() {
        var startingPoint; //Should I use this?
        if ($(document).scrollTop() > 3000) {
        	$('#testimonial1').addClass("animated flipInX");
        }
        if ($(document).scrollTop() > 3200) {
            $('#testimonial2').addClass("animated flipInX");;
        }
        if ($(document).scrollTop() > 3350) {
            $('#testimonial3').addClass("animated flipInX");
        }
    });
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