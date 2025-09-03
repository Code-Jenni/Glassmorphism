// Select toggle and body
const toggle = document.getElementById("toggle");
const body = document.body;

// Check system preference (optional)
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add("dark");
  toggle.checked = true;
}

// Toggle theme on click
toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});
