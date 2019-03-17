$(document).ready(function(){
  $('.home-banner-slick').slick({
  	arrows: true,
  	autoplay: false,
  	responsive:[
  	{
  		breakpoint: 960,
  		settings:{
  			arrows: false,
  			autoplay: true,
  			autoplaySpeed: 2000,
  		}
  	}
  	]
  });
});