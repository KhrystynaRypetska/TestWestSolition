


export const aboutUsConfig = {
  slidesPerView: 4,
  spaceBetween: 95,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    680: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    920: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween:90,
      slidesPerView: 4,
    }
  }
}