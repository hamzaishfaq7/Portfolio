// THIS IS THE CODE TO MAKE THE TOGGLE WORK FOR SMALLER SCREENS/MOBILE SCREENS.


const toggle = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]


toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})




// THIS IS THE CODE TO CHANGE TO DARK MODE. STILL WORKING ON THIS PART OF THE SITE.



const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});