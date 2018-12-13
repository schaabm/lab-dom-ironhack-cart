function stripStringToFloat(tmp){
  tmp = tmp.trim()
  tmp.replace('USD', '')
  console.log(tmp)
  return parseFloat(tmp)
}

function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  const products = document.querySelectorAll("article");
  products.forEach(item => {
    let price = item.children[1].innerText;
    price = stripStringToFloat(price)
    //console.log(price)
    let amount = item.children[2].children[1].value;
    let sum = price * amount
    console.log(sum)
  });
  
}




function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName("btn-delete");

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
