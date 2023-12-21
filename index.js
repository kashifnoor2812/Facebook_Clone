let icon = document.querySelector(".profile_img");
let menu_container = document.querySelector(".menu_container");
icon.addEventListener("click", display_menu);
let btn = document.querySelector("#dark_btn");

function display_menu() {
  menu_container.classList.toggle("menu_container-height");
}
btn.onclick = function () {
  btn.classList.toggle("dark_on_btn");
  document.body.classList.toggle("dark_theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  btn.classList.remove("dark_on_btn");
  document.body.classList.remove("dark_theme");
} else if (localStorage.getItem("theme") == "dark") {
  btn.classList.add("dark_on_btn");
  document.body.classList.add("dark_theme");
} else {
  localStorage.setItem("theme", "light");
}
