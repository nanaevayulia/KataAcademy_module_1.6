import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import '../scss/style.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// Инициализация свайпера 240
if (document.body.matchMedia < 768) {
  swiper240.init(swiper)
  swiper260.init(swiper)
}

const swiper240 = new Swiper('.swiper--240', {
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

// Инициализация свайпера 260
const swiper260 = new Swiper('.swiper--260', {
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

// // Кнопка "Показать все"
const services = document.querySelector('.services')
const brands = document.querySelector('.brands')
const techTypes = document.querySelector('.techTypes')
const buttonServices = services.querySelector('.btn-show--services')
const buttonbrands = brands.querySelector('.btn-show--brands')
const buttonTechTypes = techTypes.querySelector('.btn-show--techTypes')

function funcButtonShow(button) {
  const buttonText = button.innerText

  return function (
    button,
    section,
    classHide,
    classShow,
    buttonHide,
    buttonShow
  ) {
    button.addEventListener('click', function () {
      section.classList.toggle('hide')
      section.classList.toggle('show')
      button.classList.toggle(classShow)
      button.classList.toggle(classHide)

      const buttonHideSection = section.querySelector(buttonHide)
      const buttonShowSection = section.querySelector(buttonShow)

      if (buttonHideSection) {
        buttonHideSection.innerText = 'Скрыть'
      }
      if (buttonShowSection) {
        buttonShowSection.innerText = buttonText
      }
    })
  }
}

const buttonShowServices = funcButtonShow(buttonServices)
const buttonShowbrands = funcButtonShow(buttonbrands)
const buttonShowtechTypes = funcButtonShow(buttonTechTypes)

buttonShowServices(
  buttonServices,
  services,
  'btn-hide--services',
  'btn-show--services',
  '.btn-hide--services',
  '.btn-show--services'
)
buttonShowbrands(
  buttonbrands,
  brands,
  'btn-hide--brands',
  'btn-show--brands',
  '.btn-hide--brands',
  '.btn-show--brands'
)
buttonShowtechTypes(
  buttonTechTypes,
  techTypes,
  'btn-hide--techTypes',
  'btn-show--techTypes',
  '.btn-hide--techTypes',
  '.btn-show--techTypes'
)

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

  if (popup === popupCall) {
    close.addEventListener('click', function () {
      popup.classList.remove('show__popup--call')
      substrate.classList.remove('show__substrate')
      content.classList.remove('stop-scrolling')
      buttonClose.classList.remove('close')
      menu.classList.remove('show__burger-menu')
    })
  } else if (popup === popupFeedback) {
    close.addEventListener('click', function () {
      popup.classList.remove('show__popup--feedback')
      substrate.classList.remove('show__substrate')
      content.classList.remove('stop-scrolling')
      buttonClose.classList.remove('close')
      menu.classList.remove('show__burger-menu')
    })
  }
}

buttonPhoneMenu.addEventListener('click', function () {
  popupCall.classList.toggle('show__popup--call')
  substrate.classList.add('show__substrate')
  popupFeedback.classList.remove('show__popup--feedback')

  closePopup(popupCall)
})

buttonPhoneContent.addEventListener('click', function () {
  popupCall.classList.add('show__popup--call')
  substrate.classList.add('show__substrate')
  content.classList.add('stop-scrolling')

  closePopup(popupCall)
})

// Открыть/закрыть попап "Обратная связь"
buttonFeedbackMenu.addEventListener('click', function () {
  popupFeedback.classList.toggle('show__popup--feedback')
  substrate.classList.add('show__substrate')
  popupCall.classList.remove('show__popup--call')

  closePopup(popupFeedback)
})

buttonFeedbackContent.addEventListener('click', function () {
  popupFeedback.classList.add('show__popup--feedback')
  substrate.classList.add('show__substrate')
  content.classList.add('stop-scrolling')

  closePopup(popupFeedback)
})

// import 'swiper/swiper.scss'
// import 'swiper/modules/pagination.scss'
// import '../scss/style.scss'

// import Swiper from 'swiper'
// import { Pagination } from 'swiper/modules'

// if (document.body.matchMedia < 768) {
//   swiper.init(swiper)
// }

// const swiper = new Swiper('.swiper', {
//   slidesPerView: 'auto',
//   spaceBetween: 16,
//   modules: [Pagination],
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewPort: true
//   },

//   breakpoints: {
//     768: {
//       on: {
//         resize: function () {
//           if (swiper.isBeginning && swiper.isEnd) {
//             swiper.disable()
//           } else {
//             swiper.enable()
//           }
//         }
//       }
//     }
//   }
// })

// function toggleSection(button, section, action) {
//   button.addEventListener('click', function () {
//     section.classList[action]('show')
//     section.classList[action]('hide')
//   })
// }

// const sections = [
//   { button: buttonShowServices, section: services, action: 'add' },
//   { button: buttonShowbrands, section: brands, action: 'add' },
//   { button: buttonShowTechTypes, section: techTypes, action: 'add' },
//   { button: buttonHideServices, section: services, action: 'remove' },
//   { button: buttonHidebrands, section: brands, action: 'remove' },
//   { button: buttonHideTechTypes, section: techTypes, action: 'remove' }
// ]

// sections.forEach(({ button, section, action }) => {
//   toggleSection(button, section, action)
// })

// function closeAllPopups() {
//   popupCall.classList.remove('show__popup--call')
//   popupFeedback.classList.remove('show__popup--feedback')
//   substrate.classList.remove('show__substrate')
//   content.classList.remove('stop-scrolling')
// }

// buttonMenu.addEventListener('click', function () {
//   menu.classList.toggle('show__burger-menu')
//   substrate.classList.toggle('show__substrate')
//   content.classList.toggle('stop-scrolling')
//   closeAllPopups()
// })

// function closePopup(popup) {
//   const buttonClose = popup.querySelector('.icon--close')
//   buttonClose.classList.add('close')
//   buttonClose.addEventListener('click', function () {
//     popup.classList.remove(`show__popup--${popup.classList[1].split('--')[1]}`)
//     buttonClose.classList.remove('close')
//     closeAllPopups()
//   })
// }

// buttonPhoneMenu.addEventListener('click', function () {
//   popupCall.classList.toggle('show__popup--call')
//   substrate.classList.add('show__substrate')
//   popupFeedback.classList.remove('show__popup--feedback')
//   closePopup(popupCall)
// })

// buttonPhoneContent.addEventListener('click', function () {
//   popupCall.classList.add('show__popup--call')
//   substrate.classList.add('show__substrate')
//   content.classList.add('stop-scrolling')
//   closePopup(popupCall)
// })

// buttonFeedbackMenu.addEventListener('click', function () {
//   popupFeedback.classList.toggle('show__popup--feedback')
//   substrate.classList.add('show__substrate')
//   popupCall.classList.remove('show__popup--call')
//   closePopup(popupFeedback)
// })

// buttonFeedbackContent.addEventListener('click', function () {
//   popupFeedback.classList.add('show__popup--feedback')
//   substrate.classList.add('show__substrate')
//   content.classList.add('stop-scrolling')
//   closePopup(popupFeedback)
// })
