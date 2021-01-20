

import Swiper, {Navigation, Pagination} from "swiper";

Swiper.use([Navigation, Pagination]);

export default class Slider {
  constructor(className, config = {}) {
  this.className = document.querySelector(className);
  this.config = config;
  }

  sliderHandler() {
    new Swiper(this.className, this.config);
  }

  init() {
    if (!this.className) return;
    console.log('Slider')
    this.sliderHandler()
  }
}