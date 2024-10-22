AOS.init();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.header-icons');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slideshow
const slides = document.querySelectorAll('.about-img-container');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active'); // Exibe a imagem ativa
            slide.style.display = 'block'; // Garante que a imagem está visível
            slide.style.opacity = 1; // Torna a imagem ativa visível
        } else {
            slide.style.opacity = 0; // Oculta a imagem
            setTimeout(() => {
                slide.style.display = 'none'; // Esconde a imagem depois da transição
                slide.classList.remove('active'); // Remove a classe de ativo
            }, 3000); // Tempo da transição deve ser o mesmo que no CSS
        }
    });
}

// Muda para o próximo slide a cada 5 segundos
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length; // Muda para o próximo slide
    showSlide(currentSlide);
}, 5000);

// Mostra o primeiro slide ao carregar
showSlide(currentSlide);
