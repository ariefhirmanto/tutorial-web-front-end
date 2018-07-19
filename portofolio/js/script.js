//mencari event untuk jquery
$('.page-scroll').on('click', function (e){

  //variable isi href
  var tujuan = $(this).attr('href');
  //menangkap elemen href
  var elemenTujuan = $(tujuan);

  //fungsi
  $('html,body').animate({
      scrollTop: elemenTujuan.offset().top - 60
  }, 1000,'swing');
 
  e.preventDefault();
});

// parallax effect

//untuk paragraf About
$(window).on('load', function(){
	$('.p-left').addClass('p-show');
	$('.p-right').addClass('p-show');
});

//scroll efek
$(window).scroll(function(){

	//variabel menampung nilai scrolling
	var wScroll = $(this).scrollTop();

//jumbotron	
	//fungsi parallax img jumbotron
	$('.jumbotron img').css({
		'transform': 'translate(0px,'+ wScroll/4 +'%)'
	});

	//fungsi parallax h1 jumbotron
	$('.jumbotron h1').css({
		'transform': 'translate(0px,'+ wScroll/2 +'%)'
	});

	//fungsi parallax p jumbotron
	$('.jumbotron p').css({
		'transform': 'translate(0px,'+ wScroll/1.5 +'%)'
	});

//parallax portfolio
	if(wScroll> $('.portfolio').offset().top - 300){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			},200*i);
		});
	}


});


