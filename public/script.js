"use strict";
// Navigation
document
  .querySelector(".dropdown-menu")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

const screenWidth = window.matchMedia("(max-width: 992px)");

if (screenWidth.matches) {
  const linkContainer = document.querySelectorAll(
    ".col-megamenu .list-unstyled"
  );
  const megaMenuBtn = document.querySelectorAll(".col-megamenu .title");

  linkContainer.forEach((link) => {
    link.classList.remove("show");
    link.style.height = "0";
    link.style.overflow = "hidden";
  });

  document
    .querySelectorAll(".col-megamenu .feather-minus")
    .forEach((icon) => icon.classList.add("d-none"));

  megaMenuBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.parentNode.classList.contains("menu-active"))
        btn.parentNode.classList.toggle("menu-active");
      else {
        megaMenuBtn.forEach((btn) =>
          btn.parentNode.classList.remove("menu-active")
        );
        btn.parentNode.classList.add("menu-active");
      }
    });
  });
}

// Faq accordion
const accordionBtn = document.querySelectorAll(".accordion-button");

accordionBtn &&
  accordionBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.parentNode.classList.contains("active")) {
        btn.parentNode.classList.toggle("active");
      } else {
        accordionBtn.forEach((btn) =>
          btn.parentNode.classList.remove("active")
        );
        btn.parentNode.classList.add("active");
      }
    })
  );

// swiper slider
const testimonialSlider = document.querySelector(".testimonials-slider");

const swiper = new Swiper(testimonialSlider && testimonialSlider, {
  //* How much slide to scroll
  slidesPerGroup: 1,
  //* slide only according ro mouse scroll
  loop: true,
  speed: 1000,

  //* Breakpoints
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    },
  },
});

const reviewSlider = document.querySelector(".reviews");

const swiperReviews = new Swiper(reviewSlider && reviewSlider, {
  //* How much slide to scroll
  slidesPerGroup: 1,
  //* slide only according ro mouse scroll
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //* Breakpoints
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
