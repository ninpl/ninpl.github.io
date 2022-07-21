var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.className === "fa fa-moon-o") {
      setTheme("dark");
      localStorage.setItem("dark-mode-storage", "dark");
    } else if (toggle.className === "fa fa-sun-o") {
      setTheme("light");
      localStorage.setItem("dark-mode-storage", "light");
    }
});

function setTheme(mode) {
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fa fa-sun-o";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fa fa-moon-o";
    }
}
