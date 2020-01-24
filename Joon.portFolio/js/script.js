// Scroll to sections
$(document).ready(function(){
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 700);
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

// //word clouds
// $(document).ready(function() {

//   var
//     words = $('#tagi text'),
//     l = words.length,
//     current = null,
//     delay = 2000;

//   function clearBlink(o) {
//     var
//       ca = o.getAttribute('class').split(' '),
//       i = ca.indexOf('blink');

//     if (i !== -1) {
//       ca.splice(i, 1);
//       o.setAttribute('class', ca.join(' '));
//     }
//   }

//   function addBlink(o) {
//     var
//       ca = o.getAttribute('class').split(' ');
//     ca.push('blink');
//     o.setAttribute('class', ca.join(' '));
//   }

//   function wordblink() {

//     var e;

//     if (current !== null) {
//       clearBlink(words.eq(current)[0])
//     }

//     current = Math.floor(Math.random() * l);
//     e = words.eq(current);
//     addBlink(e[0]);

//     setTimeout(wordblink, delay);
//   }

//   wordblink();

// });
