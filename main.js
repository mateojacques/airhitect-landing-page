//TOGGLE HEADER MENU VISIBILITY
const menuBtn = document.querySelector('.header__menu-btn')
const menu = document.querySelector('.header__menu-items')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show')
  setTimeout(() => {
    menu.classList.toggle('transition')
  }, 250)
})

//HANDLE PROJECT MODAL POPUP
const project = document.querySelector('.projects__info')
const modal = document.querySelector('.projects__modal')
const modalBox = document.querySelector('.modal__box')
const modalCloseBtn = document.querySelector('.modal__close')
const modalLeftArrow = document.querySelector('.modal__left-arrow')
const modalRightArrow = document.querySelector('.modal__right-arrow')

project.addEventListener('click', () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    modal.style.display = 'block'
  }
})

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

modalBox.addEventListener('mouseover', () => {
  modalRightArrow.style.opacity = 1
  modalLeftArrow.style.opacity = 1
})

modalBox.addEventListener('mouseout', () => {
  modalRightArrow.style.opacity = 0
  modalLeftArrow.style.opacity = 0
})

window.addEventListener('resize', () => {
  if (window.matchMedia('(max-width: 1020px)').matches) {
    modal.style.display = 'none'
  }
})
