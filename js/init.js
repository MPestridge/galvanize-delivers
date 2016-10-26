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
 })

 // PIZZA ITEM LISTENER //
  var burgerOrder = document.getElementById("order-pizza");
  burgerOrder.addEventListener("click", function(){
    var table = document.getElementById("order-input");
    var row = table.insertRow(0);
    var item = row.insertCell(0);
    var price = row.insertCell(1);
    var itemText = document.getElementById("pizza-name").innerHTML;
    var itemPrice = document.getElementById("pizza-price").innerHTML;
    item.innerHTML = itemText;
    price.innerHTML = itemPrice;
  })

  // RIBS ITEM LISTENER //
   var burgerOrder = document.getElementById("order-ribs");
   burgerOrder.addEventListener("click", function(){
     var table = document.getElementById("order-input");
     var row = table.insertRow(0);
     var item = row.insertCell(0);
     var price = row.insertCell(1);
     var itemText = document.getElementById("ribs-name").innerHTML;
     var itemPrice = document.getElementById("ribs-price").innerHTML;
     item.innerHTML = itemText;
     price.innerHTML = itemPrice;
   })

   // DESSERT ITEM LISTENER //
    var burgerOrder = document.getElementById("order-dessert");
    burgerOrder.addEventListener("click", function(){
      var table = document.getElementById("order-input");
      var row = table.insertRow(0);
      var item = row.insertCell(0);
      var price = row.insertCell(1);
      var itemText = document.getElementById("dessert-name").innerHTML;
      var itemPrice = document.getElementById("dessert-price").innerHTML;
      item.innerHTML = itemText;
      price.innerHTML = itemPrice;
    })
