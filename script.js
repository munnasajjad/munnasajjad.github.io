const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};
