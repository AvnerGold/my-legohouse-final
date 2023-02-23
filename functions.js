// create element in start at home page
function createProductElement(item) {
    let {
        sku,
        image,
        name,
        price
    } = item;

    let box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = ` 
    <a href="description.html"><img class="info" src= "${image}"></a>     
    <div class="name-price">
        <p>${name} $${price}</p>
    </div>
    <img class="rating" src="images/Rating.jpg">
   
    <div class="add-favourite">
        <button data-sku="${sku}" class="button-favourite"><i class="fa fa-heart-o" data-sku="${sku}" aria-hidden="true"></i> </button>
    </div>
    <div class="add">
        <button data-sku="${sku}" class="button-add">Add To Cart</button>
        </div>`
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

    let addToCartButton = box.querySelector(".button-add");
    addToCartButton.addEventListener("click", onAddToCartClick);

    let addToCartfavorite = box.querySelector(".button-favourite");
    addToCartfavorite.addEventListener("click", createLocalStorage);
    return box;
}

//create favourite element in start  
function createfavouriteElement(item) {
    let {
        sku,
        image,
        name,
        price
    } = item;

    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `   
    <a href="description.html"><img class="info" src= "${image}"></a>     
    <div class="name-price">
        <p>${name} $${price}</p>       
        <button data-sku="${sku}" class="button-remove"><i class="fa fa-times" data-sku="${sku}" aria-hidden="true"></i> </button>        
    </div>
   
    <div class="add">
        <button data-sku="${sku}" class="button-add">Add To Cart</button>
    </div>`

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

    let addToCartButton = box.querySelector(".button-add");
    addToCartButton.addEventListener("click", onAddToCartClick);

    let removeFromFavouritesButton = box.querySelector(".name-price .button-remove");
    removeFromFavouritesButton.addEventListener("click", function () {

        let indexLegoInCart = legoInfavourite.findIndex(function (item) {
            return item.sku == sku
        })

        if (indexLegoInCart != -1) {
            legoInfavourite.splice(indexLegoInCart, 1)
        }
        box.remove();
        localStorage.setItem("legoInfavourite", JSON.stringify(legoInfavourite));
    });
    return box;
}

// create local storage for the favourite add to cart
function createLocalStorage(event) {
    let button = event.target;
    let productDiv = button.closest(".box");
    let {
        sku
    } = button.dataset;

    let currentProduct = allLego.find(function (item) {
        return item.sku == sku
    });

    let indexLegoInCart = legoInfavourite.findIndex(function (item) {
        return item.sku == sku
    })

    if (indexLegoInCart != -1) {} else {
        legoInfavourite.push({
            sku: sku,
            image: currentProduct.image,
            name: currentProduct.name,
            price: currentProduct.price

        });
    }
    localStorage.setItem("legoInfavourite", JSON.stringify(legoInfavourite));
}

// create mini cart element on start
function createMiniCartItem(product, quantity) {
    let {
        sku,
        image,
        name,
        price
    } = product;

    // יצירה של אלמנט בתוך עגלת הקניות הדינמית (מיני קארט)

    let add = document.createElement("div");
    add.classList.add("in-cart");
    add.classList.add(`cart-item-${sku}`);
    add.innerHTML = ` <div class="image">
    <a href="description.html"><img class="info" src= "${image}" width="40"></a>     
           </div>
           <div class="details">
                <span> Title: ${name}</span>
                <span> Price: ${price}</span>
                Quantity: <span class="quantity"> ${quantity}</span>
               <button class ="remove-product">Remove</button>
           </div>`
    cartCount.innerHTML = +cartCount.innerHTML + +quantity;
    cartTotal.innerHTML = +cartTotal.innerHTML + (add.querySelector(".quantity").innerHTML * +price);

    // מחיקה של פריט מתוך הסל
    add.querySelector(".remove-product").addEventListener("click", function () {
        add.remove();
        cartCount.innerHTML = +cartCount.innerHTML - add.querySelector(".quantity").innerHTML;
        cartTotal.innerHTML = +cartTotal.innerHTML - +(add.querySelector(".quantity").innerHTML * +price);

        let indexLegoInCart = legoInCart.findIndex(function (item) {
            return item.sku == sku
        })

        if (indexLegoInCart != -1) {
            legoInCart.splice(indexLegoInCart, 1)
            localStorage.setItem("legoInCart", JSON.stringify(legoInCart));
        }
    })
    return add;
}

