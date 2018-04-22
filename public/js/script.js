$(document).ready(function(){
  $('.tooltips-elements')
    .tooltip()
    .each(function() {
        var color = $(this).data('color');
        $(this).hover(function(){
        	var aria = $(this).attr('aria-describedby');
        	$('#' + aria).find('.tooltip-inner').css({
	        	"background": color,
	        	"color" : "#333",
	        	"margin-left" : "10px",
	        	"font-weight" : "700",
	        	"font-family" : "Open Sans",
                "font-size" : "13px",
            });
	        $('#' + aria).find('.tooltip-arrow').css({
	        	"border-bottom-color" : color,
	        });
        });
    });
});