// Typing animation
var typed = new Typed(".typing-animation", {
  strings: ["Student", "Web Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

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
});
