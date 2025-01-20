const hamburgerIcon = document.querySelector(".hamburger-icon")
const headerContainer = document.querySelector(".header-container")
const closeIcon = document.querySelector(".close-icon")
const section = document.querySelector("main")

hamburgerIcon.addEventListener('click', () =>{
    headerContainer.classList.add('menu-open')
})
closeIcon.addEventListener('click', () =>{
    headerContainer.classList.remove('menu-open')
})

section.addEventListener('click', () =>{
    headerContainer.classList.remove('menu-open')
})

