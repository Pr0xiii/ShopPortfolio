let cartList = [];
let itemObj = {
    item_id: "123",
    item_name: "premier",
    item_price: "19.99$",
    item_src: "../img/item_img.png"
}
let itemObj2 = {
    item_id: "456",
    item_name: "second",
    item_price: "9.99$",
    item_src: "../img/item_img.png"
}



function createItem(item) {
    var divItem = document.createElement('div');
        divItem.id = item.item_id;

        var itemImage = document.createElement('img');
        itemImage.src = item.item_src;
        
        var itemName = document.createElement("h2");
        itemName.textContent = item.item_name;
        
        var itemPrice = document.createElement("h2");
        itemPrice.textContent = item.item_price
        
        var itemButton = document.createElement("BUTTON");
        itemButton.textContent = "Remove from cart";
        itemButton.addEventListener("click", function() {
            if(cartList.includes(item)) {
                var index = cartList.indexOf(item);
                document.body.removeChild(document.getElementById(item.item_id));
                cartList.splice(index);
            }
        });
        
        divItem.appendChild(itemImage);
        divItem.appendChild(itemName);
        divItem.appendChild(itemPrice);
        divItem.appendChild(itemButton);

        document.body.appendChild(divItem)
}

function addItem(item) {
    cartList.push(item);
    createItem(item);
}

addItem(itemObj);
addItem(itemObj2);