const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Images ***

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent.cta["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Nav links ***

let navLinks = document.querySelectorAll("nav a");
for (let i = 0; i < navLinks.length; i++) {
  // navLinks[i].textContent = siteContent.nav["nav-item-" + (i + 1)];
  navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// change color of nav links to green
navLinks.forEach(navlink => (navlink.style.color = "green"));

// CTA ***

// h1
let h1 = document.querySelector("h1");

let dom = document.createTextNode("DOM");
let is = document.createTextNode("IS");
let awesome = document.createTextNode("AWESOME");
let brElem = document.createElement("br");
let brElem2 = document.createElement("br");

h1.appendChild(dom);
h1.appendChild(brElem2);
h1.appendChild(is);
h1.appendChild(brElem);
h1.appendChild(awesome);

// Button
let btn = document.querySelector("button");
btn.textContent = "Get Started";

// Main Content ***

// Top Content
let titles = document.getElementsByTagName("h4");
let info = document.getElementsByTagName("p");

titles[0].textContent = siteContent["main-content"]["features-h4"];
info[0].textContent = siteContent["main-content"]["features-content"];
titles[1].textContent = siteContent["main-content"]["about-h4"];
info[1].textContent = siteContent["main-content"]["about-content"];

// Bottom Content
titles[2].textContent = siteContent["main-content"]["services-h4"];
info[2].textContent = siteContent["main-content"]["services-content"];
titles[3].textContent = siteContent["main-content"]["product-h4"];
info[3].textContent = siteContent["main-content"]["product-content"];
titles[4].textContent = siteContent["main-content"]["vision-h4"];
info[4].textContent = siteContent["main-content"]["vision-content"];

// Footer
titles[5].textContent = siteContent["contact"]["contact-h4"];
info[5].textContent = siteContent["contact"]["address"];
info[6].textContent = siteContent["contact"]["phone"];
info[7].textContent = siteContent["contact"]["email"];

info[8].textContent = siteContent["footer"]["copyright"];

let nav = document.querySelector("nav");
let a = document.createElement("a");
let b = document.createElement("b");

nav.append(b);
nav.prepend(a);

a.setAttribute("href", "#");
a.textContent = "Lambda";

b.setAttribute("href", "#");
b.textContent = "School";