//on click  add to cart and local storage update
function onAddToCartClick(event) {
    let button = event.target;
    let productDiv = button.closest(".box");
    let quantity = 1;

    let {
        sku
    } = button.dataset;

    let currentProduct = allLego.find(function (item) {

        return item.sku == sku
    });

    let miniCartItems = document.querySelector(".shopping-cart-inv");
    let existSku = miniCartItems.querySelector(`.cart-item-${sku}`);

    if (existSku) {
        existSku.querySelector(".quantity").innerHTML = +existSku.querySelector(".quantity").innerHTML + +quantity;
        cartCount.innerHTML = +cartCount.innerHTML + +quantity;
        cartTotal.innerHTML = +cartTotal.innerHTML + +currentProduct.price;
    } else {
        miniCartItems.append(createMiniCartItem(currentProduct, quantity));
    }

    let indexLegoInCart = legoInCart.findIndex(function (item) {
        return item.sku == sku
    })

    if (indexLegoInCart != -1) {
        legoInCart[indexLegoInCart].quantity = +legoInCart[indexLegoInCart].quantity + +quantity;
    } else {
        legoInCart.push({
            sku: sku,
            quantity: quantity
        });
    }
    localStorage.setItem("legoInCart", JSON.stringify(legoInCart));
}

//find in local storage and activate function to create mini cart items
function createMiniCartItemsInStart(legoInCart) {
    // בדיקה אם יש מוצרים במערכך של הדפדפן
    if (legoInCart.length) {
        let miniCartItems = document.querySelector(".shopping-cart-inv");
        legoInCart.forEach(function (item) {
            // חילוץ של מקט וכמות
            let {
                sku,
                quantity
            } = item;

            // חיפוש במערך המקורי של מוצרים
            let product = allLego.find(function (product) {
                return product.sku == sku
            })
            // הוספה לסל בזמן טעינה של העמוד
            miniCartItems.append(createMiniCartItem(product, quantity));
        })
    }
}

// create categories element in start
function createCategoriesElement(item) {
    let {
        image,
        name,
    } = item;

    let box = document.createElement("div");
    box.classList.add("sector");
    box.innerHTML = ` 
    <img src=${image}>
            <a href="categories.html">${name}</a>
       `
    return box;
}

//find in local storage favourite items and activat function to create element in start
function createCategoriesItemsInStart(categories) {
    // בדיקה אם יש מוצרים במערכך של הדפדפן
    if (categories.length) {
        let miniCartItems = document.querySelector(".all-products .container");

        categories.forEach(function (item) {
            // חילוץ של מקט וכמות
            let {
                sku,
                quantity
            } = item;

            // חיפוש במערך המקורי של מוצרים
            let product = allLego.find(function (product) {
                return product.sku == sku
            })
            // הוספה לסל בזמן טעינה של העמוד
            miniCartItems.append(createProductElement(product));
        })

    }
}

// on click find the categorie and create element of this categorie
function filterByCategories(item) {
    let filteredlegoArray = allLego.filter(product => product.categorie == item.innerHTML);
    console.log(item.innerHTML);
    localStorage.setItem("categories", JSON.stringify(filteredlegoArray));
}

