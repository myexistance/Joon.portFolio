// Scroll to sections
$(document).ready(function(){
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
		$('.navbar-default a').removeClass('selected');
		$(this).addClass('selected');
    	});
});




// closes the responsive nav bar when clicked
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
