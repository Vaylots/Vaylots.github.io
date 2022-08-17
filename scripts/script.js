var link = document.getElementById("theme-link");

function ChangeTheme() {
  let btn = document.getElementById("theme-button");
  let lightTheme = "./css/lightTheme.css";
  let darkTheme = "./css/darkTheme.css";

  var currTheme = link.getAttribute("href");
  var theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
    btn.innerHTML = "Dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
    btn.innerHTML = "Light";
  }

  link.setAttribute("href", currTheme);

  Save(theme);
  console.log("yes");
}
