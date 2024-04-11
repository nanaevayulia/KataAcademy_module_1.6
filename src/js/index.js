import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// Инициализация свайпера
if (document.body.matchMedia < 768) {
  swiper.init(swiper)
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,

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

// Кнопка "Показать все"
const services = document.querySelector('.services')
const brends = document.querySelector('.brends')
const techTypes = document.querySelector('.techTypes')
const buttonShowServices = services.querySelector('.btn-show--services')
const buttonShowBrends = brends.querySelector('.btn-show--brends')
const buttonShowTechTypes = techTypes.querySelector('.btn-show--techTypes')
const buttonHideServices = services.querySelector('.btn-hide--services')
const buttonHideBrends = brends.querySelector('.btn-hide--brends')
const buttonHideTechTypes = techTypes.querySelector('.btn-hide--techTypes')

function funcButtonShow() {
  return function (button, section) {
    button.addEventListener('click', function () {
      section.classList.remove('hide')
      section.classList.add('show')
    })
  }
}

function funcButtonHide() {
  return function (button, section) {
    button.addEventListener('click', function () {
      section.classList.add('hide')
      section.classList.remove('show')
    })
  }
}

const buttonShow = funcButtonShow()
const buttonHide = funcButtonHide()

buttonShow(buttonShowServices, services)
buttonShow(buttonShowBrends, brends)
buttonShow(buttonShowTechTypes, techTypes)

buttonHide(buttonHideServices, services)
buttonHide(buttonHideBrends, brends)
buttonHide(buttonHideTechTypes, techTypes)

// Popups
const content = document.querySelector('.content')
const menu = document.querySelector('.burger-menu')
const substrate = document.querySelector('.substrate')
const popupCall = document.querySelector('.popup--call')
const popupFeedback = document.querySelector('.popup--feedback')
const buttonMenu = document.querySelector('.icon--menu')
const buttonCloseMenu = menu.querySelector('.icon--close')
const buttonPhoneMenu = menu.querySelector('.icon--phone--show')
const buttonPhoneContent = document.querySelector('.icon--phone')
const buttonFeedbackMenu = menu.querySelector('.icon--chat--show')
const buttonFeedbackContent = document.querySelector('.icon--chat')

// Открыть/закрыть меню
buttonMenu.addEventListener('click', function () {
  menu.classList.add('show__burger-menu')
  substrate.classList.add('show__substrate')
  content.classList.add('stop-scrolling')
})

buttonCloseMenu.addEventListener('click', function () {
  menu.classList.remove('show__burger-menu')
  substrate.classList.remove('show__substrate')
  content.classList.remove('stop-scrolling')
  popupCall.classList.remove('show__popup--call')
  popupFeedback.classList.remove('show__popup--feedback')
})

substrate.addEventListener('click', function () {
  menu.classList.remove('show__burger-menu')
  substrate.classList.remove('show__substrate')
  content.classList.remove('stop-scrolling')
  popupCall.classList.remove('show__popup--call')
  popupFeedback.classList.remove('show__popup--feedback')
})

// Открыть/закрыть попап "Заказать звонок"
function closePopup(popup, button) {
  const buttonClose = popup.querySelector('.icon--close')
  buttonClose.classList.add('close')

  const close = document.querySelector('.close')

  if (popup === popupCall && button === buttonPhoneMenu) {
    close.addEventListener('click', function () {
      popup.classList.remove('show__popup--call')
      buttonClose.classList.remove('close')
    })
  } else if (popup === popupCall && button === buttonPhoneContent) {
    close.addEventListener('click', function () {
      popup.classList.remove('show__popup--call')
      substrate.classList.remove('show__substrate')
      content.classList.remove('stop-scrolling')
      buttonClose.classList.remove('close')
    })
  } else if (popup === popupFeedback && button === buttonFeedbackMenu) {
    close.addEventListener('click', function () {
      popup.classList.remove('show__popup--feedback')
      buttonClose.classList.remove('close')
    })
  } else if (popup === popupFeedback && button === buttonFeedbackContent) {
    close.addEventListener('click', function () {
      popup.classList.remove('show__popup--feedback')
      substrate.classList.remove('show__substrate')
      content.classList.remove('stop-scrolling')
      buttonClose.classList.remove('close')
    })
  }
}

buttonPhoneMenu.addEventListener('click', function () {
  popupCall.classList.toggle('show__popup--call')
  substrate.classList.add('show__substrate')
  popupFeedback.classList.remove('show__popup--feedback')

  if (window.innerWidth >= 1440) {
    closePopup(popupCall, buttonPhoneContent)
  } else {
    closePopup(popupCall, buttonPhoneMenu)
  }
})

buttonPhoneContent.addEventListener('click', function () {
  popupCall.classList.add('show__popup--call')
  substrate.classList.add('show__substrate')
  content.classList.add('stop-scrolling')

  closePopup(popupCall, buttonPhoneContent)
})

// Открыть/закрыть попап "Обратная связь"
buttonFeedbackMenu.addEventListener('click', function () {
  popupFeedback.classList.toggle('show__popup--feedback')
  substrate.classList.add('show__substrate')
  popupCall.classList.remove('show__popup--call')

  if (window.innerWidth >= 1440) {
    closePopup(popupFeedback, buttonFeedbackContent)
  } else {
    closePopup(popupFeedback, buttonFeedbackMenu)
  }
})

buttonFeedbackContent.addEventListener('click', function () {
  popupFeedback.classList.add('show__popup--feedback')
  substrate.classList.add('show__substrate')
  content.classList.add('stop-scrolling')

  closePopup(popupFeedback, buttonFeedbackContent)
})
