window.onload = init;

let menuMobile;
let menuNav;
let estouNoMenuMobile = false;

function init () {

    menuMobile = document.querySelector(".menu-mobile");
    menuMobile.addEventListener("click", abrirFecharMenuMobile);


}

function abrirFecharMenuMobile() {
    menuNav = document.querySelector(".navbar");

    if (estouNoMenuMobile == false) {

//adicionar class ao elemento
        menuNav.classList.remove("d-flex");

        //menuNav.style.display = "flex";
        estouNoMenuMobile = true;

    } else {
        menuNav.classList.add("d-flex");
        //menuNav.style.display = "none";
        estouNoMenuMobile = false;

    }


}



var swiper1 = new Swiper('.swiper1', {
	direction: 'vertical',
	  mousewheel: {},
	  hashNavigation: true,
	  speed: 600,
	  keyboard: {
		enabled: true,
		onlyInViewport: false,
	  },
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
  });


  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });


var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.20) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}










