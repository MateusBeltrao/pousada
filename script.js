// Inicializa o AOS
AOS.init();

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.header-icons');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

