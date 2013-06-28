/* Author:
	Maggie Nuudles
*/
$(document).ready(function(){
	
	function headerHandler() {
		$header = $('#main-header');
		
		if( $(window).scrollTop() > 0 ) {
			$header.addClass('floating');
			console.log($(window).scrollTop());
		} else {
			$header.removeClass('floating');
			
		}
	}
	headerHandler();
	
	
	function introHandler() {
		var $intro = $('#intro .intro-wrapper');
		
		var $windowHeight = $(window).height();
		var $minHeight = $intro.find('#main-heading').outerHeight(true) + $intro.find('#feature-logo-wrapper').outerHeight(true);

		if( $(window).scrollTop() > 0 ) {
			$intro.css({
				'height': $minHeight
			});	
		} else {
			$intro.css({
				'height': $windowHeight,
				'min-height' : $minHeight
			});	
		}
			
	}
	introHandler();
	
	
	
	
	$(window).resize(function(){
		introHandler();
	});
	$(window).scroll(function(){
		headerHandler();
		introHandler()
	});
});