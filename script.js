document.getElementById("year").textContent = new Date().getFullYear();
const btn = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
