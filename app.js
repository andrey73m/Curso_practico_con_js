const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconCartMenu = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')


const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle('inactive');
}

const toggleMobileMenu = () => {
  const isProductDetailClosed = productDetail.classList.contains('inactive');

  if(!isProductDetailClosed)
  productDetail.classList.add('inactive')

  mobileMenu.classList.toggle('inactive');
  
}

const toggleProductDetail = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if(!isMobileMenuClosed)
  mobileMenu.classList.add('inactive')

  productDetail.classList.toggle('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu)
iconMenu.addEventListener('click', toggleMobileMenu)
iconCartMenu.addEventListener('click', toggleProductDetail)