// the final buy when you finish the purchase
function createCartElement(item) {
    let {
        sku,
        quantity
    } = item;

    let currentProduct = allLego.find(function (product) {
        return product.sku == sku
    })
    let {
        image,
        name,
        price
    } = currentProduct;

    let box = document.createElement("div");
    box.classList.add("box");
    box.classList.add(`box-${sku}`);
    box.innerHTML = `   
    <a href="description.html"><img class="info" src= "${image}"></a>     
    <div class="name-price">
        <p>${name} $${price}</p>
    </div>
    <div class="amount">${quantity} </div>
   
    <div class="inc-dec">
        <button data-sku="${sku}" class="button-plus"> <i class="fa fa-plus" data-sku="${sku}" aria-hidden="true"></i>  </button>       
        <button data-sku="${sku}" class="button-minus" ><i class="fa fa-minus" data-sku="${sku}" aria-hidden="true"></i></button>            
    </div>
        `
    let addToCartButton = box.querySelector(".button-plus");
    let subToCartButton = box.querySelector(".button-minus");

    addToCartButton.addEventListener("click", add)
    subToCartButton.addEventListener("click", sub)

    let removeProductFromBoth = document.querySelector(".remove-product")

    removeProductFromBoth.addEventListener("click", function () {
        removeFromCart(addToCartButton)
    });
    return box;
}

// the final buy when you finish the purchase
function removeFromCart(item) {
    document.querySelector(".all-products-cart").innerHTML = "";
    legoInCart.forEach(element => {
        cartItems.append(createCartElement(element));
    });
}

// the final buy when you finish the purchase add
function add() {
    let button = event.target;
    let productDiv = button.closest(".box");
    let quantity = 1;
    let {
        sku
    } = button.dataset;


    let currentProduct = allLego.find(function (item) {
        return item.sku == sku
    });

    let miniCartItems = document.querySelector(".shopping-cart-inv");
    let existSku = miniCartItems.querySelector(`.cart-item-${sku}`);
    if (existSku) {
        existSku.querySelector(".quantity").innerHTML = +existSku.querySelector(".quantity").innerHTML + +quantity;
        cartCount.innerHTML = +cartCount.innerHTML + +quantity;
        cartTotal.innerHTML = +cartTotal.innerHTML + +currentProduct.price;
    } else {
        miniCartItems.append(createMiniCartItem(currentProduct, quantity));
    }

    let indexLegoInCart = legoInCart.findIndex(function (item) {
        return item.sku == sku
    })

    if (indexLegoInCart != -1) {
        legoInCart[indexLegoInCart].quantity = +legoInCart[indexLegoInCart].quantity + +quantity;
    } else {
        legoInCart.push({
            sku: sku,
            quantity: quantity
        });
    }

    if (legoInCart[indexLegoInCart] == null) {
        productDiv.querySelector(".amount").innerHTML = 1;
    } else {
        productDiv.querySelector(".amount").innerHTML = +productDiv.querySelector(".amount").innerHTML + +quantity;
    }
    localStorage.setItem("legoInCart", JSON.stringify(legoInCart));
}

// the final buy when you finish the purchase sub
function sub() {
    let button = event.target;
    let productDiv = button.closest(".box");
    let quantity = 1;
    let {
        sku
    } = button.dataset;

    let currentProduct = allLego.find(function (item) {
        return item.sku == sku
    });

    let miniCartItems = document.querySelector(".shopping-cart-inv");
    let existSku = miniCartItems.querySelector(`.cart-item-${sku}`);
    let indexLegoInCart = legoInCart.findIndex(function (item) {
        return item.sku == sku
    })

    if (existSku) {
        existSku.querySelector(".quantity").innerHTML = +existSku.querySelector(".quantity").innerHTML + -quantity;
        if (existSku.querySelector(".quantity").innerHTML == 0) {
            legoInCart.splice(indexLegoInCart, 1)
            localStorage.setItem("legoInCart", JSON.stringify(legoInCart));
            existSku.remove();
            document.querySelector(".all-products-cart").innerHTML = "";
            legoInCart.forEach(element => {
                cartItems.append(createCartElement(element));
            });
        }
        cartCount.innerHTML = +cartCount.innerHTML + -quantity;
        cartTotal.innerHTML = +cartTotal.innerHTML + -currentProduct.price;
    } else {}

    if (indexLegoInCart != -1 && legoInCart[indexLegoInCart] != null) {
        productDiv.querySelector(".amount").innerHTML = +productDiv.querySelector(".amount").innerHTML - 1;
        legoInCart[indexLegoInCart].quantity = +legoInCart[indexLegoInCart].quantity + -quantity;
    }
    localStorage.setItem("legoInCart", JSON.stringify(legoInCart));
}

