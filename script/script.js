// Typing animation
var typed = new Typed(".typing-animation", {
  strings: ["Student", "Web Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Navigation bar
$(document).ready(function () {
  $(window).scroll(function () {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });

$('.menu-btn').click(function () {
  $('.menu').toggleClass('active');
  $('.menu-btn i').toggleClass('active');
});

  
// carousel 
$('.carousel').owlCarousel({
   margin: 20,
   loop: true,
   autoplayTime: 2000,
   autoplayHoverPause: true,
   responsive: {
     0: {
       items: 1,
       nav: false
     },
     600: {
       items: 2,
       nav: false
     },
     1000: {
       items: 3,
       nav: false
     }
  }
 });
});
