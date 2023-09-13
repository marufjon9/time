const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav__list");
  const navLinks = document.querySelectorAll(".nav__item a");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    hamburger.classList.toggle("toggle");
  });
};

const app = () => {
  navSlide();
};

app();
