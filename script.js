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

// ========================================
// VIDEO LIGHTBOX
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Créer la lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'video-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">×</button>
            <iframe id="lightbox-iframe" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Récupérer les éléments
    const videoContainers = document.querySelectorAll('.project-video');
    const lightboxIframe = document.getElementById('lightbox-iframe');
    const closeBtn = document.querySelector('.lightbox-close');

    // Ajouter une couche cliquable sur chaque vidéo
    videoContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (iframe) {
            // Créer la couche cliquable
            const clickLayer = document.createElement('div');
            clickLayer.className = 'video-click-layer';
            container.appendChild(clickLayer);
            
            // Clic sur la couche pour ouvrir la lightbox
            clickLayer.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Récupérer l'URL de base
                let videoSrc = iframe.src.split('?')[0];
                const videoId = videoSrc.split('/').pop();
                
                // Construire l'URL avec tous les paramètres pour autoplay et lecture continue
                const params = new URLSearchParams({
                    'autoplay': '1',
                    'mute': '0',
                    'controls': '1',
                    'modestbranding': '1',
                    'rel': '0',
                    'showinfo': '0',
                    'fs': '1',
                    'playsinline': '0',
                    'enablejsapi': '1'
                });
                
                lightboxIframe.src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });

    // Fermer la lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxIframe.src = ''; // Arrêter la vidéo
        document.body.style.overflow = '';
    }

    // Fermer au clic sur le bouton X
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
    });

    // Fermer au clic en dehors de la vidéo
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});