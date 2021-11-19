


  const toggle = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]


toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})








const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});