//find in local storage the item and add in local storage
function description(currentimage) {
    let currentProduct = allLego.find(function (item) {
        return item.image == currentimage
    });

    let Productquantity = legoInCart.find(function (item) {
        return item.quantity == currentProduct.quantity
    });

    let {
        image,
        sku,
        name,
        categorie,
        price,
        descriptionData
    } = currentProduct;

    descriptionCart.push({
        image: image,
        sku: sku,
        name: name,
        categorie: categorie,
        price: price,
        description: descriptionData
    });
    localStorage.setItem("descriptionCart", JSON.stringify(descriptionCart));
}


//create the description item from the local storage of the item description
function creatDescriptionItem(item) {
    let currentProduct = item[0];
    let {
        image,
        sku,
        name,
        categorie,
        price,
        description
    } = currentProduct;
    let quantity = 0;
    let miniCartItems = document.querySelector(".shopping-cart-inv");
    let existSku = miniCartItems.querySelector(`.cart-item-${sku}`);
    if (existSku == null) {
        quantity = 1;
    } else {
        quantity = existSku.querySelector(".quantity").innerHTML;
    }

    let box = document.createElement("div");
    box.classList.add("box");
    box.classList.add(`box-${sku}`);
    box.innerHTML = `   
    <a href="description.html"><img class="info" src= "${image}"></a>     
    <div class="name-price">
        <p>${name} $${price}</p>
    </div>
    <div class="amount"> ${quantity}</div>
   
    <div class="inc-dec">
        <button data-sku="${sku}" class="button-plus"> <i class="fa fa-plus" data-sku="${sku}" aria-hidden="true"></i>  </button>       
        <button data-sku="${sku}" class="button-minus" ><i class="fa fa-minus" data-sku="${sku}" aria-hidden="true"></i></button>            
    </div> `
    document.querySelector(".descriptionDetail").innerHTML = description;
    document.querySelector(".title h2").innerHTML = name;
    let addToCartButton = box.querySelector(".button-plus");
    let subToCartButton = box.querySelector(".button-minus");
    let removeProductFromBoth = document.querySelector(".remove-product")

    addToCartButton.addEventListener("click", add)
    subToCartButton.addEventListener("click", subInDescription)

    if (removeProductFromBoth != null) {
        removeProductFromBoth.addEventListener("click", function () {
            removeFromCart(addToCartButton)
        });
    }
    return box
}

