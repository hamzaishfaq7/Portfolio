const toggle = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]


toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})