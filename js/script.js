const open_m = document.querySelector(".menuOpen");
const menu = document.querySelector(".menu");
const close_m = document.querySelector(".close");
const bgMA = document.querySelector(".bgMA");
const header__btn = document.querySelector(".header__btn");

const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tabContent");

open_m.addEventListener("click", () => {
  menu.classList.toggle("active");
  bgMA.classList.toggle("bgMA_active");
  header__btn.classList.toggle("header__btn_active");
});
close_m.addEventListener("click", () => {
  menu.classList.toggle("active");
  bgMA.classList.toggle("bgMA_active");
  header__btn.classList.toggle("header__btn_active");
});

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    document.querySelector(".tab_active").classList.toggle("tab_active");
    tabs[i].classList.toggle("tab_active");
    document
      .querySelector(".tabContent__active")
      .classList.toggle("tabContent__active");
    tabContent[i].classList.toggle("tabContent__active");
  });
}
