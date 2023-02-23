const firstProduct = document.querySelector(".products-first .container");
const secondProduct = document.querySelector(".products-second .container");
const thirdProduct = document.querySelector(".products-third .container");
const categories = document.querySelector(".Categories");
const createheaderStart = document.querySelector(".header")
const onFooter = document.querySelector(".footer");

let lorenIpsum = "<h2>Lorem Ipsum</h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let legoFirst = [
    
    {
        sku : 1,
        image : "images/hotel.png",
        name : "hotel",
        categorie : "houses",
        price : 40,
    },
    
    {
        sku : 2,
        image : "images/White house.jpg",
        name : "White house",
        categorie : "houses",
        price : 80,
    },
    
    {
        sku : 3,
        image : "images/singapore.jpg",
        name : "singapore",
        categorie : "Houses",
        price : 60,
        description: "dada",
    },

]

let legoSecond = [

    {
        sku : 4,
        image : "images/Darth-Vader Head.jpg",
        name : "Darth-Vader",
        categorie : "offers",
        price : 60,
    },
    
    {
        sku : 5,
        image : "images/liberty statue.jpg",
        name : "liberty statue",
        price : 120,
    },
    
    {
        sku : 6,
        image : "images/Camp Nou  FC Barcelona.jpg",
        name : "Camp Nou",
        price : 350,
    },
]


let legothird = [

    {
        sku : 8,
        image : "images/car2.jpg",
        name : "Formula E® Porsche 99X Electric",
        categorie : "Cars",
        price : 45,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 9,
        image : "images/car3.jpg",
        name : "THE BATMAN - BATMOBILE™",
        categorie : "Cars",
        price : 90,
        descriptionData: lorenIpsum,
    },

    {
        sku : 10,
        image : "images/car4.jpg",
        name : "Volkswagen T2 Camper Van",
        categorie : "Cars",
        price : 140,
        descriptionData: lorenIpsum,
    },
]

