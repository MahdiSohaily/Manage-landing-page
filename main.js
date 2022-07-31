const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

const icon_Hamburger = document.querySelector('.icon-Hamburger');
const icon_close = document.querySelector('.icon-close');

navToggle.addEventListener('click',()=>{

    if(primaryNav.hasAttribute('data-visible') ){
        navToggle.setAttribute('aria-expanded',false);
        icon_Hamburger.style.display = 'block';
        icon_close.style.display = 'none';
        

    } else {
        navToggle.setAttribute('aria-expanded',true);
        icon_Hamburger.style.display = 'none';
        icon_close.style.display = 'block';
    }

    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-visible')
});

$(document).ready(function () {
    $('.carousel').slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]

    });
  });