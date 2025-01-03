/*----------- Navbar Active ---------- */

document.querySelectorAll(".nav").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".nav")
      .forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

/*------ Toggle Icon Navbar ------ */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

/*------ Scrool Section Active link ------ */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offSet = sec.offSetTop - 150;
    let height = sec.offSetHeight;
    let id = sec.getAttribute("id");

    if (top >= offSet && top < offSet + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href'=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*------ Sticky Navabar ------ */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*------ remove toggle icon and navbar ------ */
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*------ Scrool Reveal ------ */

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-containt, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img , .education-content , .portfolio-box , .contact form",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".home-contact, h1, about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

/*------ Typed Js ------ */

const text = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer_",
    "Web Designer_",
    "Also learning Java as a Backend_",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
