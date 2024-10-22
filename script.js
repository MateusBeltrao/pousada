// Inicializa o AOS
AOS.init();

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.header-icons');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slideshow existente
const slides = document.querySelectorAll('.about-img-container');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.style.display = 'block';
            slide.style.opacity = 1;
        } else {
            slide.style.opacity = 0;
            setTimeout(() => {
                slide.style.display = 'none';
                slide.classList.remove('active');
            }, 3000);
        }
    });
}

// Muda para o próximo slide a cada 5 segundos
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Mostra o primeiro slide ao carregar
showSlide(currentSlide);

// Novo carrossel Swiper
var swiper = new Swiper(".swiper-container", {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 5000, // Tempo de transição entre os slides (em milissegundos)
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

