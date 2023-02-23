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

categoriesOfLego.forEach(function (item) {
  categories.append(createCategoriesElement(item));
})

let sectorCategories = document.querySelectorAll(".sector a")

sectorCategories.forEach(item => {
  item.addEventListener("click", function () {
    filterByCategories(item, event)
  })
});


filteredlegoArray = (localStorage.getItem("categories")) ?
  JSON.parse(localStorage.getItem("categories")) : [];

createCategoriesItemsInStart(filteredlegoArray);

let legoInfavourite = (localStorage.getItem("legoInfavourite")) ?
  JSON.parse(localStorage.getItem("legoInfavourite")) : [];

//  createMinifavoriteItem(legoInfavourite);
let legoInCart = (localStorage.getItem("legoInCart")) ?
  JSON.parse(localStorage.getItem("legoInCart")) : [];

createMiniCartItemsInStart(legoInCart);
const descriptionImg = document.querySelectorAll(".info");

descriptionImg.forEach(element => {
  localStorage.removeItem('descriptionCart');
  element.addEventListener("click", function () {
    description(element.getAttribute("src"))
  })
});

let descriptionCart = (localStorage.getItem("descriptionCart")) ?
  JSON.parse(localStorage.getItem("descriptionCart")) : [];

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