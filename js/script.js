// $(document).ready(function(){
// 	$(".scroll").click(function(event){
// 		event.preventDefault();
// 		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
// 		$('.navbar-default a').removeClass('selected');
// 		$(this).addClass('selected');
//     	});
// });

$(document).ready(function(){
 $("#home").click(function (){
              $('html, body').animate({
                  scrollTop: $(".about").offset().top-50
              }, 800);
          });
 $("#about").click(function (){
              $('html, body').animate({
                  scrollTop: $(".food").offset().top-50
              }, 800);
          });
 $("#portfolio").click(function (){
              $('html, body').animate({
                  scrollTop: $(".beer").offset().top-55
              }, 800);
          });
 $("#contact").click(function (){
              $('html, body').animate({
                  scrollTop: $(".information").offset().top-55
              }, 800);
          });
