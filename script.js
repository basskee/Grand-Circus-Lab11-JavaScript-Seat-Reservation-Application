$(document).ready(function() {
//Add a popover trigger for seats that aren't reserved
var theThing;
$(".seat:not(.na)").popover({
    html: true, 
	title: 'Reserve Your Seat',
	trigger: 'click',
	placement: 'bottom',
	content: function() {
		theThing = this;
		return $('#seat-form-content').html();
	}
}).parent().delegate('button', 'click', function(event) {
		$(theThing).css({'background-color': 'red'}); 
	});

$( "#seat-form-content" ).submit(function( event ) {
	  alert( "Handler for .submit() called." );
	  event.preventDefault();
	});

//Hide the other popovers when you select another
$('.seat:not(.na)').on('click', function (e) {
    $('.seat:not(.na)').not(this).popover('hide');
});


// Attempt at getting text onto seat once submit is clicked

$( "#seat-form-content" ).submit(function( event ) {
	("this").text( "Test" );
	});





});
