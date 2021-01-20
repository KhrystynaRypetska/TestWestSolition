'use-strict'
import 'swiper/swiper-bundle.css'
import '../styles/style.scss'


import Slider from './slider/slider'
import Select from '@/assets/js/select/select'


import {clientsConfig} from  './slider/config/clientsConfig'
import {aboutUsConfig} from '@/assets/js/slider/config/about-usConfig'

document.addEventListener("DOMContentLoaded", ()=> {
  new Slider(".js--clients", clientsConfig).init()
  new Slider('.js--about-us', aboutUsConfig).init()


  //Select
  const select = document.querySelector('.js--select-phone')
  const selectLang = document.querySelector('.js--select-lang')


  if (select) {
    new Select('.js--select-phone').init()
  }

  if (selectLang) {
    new Select('.js--select-lang').init()
  }


  //MobNav
  const menuBtn = document.querySelector('.buttonMob')

  let menuOpen = false
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open')
      menuOpen = true
      document.querySelector('.header_list').classList.add('show-menu')
    } else {
      menuBtn.classList.remove('open')
      menuOpen = false
      document.querySelector('.header_list').classList.remove('show-menu')
    }
  })
})

