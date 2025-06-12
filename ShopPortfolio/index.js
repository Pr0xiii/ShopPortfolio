import { addItem } from "./cart-page/cart.js";

const cartNav = document.getElementById('cart-nav');
const test = document.getElementById('test');
const cartButton = document.querySelectorAll('button');

function addToCart(event) {
    cartNav.innerHTML = parseInt(cartNav.innerHTML) + 1;
    const button = document.getElementById(event.target.id);
    let item = new Object();
    item.item_image = button.dataset.image;
    item.item_name = button.dataset.name;
    item.item_price = button.dataset.price;
    addItem(item);
}

function removeFromCart() {
    cartNav.innerHTML = parseInt(cartNav.innerHTML) - 1;
}

cartButton.forEach(element => {
    element.addEventListener("click", addToCart);
});