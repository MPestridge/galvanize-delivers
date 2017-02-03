"use strict"
$(document).ready(function(){
  $('.parallax').parallax();
});

// BURGER ITEM LISTENER //
 var burgerOrder = document.getElementById("order-burger");
 burgerOrder.addEventListener("click", function(){
   var table = document.getElementById("order-input");
   var row = table.insertRow(0);
   var item = row.insertCell(0);
   var price = row.insertCell(1);
   var itemText = document.getElementById("burger-name").innerHTML;
   var itemPrice = document.getElementById("burger-price").innerHTML;
   item.innerHTML = itemText;
   price.innerHTML = itemPrice;
   subtotalArr.push(Number(itemPrice.slice(1)));
 })

 // PIZZA ITEM LISTENER //
  var pizzaOrder = document.getElementById("order-pizza");
  pizzaOrder.addEventListener("click", function(){
    var table = document.getElementById("order-input");
    var row = table.insertRow(0);
    var item = row.insertCell(0);
    var price = row.insertCell(1);
    var itemText = document.getElementById("pizza-name").innerHTML;
    var itemPrice = document.getElementById("pizza-price").innerHTML;
    item.innerHTML = itemText;
    price.innerHTML = itemPrice;
    subtotalArr.push(Number(itemPrice.slice(1)));
  })

  // RIBS ITEM LISTENER //
   var ribsOrder = document.getElementById("order-ribs");
   ribsOrder.addEventListener("click", function(){
     var table = document.getElementById("order-input");
     var row = table.insertRow(0);
     var item = row.insertCell(0);
     var price = row.insertCell(1);
     var itemText = document.getElementById("ribs-name").innerHTML;
     var itemPrice = document.getElementById("ribs-price").innerHTML;
     item.innerHTML = itemText;
     price.innerHTML = itemPrice;
     subtotalArr.push(Number(itemPrice.slice(1)));
   })

   // DESSERT ITEM LISTENER //
    var dessertOrder = document.getElementById("order-dessert");
    dessertOrder.addEventListener("click", function(){
      var table = document.getElementById("order-input");
      var row = table.insertRow(0);
      var item = row.insertCell(0);
      var price = row.insertCell(1);
      var itemText = document.getElementById("dessert-name").innerHTML;
      var itemPrice = document.getElementById("dessert-price").innerHTML;
      item.innerHTML = itemText;
      price.innerHTML = itemPrice;
      subtotalArr.push(Number(itemPrice.slice(1)));
    })

// SUBTOTAL //
  var subtotalArr =[];
function updateSubtotal(arr) {
  var start=0;
  for (var i; i<arr.length; i++) {
    var newSubtotal = (start += arr[i]);
  }
}
var subtotalNum = updateSubtotal(subtotalArr);
var subtotalText = document.getElementById("subtotal");
subtotalText.innerHTML = String(subtotalNum);
console.log(subtotalNum)


// updateSubtotal(subtotalArr);
// console.log(updateSubtotal(subtotalArr));
// TAX //

// TOTAL //
