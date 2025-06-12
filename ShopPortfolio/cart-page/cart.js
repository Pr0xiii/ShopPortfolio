let cartList = [];
const listp = document.getElementById('list');

function addItem(item) {
    cartList.append(item);
    listp.innerHTML = cartList;
    // refreshCart();
}

function createItem(item) {
    //Function pour créer le visuel
    var divElement = document.createElement("div");
    divElement.id = "item";
    var itemImage = document.createElement("img");
    itemImage.id = "itemImage";
    itemImage.src = item.item_image;
    itemImage.alt = "item";
    var itemName = document.createElement("h1");
    itemName.id = "itemName";
    itemName.innerHTML = item.item_name;
    var itemPrice = document.createElement("h1");
    itemPrice.id = "itemPrice";
    itemPrice.innerHTML = item.item_price;
    var itemButton = document.createElement("button");
    itemButton.id = "itemButton";
    itemButton.addEventListener("click", removeItem);
}

function refreshCart() {
    cartList.forEach((element) => {
        createItem(element);
    });
}

function removeItem() {
    removeFromCart();
    refreshCart();
}

export { addItem };