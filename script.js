// ========================================
// UTILITAIRES
// ========================================
function safeOn(el, event, handler, options) {
  if (!el) return false;
  el.addEventListener(event, handler, options);
  return true;
}

function qs(sel, root = document) {
  return root.querySelector(sel);
}
function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function getYouTubeId(url) {
  try {
    const u = new URL(url);

    // watch?v=ID
    const v = u.searchParams.get('v');
    if (v) return v;

    const parts = u.pathname.split('/').filter(Boolean);

    // /embed/ID ou /shorts/ID
    const i = parts.findIndex(p => ['embed', 'shorts'].includes(p));
    if (i !== -1 && parts[i + 1]) return parts[i + 1];

    // youtu.be/ID
    if (u.hostname.includes('youtu.be') && parts[0]) return parts[0];
  } catch (e) {
    // URL invalide
  }
  return null;
}

// ========================================
// NAVIGATION MOBILE
// ========================================
(function initMobileNav() {
  const burger = qs('.burger');
  const nav = qs('.nav-links');
  const navLinks = qsa('.nav-links li');

  if (!burger || !nav) return;

  safeOn(burger, 'click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });

  navLinks.forEach(link => {
    safeOn(link, 'click', () => {
      nav.classList.remove('active');
      burger.classList.remove('toggle');
    });
  });
})();

// ========================================
// SMOOTH SCROLLING
// ========================================
(function initSmoothScroll() {
  qsa('a[href^="#"]').forEach(anchor => {
    safeOn(anchor, 'click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = qs(href);
      if (!target) return;

      e.preventDefault();
      const offset = 80;
      const targetPosition = target.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
})();

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
(function initNavbarShadow() {
  const navbar = qs('.navbar');
  if (!navbar) return;

  safeOn(window, 'scroll', () => {
    const currentScroll = window.pageYOffset || 0;
    navbar.style.boxShadow = currentScroll > 50
      ? '0 4px 12px rgba(0, 0, 0, 0.15)'
      : '0 2px 8px rgba(0, 0, 0, 0.08)';
  });
})();

// ========================================
// ANIMATIONS AU SCROLL
// ========================================
(function initScrollAnimations() {
  const animatedElements = qsa('.project-card, .skill-category, .highlight-card');
  if (!animatedElements.length) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
})();

// ========================================
// ANNÉE DYNAMIQUE
// ========================================
(function initFooterYear() {
  const footerYear = qs('.footer p');
  if (!footerYear) return;

  const currentYear = new Date().getFullYear();
  footerYear.innerHTML = `&copy; ${currentYear} Prisca H. Supply & Data - Supply Chain Expert | Data Analyst | Power BI`;
})();

// ========================================
// LOG DE BIENVENUE
// ========================================
console.log('%c🎨 Portfolio Prisca H. Supply & Data', 'color: #1e8b8b; font-size: 20px; font-weight: bold;');
console.log('%cSupply Chain Expert | Data Analyst | Power BI', 'color: #ff8c69; font-size: 14px;');

// ========================================
// VIDEO LIGHTBOX
// ========================================
(function initVideoLightbox() {
  document.addEventListener('DOMContentLoaded', () => {
    // Crée la lightbox vidéo si pas déjà présente
    let lightbox = qs('.video-lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.className = 'video-lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Fermer">×</button>
          <iframe id="lightbox-iframe" src="" frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      `;
      document.body.appendChild(lightbox);
    }

    const lightboxIframe = qs('#lightbox-iframe', lightbox);
    const closeBtn = qs('.lightbox-close', lightbox);

    const videoContainers = qsa('.project-video');
    videoContainers.forEach(container => {
      const iframe = qs('iframe', container);
      if (!iframe) return;

      // couche cliquable (au-dessus de l'iframe)
      let clickLayer = qs('.video-click-layer', container);
      if (!clickLayer) {
        clickLayer = document.createElement('div');
        clickLayer.className = 'video-click-layer';
        container.appendChild(clickLayer);
      }

      safeOn(clickLayer, 'click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const videoId = getYouTubeId(iframe.src);
        if (!videoId) {
          console.warn('Impossible d’extraire l’ID YouTube depuis:', iframe.src);
          return;
        }

        const params = new URLSearchParams({
          autoplay: '1',
          mute: '1',               // + fiable (autoplay)
          controls: '1',
          modestbranding: '1',
          rel: '0',
          fs: '1',
          playsinline: '1'
        });

        // nocookie = plus clean (et souvent mieux accepté)
        lightboxIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      if (lightboxIframe) lightboxIframe.src = '';
      document.body.style.overflow = '';
    }

    safeOn(closeBtn, 'click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });

    safeOn(lightbox, 'click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    safeOn(document, 'keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  });
})();

// ========================================
// IMAGE LIGHTBOX (captures onglets)
// Utilise des <img class="tab-shot" ...>
// ========================================
(function initImageLightbox() {
  document.addEventListener('DOMContentLoaded', () => {
    const shots = qsa('.tab-shot');
    if (!shots.length) return;

    let imgBox = qs('.img-lightbox');
    if (!imgBox) {
      imgBox = document.createElement('div');
      imgBox.className = 'img-lightbox';
      imgBox.innerHTML = `
        <div class="img-lightbox-content">
          <button class="img-close" aria-label="Fermer">×</button>
          <img class="img-full" src="" alt="">
        </div>
      `;
      document.body.appendChild(imgBox);
    }

    const fullImg = qs('.img-full', imgBox);
    const closeBtn = qs('.img-close', imgBox);

    const close = () => {
      imgBox.classList.remove('active');
      if (fullImg) fullImg.src = '';
      document.body.style.overflow = '';
    };

    shots.forEach(img => {
      safeOn(img, 'click', () => {
        if (!fullImg) return;
        fullImg.src = img.getAttribute('data-full') || img.src; // optionnel
        fullImg.alt = img.alt || '';
        imgBox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    safeOn(closeBtn, 'click', close);
    safeOn(imgBox, 'click', (e) => { if (e.target === imgBox) close(); });
    safeOn(document, 'keydown', (e) => {
      if (e.key === 'Escape' && imgBox.classList.contains('active')) close();
    });
  });
})();
