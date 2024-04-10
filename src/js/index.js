import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// Кнопка "Показать все"
const section = document.querySelector('main')
const buttonShowAll = section.querySelector('.btn-show')
const buttonText = buttonShowAll.textContent

buttonShowAll.addEventListener('click', function () {
  section.classList.toggle('hide')
  section.classList.toggle('show')

  var buttonHide = document.querySelector('.hide')
  var buttonShow = document.querySelector('.show')

  if (buttonShow) {
    buttonShowAll.textContent = buttonText
  }

  if (buttonHide) {
    buttonShowAll.textContent = 'Скрыть'
  }
})

// Инициализация свайпера
if (document.body.matchMedia < 768) {
  swiper.init(swiper)
}

const swiper = new Swiper('.swiper', {
  spaceBetween: 16,
  width: 272,

  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  keyboard: {
    enabled: true,
    onlyInViewPort: true
  },

  on: {
    resize: function enableOnlyMobile(swiper) {
      if (768 < window.innerWidth) {
        swiper.disable()
        swiper.el.classList.add('-non-slider')
      } else {
        swiper.enable()
        swiper.el.classList.remove('-non-slider')
      }
    }
  }
})

// Инициализация свайпера
if (document.body.matchMedia < 768) {
  priceSwiper.init(swiper)
}
const priceSwiper = new Swiper('.price__swiper', {
  spaceBetween: 16,
  width: 292,

  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  keyboard: {
    enabled: true,
    onlyInViewPort: true
  },

  on: {
    resize: function enableOnlyMobile(swiper) {
      if (768 < window.innerWidth) {
        swiper.disable()
        swiper.el.classList.add('-non-slider')
      } else {
        swiper.enable()
        swiper.el.classList.remove('-non-slider')
      }
    }
  }
})

//Открыть меню
const buttonMenu = document.querySelector('.icon--menu')
const menu = document.querySelector('.burger-menu')
const buttonClose = menu.querySelector('.icon--close')

buttonMenu.addEventListener('click', function (evt) {
  evt.stopPropagation()

  menu.classList.add('show__burger-menu')
})

buttonClose.addEventListener('click', function () {
  menu.classList.remove('show__burger-menu')
})
