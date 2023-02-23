//create header
createheaderStart.append(createHeader());

let cart = document.querySelector(".shopping-cart-inv");
let  cartCount = document.querySelector(".mini-cart-count span");
let  cartTotal = document.querySelector(".mini-cart-total span");

/// create link-phone on mobile and open menu
let linkphone = document.querySelector(".links-phone");
    linkphone.append(linkPhone())
let menu = document.querySelector(".menu-bar");
let linkPhones = document.querySelector(".links-phone");
    menu.addEventListener("click", openMenu);

let legoInCart = (localStorage.getItem("legoInCart")) ?
               JSON.parse(localStorage.getItem("legoInCart")) :
               [];
               createMiniCartItemsInStart(legoInCart);

let cartItems = document.querySelector(".all-products-cart");

legoInCart.forEach(element => {   
    cartItems.append(createCartElement(element)); 
});

const descriptionImg = document.querySelectorAll("img");

descriptionImg.forEach(element => {
    localStorage.removeItem('descriptionCart');  
    element.addEventListener("click", function() {description(element.getAttribute("src")) }) 
});

let descriptionCart = (localStorage.getItem("descriptionCart")) ?
            JSON.parse(localStorage.getItem("descriptionCart")) :
[];

//footer
onFooter.append(createFooter());



