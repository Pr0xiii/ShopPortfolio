let cartList = JSON.parse(localStorage.getItem("cart")) || [];

var container = document.getElementById('items-container');
var cartNumber = document.getElementById('cart-nav');
var totalPrice = document.getElementById('order-price'); 


function removeItem(item) {
    if(cartList.includes(item)) {
        var index = cartList.indexOf(item);
        console.log(document.getElementById(item.item_id));
        container.removeChild(document.getElementById(item.item_id));
        cartList.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartList));
        refreshUI();
    }
}

function createItem(item) {
    var container = document.getElementById('items-container');
    
    if (!container) return;

    console.log("."+item.item_src);

    var divItem = document.createElement('div');
    divItem.id = item.item_id;
    divItem.className = "item";
    
    var itemImage = document.createElement('img');
    itemImage.src = "."+item.item_src;
    
    var itemName = document.createElement("h2");
    itemName.textContent = item.item_name + " X " + item.count;
    itemName.className = "name";
    
    var itemPrice = document.createElement("h2");
    itemPrice.textContent = item.item_price + "$"
    itemPrice.className = "price";
    
    var itemButton = document.createElement("BUTTON");
    itemButton.textContent = "Remove all";
    itemButton.addEventListener("click", () => removeItem(item));
    
    divItem.appendChild(itemImage);
    divItem.appendChild(itemName);
    divItem.appendChild(itemPrice);
    divItem.appendChild(itemButton);
    
    container.appendChild(divItem);
}

function addItem(item) {
    let cartList = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cartList.find(el => el.item_id === item.item_id);

    if (existingItem) {
        existingItem.count = (existingItem.count || 1) + 1;
    } else {
        item.count = 1;
        cartList.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cartList));
}

function loadItems() {
    cartList.forEach((element) => createItem(element));
    refreshUI();
}

function refreshUI() {
    if(!cartNumber || !totalPrice) return;
    let total = 0
    let totalCount = 0
    cartList.map((element) => {
        total += parseFloat(element.item_price) * element.count;
        totalCount += element.count;
    });
    cartNumber.innerHTML = totalCount;
    totalPrice.innerHTML = `Order Total Price : ${total.toFixed(2)}$`
}

document.body.onload = loadItems;
export { addItem, cartList };