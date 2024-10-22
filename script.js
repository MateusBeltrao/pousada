AOS.init();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.header-icons');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slideshow logic
let slideIndex = 0;
const slides = document.querySelectorAll('.about-img-container');

function showSlides() {
    // Esconde todas as imagens
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Incrementa o índice da imagem
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Mostra a imagem correspondente ao índice
    slides[slideIndex - 1].classList.add('active');

    // Muda a imagem a cada 5 segundos
    setTimeout(showSlides, 5000);
}

// Inicia o slideshow
showSlides();
