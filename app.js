const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconCartMenu = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

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