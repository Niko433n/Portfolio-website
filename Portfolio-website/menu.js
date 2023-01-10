const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const heading = item.querySelector(".accordion-item-header");
  const content = item.querySelector(".accordion-item-content");

  heading.addEventListener("click", () => {
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

window.addEventListener("load", sidenVises);
let btn;
let menu;

function sidenVises() {
  btn = document.querySelector("#container");
  menu = document.querySelector(".main-menu");

  btn.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");

  btn.classList.toggle("change");

  if (menuShown) {
    console.log(menuShown);
  } else {
    console.log(menuShown);
  }
}
