const menuBoxBtn = document.getElementById("menuBoxBtn");
const menuBox = document.getElementById("menuBox");
const navlinks = document.querySelectorAll(".navlinks");

let menuisopen = false;

menuBoxBtn.addEventListener("click", () => {
  if (menuisopen) {
    menuBox.style.display = "none";
    menuisopen = false;
  } else {
    menuBox.style.display = "flex";
    menuisopen = true;
  }
});

navlinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      menuBox.style.display = "none";
      menuisopen = false;
    }
  });
});
