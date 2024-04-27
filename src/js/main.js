///// HAM BTN AND NAV OPEN/CLOSEDS

const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");
hamBtn.addEventListener("click", (e) => {
  if (nav.getAttribute("aria-expanded") === "false") {
    nav.setAttribute("aria-expanded", "true");
    hamBtn.setAttribute("data-active", "true");
  } else {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  }
});

//// SCROLL TO TOP

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    document.querySelector(".nav__logo").setAttribute("data-visible", "true");
    document.querySelector(".nav").classList.add("nav-active");
  } else {
    document.querySelector(".nav__logo").setAttribute("data-visible", "false");
    document.querySelector(".nav").classList.remove("nav-active");
  }
  const backToTopBtn = document.querySelector(".scroll-to-top-btn");
  if (window.scrollY > 300) {
    backToTopBtn.setAttribute("data-visible", "true");
  } else {
    backToTopBtn.setAttribute("data-visible", "false");
  }
  backToTopBtn.addEventListener("click", (e) => {
    window.scrollTo({ top: 0 });
  });
});

// HEADER HIDE ON SCROLL

/////////// HIDE HEADER ON SCROLL

let lastScrollTop = 0;
let navbar = document.querySelector(".header");
let navbarHeight = document.querySelector(".header").scrollHeight;
window.addEventListener("scroll", (e) => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

//// BACK TO TOP

const backToTopbtn = document.querySelector(".back-to-top-btn");

backToTopbtn.addEventListener("click", (e) => {
  window.scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 150) {
    backToTopbtn.setAttribute("data-visible", "true");
  } else backToTopbtn.setAttribute("data-visible", "false");
});
