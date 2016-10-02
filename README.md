
Synopsis

This partially completed website is part 1 of assignment 1 for Red Academy's Web Development Program.
This work was completed in 5 days and involved applying concepts learned over the week, such as html
using css to style, and media queries.

Code Example


This is a mobile first project and as such makes use of media queries:

@media all and (min-width:481px) and (max-width:600px) {
    .product {
        display: inline-block;
        text-align: center;
        width: 48%;

    }
    .product img {
        width: 100%;
    }
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


Motivation

The website is designed to quickly establish our html and css coding skills. A long week...
Installation


The site can be viewed at GitHub @ :



This was an individual project with plenty of contributions from classmates and teachers.


