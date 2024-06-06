const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const body = document.querySelector('body')

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu)
