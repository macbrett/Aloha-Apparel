/**
 * Created by brettmacdonald on 2016-10-06.
 */

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Thanks for subscribing
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Thanks for subscribing
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Thanks for subscribing
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

window.onload=function() {
    document.getElementById('formId').onsubmit=function() {
        /* do what you want with the form */

        // Should be triggered on form submit
        alert('Thanks for Subscribing');
        // You must return false to prevent the default form behavior
        return false;
    }
}

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Shopping Cart
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Shopping Cart
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Shopping Cart
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



var cart = []
var Item = function(name,price,count){
    this.name = name
    this.price = price
    this.count = count
}

//add item to cart

 function addItemToCart(name,price,count){
     for (var i in cart){
         if (cart[i].name === name){
             cart[i].count+=count
             return;
         }
     }
     var item = new Item(name, price,count);
    cart.push(item)
     saveCart();
}






function countCart(){
    var totalCount=0
for (var i in cart){
totalCount += cart[i].count
}
return totalCount;
}




function totalCart(){
var totalCost = 0;
    for(var i in cart){
        totalCost += cart[i].price
    }
    return totalCost;
}



function listCart(){
    var cartCopy=[];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {}
        for (var prop in item) {
            itemCopy[prop] = item[prop];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

function removeItemFromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count--;
            if (cart[i].count === 0) {
                cart.splice(i, 1)
            }
            break;
        }
    }
};
function saveCart(){
    /*localStorage.setItem('shoppingCart', JSON.stringify(cart))*/
}

function loadCart() {
    /*cart = JSON.parse(localStorage.getItem("shoppingCart"))*/
}
loadCart();

var array = listCart();
console.log(array)

function displayCart(){
    var cartArray = listCart();
    output = ""
    for (var i in cartArray){
        output += "<li>" + cartArray[i].name+" "+cartArray[i].count + "</li>"
    }


}






/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
SMOOTH SCROLL
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*! http://mths.be/smoothscroll v1.5.2 by @mathias */
