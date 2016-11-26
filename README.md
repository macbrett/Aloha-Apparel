
Synopsis

Aloha Apparel is an e-commerce site and part 2 of assignment 1 for Red Academy's Web Development Program.
This work was completed in 14 days and involved applying concepts learned over the week, such as html
using css to style, and media queries.

The following tasks were required for the site.

The use of flexbox to position containers and elements.
The use of relative and absolute poistioning for text 
Setting up a jQuery Slider called Flickity
Importing and rendering custom fonts
Using media queries to design a website using the Mobile First design principle


Code Example
 

 window.onload=function() {
     document.getElementById('formId').onsubmit=function() {
         var input = document.getElementById("your-email").value;
         if( input.length==0){
             alert("Please enter your email")
         }else{
             alert("Thanks for subscribing")
         }

    $('.addToCart').click(function(event) {
        event.preventDefault();
        var name = $(this).attr("data-name");
        var price = Number($(this).attr("data-price"));

        addItemToCart(name, price, 1);
        displayCart();
        totalCart();
    });


    function displayCart() {
        var cartArray = listCart();
        output = ""
        total = ""
        for (var i in cartArray) {
            output += "Your cart has " + cartArray[i].count + " unit(s) of " +
                    cartArray[i].name + " @" + cartArray[i].price + " each" + "...and..." + ""

        }
        console.log(output)
    }

This is a mobile first project and as such makes use of media queries:

@media all and (min-width:600px)  {
}

The project made use of font-face:

@font-face {
    font-family: "playfair_displayregular"; /*a name to be used later*/
    url("assets/fonts/playfairdisplay-regular-webfont.otf"); /*URL to font*/
}

The project makes use of combined inages and background grandients:

.hero-banner {

    background: linear-gradient( to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%),
    url("assets/images/banner-girl.png") no-repeat center,
    url("assets/images/flower-bkgd.jpg");


The website is designed to quickly establish our html and css coding skills. Part two
incorporates jquery and javascript.


Installation
 

The site can be viewed at GitHub @ :https://github.com/macbrett?tab=repositories

This was an individual project with plenty of contributions from classmates and teachers.



