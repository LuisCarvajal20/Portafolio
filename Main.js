const btn = document.getElementById("menu-toggle");
const menu = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

btn.onclick = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("open");
  overlay.classList.toggle("active");
};

overlay.onclick = () => {
  btn.classList.remove("open");
  menu.classList.remove("open");
  overlay.classList.remove("active");
};