// sub the quantity of description item and in mini cart item
function subInDescription() {
    let button = event.target;
    let productDiv = button.closest(".box");

    let {
        sku
    } = button.dataset;

    let currentProduct = allLego.find(function (item) {
        return item.sku == sku
    });

    let miniCartItems = document.querySelector(".shopping-cart-inv");
    let existSku = miniCartItems.querySelector(`.cart-item-${sku}`);
    let indexLegoInCart = legoInCart.findIndex(function (item) {
        return item.sku == sku
    })

    let thislego = legoInCart.find(function (item) {
        return item.sku == sku
    })

    let {
        quantity
    } = thislego;

    if (existSku) {
        existSku.querySelector(".quantity").innerHTML = +existSku.querySelector(".quantity").innerHTML + -1;
        if (existSku.querySelector(".quantity").innerHTML <= 0 || thislego.quantity <= 0) {
            legoInCart.splice(0, 1)
            localStorage.setItem("legoInCart", JSON.stringify(legoInCart));
            existSku.remove();
        }

        cartCount.innerHTML = +cartCount.innerHTML + -1;
        cartTotal.innerHTML = +cartTotal.innerHTML + -currentProduct.price;
    } else {
        let ifHiger = productDiv.querySelector(".amount");
        if (ifHiger > 0) {
            miniCartItems.append(createMiniCartItem(currentProduct, ifHiger));
        }
    }

    if (indexLegoInCart != -1) {
        if (legoInCart == null) {
            productDiv.querySelector(".amount").innerHTML = 0;
        } else {
            legoInCart[0].quantity = +legoInCart[0].quantity + -1;
            productDiv.querySelector(".amount").innerHTML = +existSku.querySelector(".quantity").innerHTML;
        }
    } else {
        legoInCart.push({
            sku: sku,
            quantity: quantity
        });
    }
    localStorage.setItem("legoInCart", JSON.stringify(legoInCart));
}

// create the footer for all pages
function createFooter() {
    let footer = document.createElement("div");
    footer.innerHTML = `  
     <div class="yellow-footer">
    <span>About</span>
    <span>Support</span>
    <span>Follow Us</span>
    <span class="subscribe">Subscribe To Us</span>
</div>

<div class="grey-footer">
    <div class="footer-logo">
        <img src="images/header logo.png" height="111px" width="111px">
    </div>
    <div class="bottom-a">
        <div class="about">
            <a href="#">Our company</a>
            <a href="#">Work With Us</a>
            <a href="#">Shops </a>
        </div>

        <div class="support">
            <a href="#">Contact us</a>
            <a href="#">Track Order</a>
            <a href="#">Missing parts </a>
        </div>

        <div class="icon-socials">
            <div class="socials-box">
                <a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>

            <div class="socials-box">
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>

            <div class="socials-box">
                <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
            </div>
        </div>

        <div class="maila">
            <input type="email" class="form-control" placeholder="Email address"
                aria-label="Email address for newsletter subscription" name="newsletterEmailAddress">
        </div>
    </div>
    <div class="mail">
        <input type="email" class="form-control" placeholder="Email address"
            aria-label="Email address for newsletter subscription" name="newsletterEmailAddress">
    </div>
    </div>
    `
    return footer;
}


//create header in start in all of the pages
function createHeader() {
    let box = document.createElement("div");
    box.classList.add("bar")
    box.innerHTML = ` <div class="left-header">
    <div class="logo">
        <div class="menu-bar">
            <span><i class="fa fa-bars" aria-hidden="true"></i></span>
        </div>
        <img src="images/header logo.png" height="111px" width="111px">
    </div>
    <a href="cart.html">shop</a>
    <a href="home.html">discover</a>
    <a href="home.html">help</a>
</div>

<div class="right-header">
    <a class="search"><i class="fa fa-search" aria-hidden="true"></i></a>
    <a href="favorites.html" class="likes"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
    <div class="favourite">
        
    </div>
    <a href="cart.html" class="shoping-cart"><i class="fa fa-shopping-basket" aria-hidden="true"></i></a>
    <div class="shopping-cart-inv">
        <div class="mini-cart-count">
            Total items: <span>0</span>
        </div>
        <div class="mini-cart-total">
            Total sum:  $<span>0</span>
        </div>
   
    </div>
</div>`
    return box;
}

//create links phone on all pages 
function linkPhone() {
    let box = document.createElement("div");
    box.innerHTML = ` <span><a href="home.html">Shop</a></span>
    <span><a href="categories.html">Categories</a></span>
    <span><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">About</a></span>
    <span class="desktop-none"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Account</a></span>`
    return box;
}

//open and close the menu of the links phone
function openMenu() {
    if (linkPhones.style.display === "none") {
        linkPhones.style.display = "block";
    } else {
        linkPhones.style.display = "none";
    }
}