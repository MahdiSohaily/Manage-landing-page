const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

const icon_Humburger = document.querySelector('.icon-humburger');
const icon_close = document.querySelector('.icon-close');

navToggle.addEventListener('click',()=>{

    if(primaryNav.hasAttribute('data-visible') ){
        navToggle.setAttribute('aria-expanded',false);
        icon_Humburger.style.display = 'block';
        icon_close.style.display = 'none';
        

    } else {
        navToggle.setAttribute('aria-expanded',true);
        icon_Humburger.style.display = 'none';
        icon_close.style.display = 'block';
    }

    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-visible')
});