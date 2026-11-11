const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeToggle(nextTheme);
});

const currentTheme =
  document.documentElement.dataset.theme === "light" ? "light" : "dark";
updateThemeToggle(currentTheme);

function updateThemeToggle(theme) {
  const label = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
}
