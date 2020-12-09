 // Navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
});

// Slider
$(document).ready(function(){
$('.thing').slick({
    dots: true,
    arrows:true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          rows: 2,  
          sllidesPerRow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    // prevArrow: $('.prev'),
    // nextArrow: $('.next'),
  })
});