let allLego = [

    {
        sku : 1,
        image : "images/hotel.png",
        name : "hotel",
        categorie : "Houses",
        price : 40,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 2,
        image : "images/White house.jpg",
        name : "White house",
        categorie : "Houses",
        price : 80,
        descriptionData: "<h2>presidential housing</h2>Youre busy. It feels like youre always on the go. So when you do get some free time, you like to recharge your batteries by focusing on a fun, creative challenge. Thats what building The White House with LEGO® bricks is all about. <br>   Revel in the details      With this hands-on, minds-on craft project, youll recreate details from the neoclassical columns of the presidents Executive Residence and colonnades connecting the East and West Wings to the surrounding gardens and fountain. This LEGO Architecture White House model  can be divided into 3 sections for closer inspection and includes a LEGO brick inscribed The White House to complete an inspiring display piece. <br> LEGO sets for your lifestyle Escape the daily grind and click your stress away creating this stylish model that will look great in your home or office. Part of a collection of LEGO building sets for adults interested in art, design, architecture and pop culture, it makes the best gift for you or the hobbyist inyour life.", 
    },
    
    {
        sku : 3,
        image : "images/singapore.jpg",
        name : "singapore",
        categorie : "Houses",
        price : 60,
        descriptionData: " <h2>history of the skyline </h2>Be transported to one of the world’s most exciting cities as you build this LEGO® Architecture Skyline Collection model of Singapore (21057) – no passport required. Enjoy quality time recreating Marina Bay Sands, the OCBC Centre, One Raffles Place, Lau Pa Sat food market, The Fullerton Hotel Singapore and Supertree Grove at Gardens by the Bay. Add LEGO elements representing the Singapore River and trees to complete the biggest, most complex LEGO city skyline model to date. <br> Creative joy        Step-by-step instructions are included, so even if you are a LEGO newcomer you can relax and lose yourself in the creative process. Discover new techniques that allow you to attach the buildings to the base at angles to complete a striking display piece.",
    },

    {
        sku : 4,
        image : "images/Darth-Vader Head.jpg",
        name : "Darth-Vader",
        categorie : "SW",
        price : 60,
        descriptionData: "Immerse yourself in a challenging and rewarding building experience as your imagination transports you to GOTHAM CITY™ with the impressive LEGO® DC Batman™: Batman Cowl (76182). <br> Iconic Batman helmet to build and display <br> LEGO brick model-making kits        Escape the busy world for a while and rediscover the joy of creative construction with adult LEGO building sets. Satisfying to build and stunning to display, adult LEGO kits make great birthday gifts, Christmas presents and personal treats for anyone interested in model making or comic-book culture.       This LEGO brick recreation of the unmistakable cowl worn by the Caped Crusader™ is sure to attract attention and admiration wherever it is placed. With transparent bricks to represent the face and a stylish fact plaque attached to the sturdy base, this remarkable model will provide a sense of fulfilment long after the construction work has finished.",
    },
    
    {
        sku : 5,
        image : "images/liberty statue.jpg",
        name : "liberty statue",
        categorie : "Houses",
        price : 120,
        descriptionData: "<h2>statue of liberty </h2>Celebrate a monumental blend of architecture and sculpture with this LEGO® Architecture 21042 The Statue of Liberty set. America’s iconic symbol of freedom stands more than 305 feet above Liberty Island in New York harbor, welcoming seafarers from around the globe. This impressive LEGO interpretation faithfully reproduces the monument's harmonious blend of sculpture and architecture with its intricately detailed shield-lined pedestal, brick detailing and columned balconies. The beautifully crafted Lady Liberty statue features a flowing robe, broken shackles, 7-ray crown, iconic tablet and an upraised arm bearing a golden torch. Finished with an authentic sand-green and beige color scheme, and a decorative nameplate, this model delivers a highly satisfying building experience to all with an interest in architecture, travel, history and design, and makes a truly symbolic centerpiece for the home or office.",
    },
    
    {
        sku : 6,
        image : "images/Camp Nou  FC Barcelona.jpg",
        name : "Camp Nou",
        categorie : "Houses",
        price : 350,
        descriptionData: "FC Barcelona fans will love showing their passion for one of the world’s most celebrated soccer clubs with this rewarding building project. Build all the details of the mighty Camp Nou Stadium like the Lateral stand with its iconic ‘Més Que Un Club’ motto and the covered Tribuna stand, with press booths, plus the pitch itself. The model splits into 5 sections for access to each area. <br> Packed with details <br> Bring your passions to life        This set is part of a collection of LEGO buildable models for adults who appreciate elegant design. It offers a rewarding project or top gift for any FC Barcelona fan or collector of soccer memorabilia.        FC Barcelona fans know how to show their loyalty to their club and this stadium model does just the same! Use the LEGO® elements and sticker sheet to add realistic touches to your Camp Nou stadium model – like the Barça signs, Catalan flag and scoreboards. With a players’ tunnel, VIP entrance and team bus, there are plenty of details to spot.",
    },

    {
        sku : 7,
        image : "images/car1.jpg",
        name : "Ford Mustang Shelby® GT500®",
        categorie : "Cars",
        price : 45,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 8,
        image : "images/car2.jpg",
        name : "Formula E® Porsche 99X Electric",
        categorie : "Cars",
        price : 45,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 9,
        image : "images/car3.jpg",
        name : "THE BATMAN - BATMOBILE™",
        categorie : "Cars",
        price : 90,
        descriptionData: lorenIpsum,
    },

    {
        sku : 10,
        image : "images/car4.jpg",
        name : "Volkswagen T2 Camper Van",
        categorie : "Cars",
        price : 140,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 11,
        image : "images/car5.jpg",
        name : "Ghostbusters™ ECTO-1",
        categorie : "Cars",
        price : 175,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 12,
        image : "images/car6.jpg",
        name : "Porsche 911",
        categorie : "Cars",
        price : 125,
        descriptionData: lorenIpsum,
    },

    {
        sku : 13,
        image : "images/SW1.jpg",
        name : "Luke Skywalker’s Landspeeder™",
        categorie : "SW",
        price : 175,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 14,
        image : "images/SW2.jpg",
        name : "Inquisitor Transport Scythe™",
        categorie : "SW",
        price : 90,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 15,
        image : "images/SW3.jpg",
        name : "BD-1™",
        categorie : "SW",
        price : 90,
        descriptionData: lorenIpsum,
    },

    {
        sku : 16,
        image : "images/SW4.jpg",
        name : "Millennium Falcon™",
        categorie : "SW",
        price :700,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 17,
        image : "images/SW5.jpg",
        name : "Yoda™",
        categorie : "SW",
        price : 105,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 18,
        image : "images/SW6.jpg",
        name : "R2-D2™",
        categorie : "SW",
        price : 175,
        descriptionData: lorenIpsum,
    },

    {
        sku : 19,
        image : "images/SW7.jpg",
        name : "The Justifier™",
        categorie : "SW",
        price : 150,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 20,
        image : "images/SW8.jpg",
        name : "AT-TE™ Walker",
        categorie : "SW",
        price : 120,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 21,
        image : "images/SW9.jpg",
        name : "Boba Fett's Throne Room",
        categorie : "SW",
        price : 90,
        descriptionData: lorenIpsum,
    },

    {
        sku : 22,
        image : "images/SW10.jpg",
        name : "AT-AT™",
        categorie : "SW",
        price : 140,
        descriptionData: lorenIpsum,
    },
    
    {
        sku : 23,
        image : "images/New1.jpg",
        name : "Freight Train",
        categorie : "New",
        price : 160,
        descriptionData: lorenIpsum,
    },

    {
        sku : 24,
        image : "images/New2.jpg",
        name : "Optimus Prime",
        categorie : "New",
        price : 150,
        descriptionData: lorenIpsum,
    },

    {
        sku : 25,
        image : "images/New3.jpg",
        name : "Vincent van Gogh - The Starry Night",
        categorie : "New",
        price : 150,
        descriptionData: lorenIpsum,
    },

    {
        sku : 26,
        image : "images/New4.jpg",
        name : "The Heavenly Realms",
        categorie : "New",
        price : 150,
        descriptionData: lorenIpsum,
    },

    {
        sku : 27,
        image : "images/New5.jpg",
        name : "Lloyd’s Golden Ultra Dragon",
        categorie : "New",
        price : 125,
        descriptionData: lorenIpsum,
    },

    {
        sku : 28,
        image : "images/New6.jpg",
        name : "The Rolling Stones",
        categorie : "New",
        price : 130,
        descriptionData: lorenIpsum,
    },

    {
        sku : 29,
        image : "images/New7.jpg",
        name : "12 Grimmauld Place",
        categorie : "New",
        price : 115,
        descriptionData: lorenIpsum,
    },

    {
        sku : 30,
        image : "images/New8.jpg",
        name : "The Llama Village",
        categorie : "New",
        price : 115,
        descriptionData: lorenIpsum,
    },

    {
        sku : 31,
        image : "images/New9.jpg",
        name : "Andrea's Theatre School",
        categorie : "New",
        price : 90,
        descriptionData: lorenIpsum,
    },

    {
        sku : 32,
        image : "images/New10.jpg",
        name : "Viking Ship and the Midgard Serpent",
        categorie : "New",
        price : 105,
        descriptionData: lorenIpsum,
    },

    {
        sku : 33,
        image : "images/Offers1.jpg",
        name : "Robo HipHop Car",
        categorie : "Offers",
        price : 18,
        descriptionData: lorenIpsum,
    },

    {
        sku : 34,
        image : "images/Offers2.jpg",
        name : "Alien DJ BeatBox",
        categorie : "Offers",
        price : 13,
        descriptionData: lorenIpsum,
    },

    {
        sku : 35,
        image : "images/Offers3.jpg",
        name : "Belle Bottom, Kevin and Bob",
        categorie : "Offers",
        price : 11,
        descriptionData: lorenIpsum,
    },

    {
        sku : 36,
        image : "images/Offers4.jpg",
        name : "The Ice Castle",
        categorie : "Offers",
        price : 167,
        descriptionData: lorenIpsum,
    },

    {
        sku : 37,
        image : "images/Offers5.jpg",
        name : "adidas Originals Superstar",
        categorie : "Offers",
        price : 68,
        descriptionData: lorenIpsum,
    },

    {
        sku : 38,
        image : "images/Offers6.jpg",
        name : "Folk Fairy BeatBox",
        categorie : "Offers",
        price : 13,
        descriptionData: lorenIpsum,
    },

    {
        sku : 39,
        image : "images/Offers7.jpg",
        name : "The Boombox",
        categorie : "Offers",
        price : 63,
        descriptionData: lorenIpsum,
    },

    {
        sku : 40,
        image : "images/Offers8.jpg",
        name : "Cockatiel",
        categorie : "Offers",
        price : 8,
        descriptionData: lorenIpsum,
    },

    {
        sku : 41,
        image : "images/Offers9.jpg",
        name : "Punk Pirate Ship",
        categorie : "Offers",
        price : 42,
        descriptionData: lorenIpsum,
    },

    {
        sku : 42,
        image : "images/Offers10.jpg",
        name : "K-Pawp Concert",
        categorie : "Offers",
        price : 32,
        descriptionData: lorenIpsum,
    },

    {
        sku : 43,
        image : "images/Offers11.jpg",
        name : "First Order Stormtrooper™",
        categorie : "Offers",
        price : 9,
        descriptionData: lorenIpsum,
    },

    {
        sku : 44,
        image : "images/Offers12.jpg",
        name : "The Joker™",
        categorie : "Offers",
        price : 9,
        descriptionData: lorenIpsum,
    },

    {
        sku : 45,
        image : "images/Offers13.jpg",
        name : "Batman™",
        categorie : "Offers",
        price : 9,
        descriptionData: lorenIpsum,
    },

    {
        sku : 46,
        image : "images/Offers14.jpg",
        name : "Brick Sketches™ BB-8™",
        categorie : "Offers",
        price : 9,
        descriptionData: lorenIpsum,
    },

]


let categoriesOfLego = [

    {
        image : "images/bag.jpg",
        name : "Offers",      
    },
    
    {
        image : "images/lego.png",
        name : "New",
    },
    
    {
        image : "images/house.png",
        name : "Houses",
    },

    {
        sku : 4,
        image : "images/cars.jpg",
        name : "Cars",       
    },
    
    {
        sku : 5,
        image : "images/yas.jpg",
        name : "SW",
    },
    
]