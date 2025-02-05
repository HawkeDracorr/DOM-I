const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainImg = document.getElementById("middle-img")
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// Nav items
let navItem = document.querySelectorAll('.container a')
navItem[0].innerHTML = siteContent['nav']['nav-item-1']
navItem[1].innerHTML = siteContent['nav']['nav-item-2']
navItem[2].innerHTML = siteContent['nav']['nav-item-3']
navItem[3].innerHTML = siteContent['nav']['nav-item-4']
navItem[4].innerHTML = siteContent['nav']['nav-item-5']
navItem[5].innerHTML = siteContent['nav']['nav-item-6']

let navNode = document.createElement('a')
let navNode2 = document.createElement('a')
let newLink = document.createTextNode('Buy Fruit')
let newLink2 = document.createTextNode('Declare Said Fruit')
navNode.appendChild(newLink)
navNode2.appendChild(newLink2)

document.querySelector('nav').appendChild(navNode);
document.querySelector('nav').appendChild(navNode2);

navItem.forEach(function(element) {
  element.style.color = 'green'
});


let btn = document.querySelector(".cta button");
btn.innerHTML = siteContent["cta"]["button"];

let subheader = document.querySelector(".cta h1");
subheader.innerHTML = siteContent["cta"]["h1"];

let mainSubTitle = document.querySelectorAll(".main-content h4");
let mainPara = document.querySelectorAll(".main-content p");

mainSubTitle[0].innerHTML = siteContent["main-content"]["features-h4"]
mainSubTitle[1].innerHTML = siteContent["main-content"]["about-h4"]
mainSubTitle[2].innerHTML = siteContent["main-content"]["services-h4"]
mainSubTitle[3].innerHTML = siteContent["main-content"]["product-h4"]
mainSubTitle[4].innerHTML = siteContent["main-content"]["vision-h4"]

mainPara[0].innerHTML = siteContent['main-content']['features-content']
mainPara[1].innerHTML = siteContent['main-content']['about-content']
mainPara[2].innerHTML = siteContent['main-content']['services-content']
mainPara[3].innerHTML = siteContent['main-content']['product-content']
mainPara[4].innerHTML = siteContent['main-content']['vision-content']

// Contact Section

// contact Heading
let contactHeading = document.querySelector('.contact h4')
contactHeading.innerHTML = siteContent['contact']['contact-h4']

// contact Info
let contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].innerHTML = siteContent['contact']['address']
contactInfo[1].innerHTML = siteContent['contact']['phone']
contactInfo[2].innerHTML = siteContent['contact']['email']

// footer
let footer =document.querySelector('footer')
footer.innerHTML = siteContent['footer']['copyright']




// awoo
