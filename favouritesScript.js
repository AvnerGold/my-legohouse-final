////////////////////create element header
createheaderStart.append(createHeader());
cart = document.querySelector(".shopping-cart-inv");
cartIn = document.querySelector(".shopping-cart-inv");
cartCount = document.querySelector(".mini-cart-count span");
cartTotal = document.querySelector(".mini-cart-total span");
///////////////////// create links
let linkphone = document.querySelector(".links-phone");
linkphone.append(linkPhone())
///////////////////// activate links
let menu = document.querySelector(".menu-bar");
let linkPhones = document.querySelector(".links-phone");
menu.addEventListener("click", openMenu);
//////////////////////
let favourite = document.querySelector(".all-products .container");
let legoInfavourite = (localStorage.getItem("legoInfavourite")) ?
  JSON.parse(localStorage.getItem("legoInfavourite")) : [];

legoInfavourite.forEach(element => {
  favourite.append(createfavouriteElement(element));
});
let legoInCart = (localStorage.getItem("legoInCart")) ?
  JSON.parse(localStorage.getItem("legoInCart")) : [];

createMiniCartItemsInStart(legoInCart);

// on click remove from storage and add new description
const descriptionImg = document.querySelectorAll("img");
descriptionImg.forEach(element => {
  localStorage.removeItem('descriptionCart');
  element.addEventListener("click", function () {
    description(element.getAttribute("src"))
  })
});

// create local storage for description
let descriptionCart = (localStorage.getItem("descriptionCart")) ?
  JSON.parse(localStorage.getItem("descriptionCart")) : [];
//create footer
onFooter.append(createFooter());

// pop up when buying
let buttonpop = document.querySelectorAll(".add .button-add");
let buyPop = document.querySelector(".pop");

buttonpop.forEach(function (item) {
  item.addEventListener("click", () => {
    buyPop.style.display = 'block';
    setTimeout(() => {
      buyPop.style.display = 'none';
    }, 2000);
  });
});