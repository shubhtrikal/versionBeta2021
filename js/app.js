const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll('.nav-links li');
const linkMain = document.querySelectorAll('.menu-item a');
const body = document.querySelector("body");
const loader = document.querySelector(".preloader");
var w = document.documentElement.clientWidth;


const navSlide = () => {

    burger.addEventListener('click', () => {

        if (nav.style.background) {
            nav.style.background = '';
        }
        else {
            nav.style.background = `linear-gradient(264.55deg, #243E94 -1.6%, rgba(5, 250, 193, 0.79) 105.68%, rgba(5, 250, 193, 0.79) 105.68%)`;
        }

        navLinks.classList.toggle('nav-active');
        flag = 1;

        body.classList.toggle('fixed-body');

        navLinksList.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkAnim 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');

        for (var x = 0; x < linkMain.length; x++) {
            linkMain[x].addEventListener('click', () => {
                navLinks.classList.toggle('nav-active');
                body.classList.toggle('fixed-body');

                navLinksList.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    }
                    else {
                        link.style.animation = `navLinkAnim 0.5s ease forwards ${index / 7 + 0.5}s`;
                    }
                });

                burger.classList.toggle('toggle');
            });
        }
    });
}



const navScroll = () => {
    const nav = document.querySelector('.navbar');

    window.onscroll = () => {
        if (window.scrollY > 5) {
            nav.classList.add('nav-color');
        }
        else {
            nav.classList.remove('nav-color');
        }
    }
};


navScroll();
navSlide();



window.addEventListener('load', setTimeout(() => {
    loader.classList.add('preload-finish');
}, 3500));



