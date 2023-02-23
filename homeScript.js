createheaderStart.append(createHeader());
let cart = document.querySelector(".shopping-cart-inv");
let cartCount = document.querySelector(".mini-cart-count span");
let cartTotal = document.querySelector(".mini-cart-total span");
let linkphone = document.querySelector(".links-phone");
linkphone.append(linkPhone())

//// slide the top present
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
/////////////////////////////////////////////
//// remove present 
let quit = document.querySelector(".remove-quit");
quit.addEventListener("click", removePresent)

function removePresent() {
  let parent = quit.closest(".slideshow-present");
  parent.remove()
}
/////////////////////////////////////////////
//// link phone open and close
let menu = document.querySelector(".menu-bar");
let linkPhones = document.querySelector(".links-phone");
menu.addEventListener("click", openMenu);

/////////////////////////////////////////////
//function for the home img roullete
let slideImg = document.querySelector(".slide-img");
let allImg = document.querySelectorAll(".slide-img img");

let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");

let counter = 1;
let size = allImg[0].clientWidth;

slideImg.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener("click", () => {
  size = allImg[0].clientWidth;
  if (counter >= allImg.length - 1) return;
  slideImg.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideImg.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener("click", () => {
  size = allImg[0].clientWidth;
  if (counter <= 0) return;
  slideImg.style.transition = "transform 0.4s ease-in-out"
  counter--;
  slideImg.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slideImg.addEventListener('transitionend', () => {

  if (allImg[counter].id === "firstClone") {
    slideImg.style, transition = "none";
    counter = allImg.length - counter;
    slideImg.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

legoFirst.forEach(function (item) {
  firstProduct.append(createProductElement(item));
})

legoSecond.forEach(function (item) {
  secondProduct.append(createProductElement(item));
})

legothird.forEach(function (item) {
  thirdProduct.append(createProductElement(item));
})

categoriesOfLego.forEach(function (item) {
  categories.append(createCategoriesElement(item));
})

let legoInfavourite = (localStorage.getItem("legoInfavourite")) ?
  JSON.parse(localStorage.getItem("legoInfavourite")) : [];

let legoInCart = (localStorage.getItem("legoInCart")) ?
  JSON.parse(localStorage.getItem("legoInCart")) : [];

createMiniCartItemsInStart(legoInCart);
// favorite
let sectorCategories = document.querySelectorAll(".sector a")

sectorCategories.forEach(item => {
  item.addEventListener("click", function () {
    filterByCategories(item, event)
  })
});
//description
const descriptionImg = document.querySelectorAll(".info");

descriptionImg.forEach(element => {
  localStorage.removeItem('descriptionCart');
  element.addEventListener("click", function () {
    description(element.getAttribute("src"))
  })
});

let descriptionCart = (localStorage.getItem("descriptionCart")) ?
  JSON.parse(localStorage.getItem("descriptionCart")) : [];

// footer 
onFooter.append(createFooter());

