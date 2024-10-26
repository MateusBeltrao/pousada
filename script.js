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

    
// Inicializa os sliders
function initializeSlider(slidesContainerSelector, slideClass) {
    let currentIndex = 0;
    const slides = document.querySelectorAll(slideClass);
    const totalSlides = slides.length;
    const slidesContainer = document.querySelector(slidesContainerSelector);

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
}

// Inicializa os sliders com delay
initializeSlider('.slides', '.slide'); // Slider 1

setTimeout(() => {
    initializeSlider('.slides-2', '.slide-2'); // Slider 2 com atraso
}, 1000); // 2000 ms = 2 segundos de atraso

setTimeout(() => {
    initializeSlider('.slides-3', '.slide-3'); // Slider 3 com atraso
}, 2000); // 4000 ms = 4 segundos de atraso



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

   
});
