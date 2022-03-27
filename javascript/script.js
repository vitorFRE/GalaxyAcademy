/* Menu-mobile */
const btnMobile = document.querySelector(".btn-mobile");

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

/* slide-depoimento */
var depoimentos = document.querySelectorAll(".depoimento");
var btns = document.querySelectorAll(".btn-slider");
let currentSlide = 1;

var manualNav = function (manual) {
  depoimentos.forEach((slide) => {
    slide.classList.remove("ativo");

    btns.forEach((btn) => {
      btn.classList.remove("ativo");
    });
  });

  depoimentos[manual].classList.add("ativo");
  btns[manual].classList.add("ativo");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});
