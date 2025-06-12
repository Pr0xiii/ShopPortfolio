 import { addItem, cartList } from "./cart-page/cart.js";

const cartNumber = document.getElementById('cart-nav');
const cartButton = document.querySelectorAll('button');

function addToCart(event) {
    const button = document.getElementById(event.target.id);
    let item = new Object();
    item.item_id = button.dataset.id;
    item.item_src = button.dataset.image;
    item.item_name = button.dataset.name;
    item.item_price = button.dataset.price;
    addItem(item);
    refreshUI();
}

function refreshUI() {
    let cartList = JSON.parse(localStorage.getItem("cart")) || [];
    let totalCount = 0
    cartList.map((element) => {
        totalCount += element.count;
    });
    cartNumber.innerHTML = totalCount;
}

cartButton.forEach(element => {
    element.addEventListener("click", addToCart);
});

document.body.onload = refreshUI;