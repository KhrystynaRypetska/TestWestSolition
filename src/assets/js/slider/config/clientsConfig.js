

export const clientsConfig = {
  slidesPerView: 4,
  spaceBetween: 100,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 2,

    },

    920: {
      spaceBetween: 40,
      slidesPerView: 3,
      navigation: false,
    },
    1024: {
      spaceBetween: 100,
      slidesPerView: 4,
      navigation: false,
    },
   1430: {
      spaceBetween: 100,
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
}