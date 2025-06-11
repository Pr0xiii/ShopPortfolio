const cartNav = document.getElementById('cart-nav');
const cartButton = document.querySelectorAll('button');

function addToCart(event) {
    cartNav.innerHTML = parseInt(cartNav.innerHTML) + 1;
}

cartButton.forEach(element => {
    element.addEventListener("click", addToCart);
});