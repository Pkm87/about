// Responsive Navbar
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});
