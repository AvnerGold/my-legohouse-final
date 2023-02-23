createheaderStart.append(createHeader());
let cart = document.querySelector(".shopping-cart-inv");
let cartCount = document.querySelector(".mini-cart-count span");
let cartTotal = document.querySelector(".mini-cart-total span");
/// open links phone and click
let linkphone = document.querySelector(".links-phone");
linkphone.append(linkPhone())
let menu = document.querySelector(".menu-bar");
let linkPhones = document.querySelector(".links-phone");
menu.addEventListener("click", openMenu);

let legoInCart = (localStorage.getItem("legoInCart")) ?
    JSON.parse(localStorage.getItem("legoInCart")) : [];
createMiniCartItemsInStart(legoInCart);

let cartItems = document.querySelector(".all-products-cart-descrip");

let descriptionCart = (localStorage.getItem("descriptionCart")) ?
    JSON.parse(localStorage.getItem("descriptionCart")) : [];
cartItems.append(creatDescriptionItem(descriptionCart));

onFooter.append(createFooter());