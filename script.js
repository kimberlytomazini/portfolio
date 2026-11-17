
// Atualizar o ano automaticamente
document.getElementById("year").textContent =
    new Date().getFullYear();

// Menu para dispositivos móveis
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Fechar menu ao clicar em um link
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
