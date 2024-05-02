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

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  });
});
nav.addEventListener("click", (e) => {
  if (
    e.target.matches(".nav") &&
    nav.getAttribute("aria-expanded") === "true"
  ) {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  }
});

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

///////// INTERSECTION OBSERVER

// from left stagger

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      //  else {
      //   entry.target.classList.remove("active");
      // }
    });
  },
  { threshold: 0.2 }
);

const leftStagger = document.querySelectorAll(".hidden-left-stagger");
leftStagger.forEach((el) => observer.observe(el));
const rightStagger = document.querySelectorAll(".hidden-right-stagger");
rightStagger.forEach((el) => observer.observe(el));
// from bottom opacity stagger
const bottomStagger = document.querySelectorAll(".hidden-top-stagger");
bottomStagger.forEach((el) => observer.observe(el));

// contact modal
const contactModal = document.querySelector(".contact-modal");

document.querySelectorAll(".contact-modal-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("demo-pristup-btn")) {
      document
        .querySelector(".contact-modal-btn-wrapper")
        .setAttribute("data-active", "false");

      document.querySelector(".modal-form").setAttribute("data-active", "true");
      document.querySelector(".textarea").setAttribute("data-active", "false");
      document.querySelector(".demo-msg").setAttribute("data-active", "true");
    }
    if (btn.classList.contains("prijedlog-btn")) {
      document
        .querySelector(".contact-modal-btn-wrapper")
        .setAttribute("data-active", "false");
      document.querySelector(".modal-form").setAttribute("data-active", "true");
      document.querySelector(".demo-msg").setAttribute("data-active", "false");
      document.querySelector(".textarea").setAttribute("data-active", "true");
    }
  });
});
document.querySelector(".fa-xmark").addEventListener("click", (e) => {
  document.querySelector(".modal-form").setAttribute("data-active", "false");
  document
    .querySelector(".contact-modal-btn-wrapper")
    .setAttribute("data-active", "true");
});
document.querySelectorAll(".upit-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    contactModal.setAttribute("data-active", "true");
    document
      .querySelector(".contact-modal-btn-wrapper")
      .setAttribute("data-active", "true");
  });
});
window.addEventListener("click", (e) => {
  if (e.target.matches(".contact-modal")) {
    contactModal.setAttribute("data-active", "false");
    document.querySelector(".modal-form").setAttribute("data-active", "false");
  }
});
