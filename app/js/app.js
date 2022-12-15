$(document).ready(function() {
	// Page  up
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.pageup').fadeIn();
		} else 
			{$('.pageup').fadeOut();
		}
	});
	// Smooth scroll
	$("a[href^='#']").click(function() { 
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	  });
})