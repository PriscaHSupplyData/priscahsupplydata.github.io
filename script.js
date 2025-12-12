// ========================================
// NAVIGATION MOBILE
// ========================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle menu mobile
burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('active');
    
    // Burger animation
    burger.classList.toggle('toggle');
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Hauteur de la navbar
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Ajouter une ombre plus prononcée au scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// ANIMATIONS AU SCROLL (Intersection Observer)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer tous les éléments à animer
const animatedElements = document.querySelectorAll('.project-card, .skill-category, .highlight-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// GESTION DES VIDÉOS (pour le futur)
// ========================================
// Cette fonction sera utile quand tu ajouteras tes vidéos
function setupVideoPlaceholders() {
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // Pour le moment, juste un message
            console.log('Vidéo à venir - prépare ton contenu!');
        });
    });
}

setupVideoPlaceholders();

// ========================================
// ANNÉE DYNAMIQUE DANS LE FOOTER
// ========================================
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Prisca H. Supply & Data - Supply Chain Expert | Data Analyst | Power BI`;
}

// ========================================
// LOG DE BIENVENUE
// ========================================
console.log('%c🎨 Portfolio Prisca H. Supply & Data', 'color: #1e8b8b; font-size: 20px; font-weight: bold;');
console.log('%cSupply Chain Expert | Data Analyst | Power BI', 'color: #ff8c69; font-size: 14px;');
console.log('%cDéveloppé avec 💙', 'color: #9b7fbf; font-size: 12px;');