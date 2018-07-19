//ketika situs di load atau re-load
$(window).on('load',function(){
	$('.head-hidden').addClass('head-show');
	$('.btn-hidden').addClass('head-show');
});

// when clicked nav element
$('.page-scroll').on('click', function(e){

	// catching an element
	var point = $(this).attr('href');
	//catching address
	var onPoint = $(point);

	$('html,body').animate({
      scrollTop: onPoint.offset().top - 60
  }, 1000,'swing');
});

// from top to Electricity for Life 700px
// from top to Services 2200px
// from top to connect 2900 px

//paralllax effect on Card in Services
$(window).scroll(function(){

	//variable for catching scrolling value
	var wScroll = $(this).scrollTop();

	//function
	// if(wScroll > $('.about').offset().top - 100) {
		
		// $('.about-hidden').addClass('about-show');
		
	// }

});
