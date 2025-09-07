// Full project injection with all categories and filter buttons


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const scrollBtn = document.getElementById('scrollToTop');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('active');
});

// Optionally close menu when clicking a nav link (for mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900 && navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// FAQ dropdown functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
    btn.addEventListener('click', function () {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
            if (openItem !== item) openItem.classList.remove('open');
        });
        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', !isOpen);
    });
});

