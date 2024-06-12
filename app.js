const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconCartMenu = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')


const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle('inactive');
}

const toggleMobileMenu = () => {
  const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

  if(!isProductDetailClosed)
  shoppingCartContainer.classList.add('inactive')

  closeProductDetailAside();
  mobileMenu.classList.toggle('inactive');
  
}

const toggleProductDetail = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if(!isProductDetailClosed)
    productDetailContainer.classList.add('inactive')

  if(!isMobileMenuClosed)
  mobileMenu.classList.add('inactive')

  shoppingCartContainer.classList.toggle('inactive')
}

const openProductDetailAside = () => {
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
}

const closeProductDetailAside = () => {
  productDetailContainer.classList.add('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu)
iconMenu.addEventListener('click', toggleMobileMenu)
iconCartMenu.addEventListener('click', toggleProductDetail)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

const productList = [];

productList.push({
  name: 'watch',
  price: 120,
  image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) 
productList.push({
  name: 'watch',
  price: 120,
  image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) 
productList.push({
  name: 'watch',
  price: 120,
  image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) 
productList.push({
  name: 'watch',
  price: 120,
  image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) 
productList.push({
  name: 'watch',
  price: 120,
  image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) 

const renderProducts = (arr) => {
  for (product of arr) {
    const productCard = document.createElement('div')
    const img = document.createElement('img')
    const productInfo = document.createElement('div')
    const productChar = document.createElement('div')
    const productPrice = document.createElement('p')
    const productName = document.createElement('p')
    const productInfoFigure = document.createElement('figure')
    const iconShoppingCart = document.createElement('img')
  
    productCard.classList.add('product-card')
    // If you have more than 1 element you can use append
    productCard.append(img, productInfo)
    img.setAttribute('src', product.image)

    img.addEventListener('click', openProductDetailAside)
  
    productInfo.classList.add('product-info')
    productInfo.append(productChar, productInfoFigure)
  
    productChar.append(productPrice, productName)
  
    productPrice.innerText = '$' + product.price
    productName.innerText = product.name
  
    iconShoppingCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    //appendChild when is just one element
    productInfoFigure.appendChild(iconShoppingCart)
  
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList)