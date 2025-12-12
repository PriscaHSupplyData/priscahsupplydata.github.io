// ========================================
// NAVIGATION MOBILE
// ========================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle menu mobile
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

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
            const offset = 80;
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
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    lastScroll = currentScroll;
});

// ========================================
// ANIMATIONS AU SCROLL
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

const animatedElements = document.querySelectorAll('.project-card, .skill-category, .highlight-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// ANNÉE DYNAMIQUE
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

// ========================================
// VIDEO LIGHTBOX
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.createElement('div');
    lightbox.className = 'video-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">×</button>
            <iframe id="lightbox-iframe" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    `;
    document.body.appendChild(lightbox);

    const videoContainers = document.querySelectorAll('.project-video');
    const lightboxIframe = document.getElementById('lightbox-iframe');
    const closeBtn = document.querySelector('.lightbox-close');

    videoContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (iframe) {
            const clickLayer = document.createElement('div');
            clickLayer.className = 'video-click-layer';
            container.appendChild(clickLayer);
            
           clickLayer.addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();

  const videoId = getYouTubeId(iframe.src);
  if (!videoId) {
    console.warn("Impossible d'extraire l'ID YouTube depuis:", iframe.src);
    return;
  }

  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',              // <- test : évite blocage autoplay
    controls: '1',
    modestbranding: '1',
    rel: '0',
    fs: '1',
    playsinline: '1'
  });

  lightboxIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
});

        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxIframe.src = '';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
