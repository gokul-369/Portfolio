var filter_btns = document.querySelectorAll(".filter-btn");
var skills_wrap = document.querySelector(".skills");
var skills_bars = document.querySelectorAll(".skill-progress");
var records_wrap = document.querySelector(".records");
var records_numbers = document.querySelectorAll(".number");
var footer_input = document.querySelector(".footer-input");
var hamburger_menu = document.querySelector(".hamburger-menu");
var navbar = document.querySelector("header nav");
var links = document.querySelectorAll(".links a");
var logo = document.querySelector("nav .logo");
var tgl_btn = document.querySelector(".toggle-btn");
var bigwrapper = document.querySelector(".big-wrapper");
var dark = false;

function toggleanimation() {
  dark = !dark;
  if (dark === true) {
    bigwrapper.classList.remove("light");
    bigwrapper.classList.add("dark");
  } else {
    bigwrapper.classList.remove("dark");
    bigwrapper.classList.add("light");
  }
}
tgl_btn.addEventListener("click", toggleanimation);
function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));
footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});
footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filtervalue = btn.dataset.filter;
    $(".grid").isotope({ filter: filtervalue });
  })
);
window.addEventListener("scroll", () => {
  checkScroll(skills_wrap);
  skillsEffect();
  countUp();
  if (window.scrollY >= 50) {
    logo.classList.add("logo-hide");
    tgl_btn.classList.add("logo-hide");
  } else {
    logo.classList.remove("logo-hide");
    tgl_btn.classList.remove("logo-hide");
  }
});
function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}
function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 200;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };
    setTimeout(updateCount, 400);
  });
}
$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});
var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
