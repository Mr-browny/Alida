const btn = document.querySelector(".al-btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("al-dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("al-light-theme");
    var theme = document.body.classList.contains("al-light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("al-dark-theme");
    var theme = document.body.classList.contains("al-dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
