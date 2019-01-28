$(document).ready(function(){
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
		$('.navbar-default a').removeClass('selected');
		$(this).addClass('selected');
    	});
});


// show/hide the menu when examples is clicked
// $(".dropdown-toggle").on("click", function () {
//   $(".dropdown-menu").toggle();
// });

// hide the menu when an exmple is clicked
// $("#home").on("click", function(){
//     $(".navbar-nav").hide();
// });
// $("#about").on("click", function(){
//     $(".navbar-nav").hide();
// });
// $("#portfolio").on("click", function(){
//     $(".navbar-nav").hide();
// });
// $("#contact").on("click", function(){
//     $(".navbar-nav").hide();
// });




$(document).ready(function(){
 $("#home").click(function (){
              $('html, body').animate({
                  scrollTop: $(".home").offset().top-50
              }, 10);
          });
 $("#about").click(function (){
              $('html, body').animate({
                  scrollTop: $(".about").offset().top-50
              }, 10);
          });
 $("#portfolio").click(function (){
              $('html, body').animate({
                  scrollTop: $(".portfolio").offset().top-55
              }, 10);
          });
 $("#contact").click(function (){
              $('html, body').animate({
                  scrollTop: $(".contact").offset().top-55
              }, 10);
          });
