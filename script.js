// Inicializa o AOS
AOS.init();

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.header-icons');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Apresentação de Slides
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = -index * 100; // Calcula o deslocamento com base no índice atual
    slidesContainer.style.transform = `translateX(${offset}%)`; // Move o contêiner
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Incrementa o índice
    showSlide(currentIndex); // Mostra o slide atual
}, 3000); // Muda a cada 3 segundos








document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.card-wrapper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});



let currentIndex2 = 0;
const slides2 = document.querySelectorAll('.slide-2');
const totalSlides2 = slides2.length;

function showSlide2(index) {
    const slidesContainer2 = document.querySelector('.slides-2');
    const offset2 = -index * 100;
    slidesContainer2.style.transform = `translateX(${offset2}%)`;
}

setInterval(() => {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    showSlide2(currentIndex2);
}, 3000);
