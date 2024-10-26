document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o AOS
    AOS.init();

    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.header-icons');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log("Menu toggle acionado"); // Verifique no console se funciona
});

    
    // Apresentação de Slides
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slidesContainer = document.querySelector('.slides');

    function showSlide(index) {
        if (slidesContainer) {
            const offset = -index * 100;
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 3000);

    // Swiper
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
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Segundo conjunto de slides
    let currentIndex2 = 0;
    const slides2 = document.querySelectorAll('.slide-2');
    const totalSlides2 = slides2.length;
    const slidesContainer2 = document.querySelector('.slides-2');

    function showSlide2(index) {
        if (slidesContainer2) {
            const offset2 = -index * 100;
            slidesContainer2.style.transform = `translateX(${offset2}%)`;
        }
    }

    setInterval(() => {
        currentIndex2 = (currentIndex2 + 1) % totalSlides2;
        showSlide2(currentIndex2);
    }, 3000);
});
