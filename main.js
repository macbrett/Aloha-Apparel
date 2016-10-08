/**
 * Created by brettmacdonald on 2016-10-06.
 */
window.onload=function() {
    document.getElementById('formId').onsubmit=function() {
        /* do what you want with the form */

        // Should be triggered on form submit
        alert('Thanks for Subscribing');
        // You must return false to prevent the default form behavior
        return false;
    }
}

function revealCart(){
    alert("hello world")
}


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
}

addItemToCart("Stretched Knit Dress", 169.00, 1)
addItemToCart("Cotton Blue Shirt", 89.00, 1)
addItemToCart("Checked Stretch Dress", 129.00, 1)
addItemToCart("Blue Hipster Backpack", 69.00, 1)
addItemToCart("Blue Hipster Backpack", 69.00, 1)

console.log(cart[3])
console.log(cart.length)


function countCart(){
    var totalCount=0
for (var i in cart){
totalCount += cart[i].count
}
return totalCount;
}



console.log(countCart())

//countCart() total amount of items

function totalCart(){
var totalCost = 0;
    for(var i in cart){
        totalCost += cart[i].price
    }
    return totalCost;
}

console.log(totalCart())
//listCart() array of Item

//saveCart()

//loadCart()

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
SMOOTH SCROLL
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*! http://mths.be/smoothscroll v1.5.2 by @mathias */
