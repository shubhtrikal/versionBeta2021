const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll('.nav-links li');
const linkMain = document.querySelectorAll('.menu-item a');
const body = document.querySelector("body");
const loader = document.querySelector(".preloader");
const upDownScroll = document.querySelector(".up-down");




const navSlide = () => {

    burger.addEventListener('click', () => {

        if (nav.style.background) {
            nav.style.background = '';
        }
        else {
            nav.style.background = `#1f323f`;
        }

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



const navScroll = () => {
    const nav = document.querySelector('.navbar');

    window.onscroll = () => {
        if (window.scrollY > 5) {
            nav.classList.add('nav-color');
        }
        else {
            nav.classList.remove('nav-color');
        }

        if (window.scrollY > 700) {
            upDownScroll.style.display = "block";
        }
        else {
            upDownScroll.style.display = "none";
        }
    }
};

const navClose = () => {
    for (var x = 0; x < linkMain.length; x++) {
        linkMain[x].addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.toggle('nav-active');
            }
            if (body.classList.contains('fixed-body')) {
                body.classList.toggle('fixed-body');
            }
            if (nav.style.background) {
                nav.style.background = '';
            }

            navLinksList.forEach((link) => {
                link.style.animation = '';
            });

            if (burger.classList.contains('toggle')) {
                burger.classList.toggle('toggle');
            }
        });
    }
}

navScroll();
navSlide();
navClose();



// window.addEventListener('load', setTimeout(() => {
//     loader.classList.add('preload-finish');
// }, 3000));


$(document).ready(function() {
  
    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
      // Una vez haya terminado el preloader aparezca el scroll
      $('body').removeClass('no-scroll-y');
  
      if ($('#ctn-preloader').hasClass('loaded')) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $('#preloader').delay(0).queue(function() {
          $(this).remove();
        });
      }
    }, 3000);
    
  });



  
  function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("23 October 2021 23:59:00 GMT+05:30");		
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<br><span>Days</span><br><br>");
			$("#hours").html(hours + "<br><span>Hours</span><br><br>");
			$("#minutes").html(minutes + "<br><span>Minutes</span><br><br>");
			$("#seconds").html(seconds + "<br><span>Seconds</span><br><br>");		

	}

	setInterval(function() { makeTimer(); }, 1000);
