/* ========================================
   DEMAND FORECAST CAROUSEL MODAL JS
   Navigation, swipe mobile, keyboard support
   ======================================== */

let currentSlide = 0;
const totalSlides = 6;
let touchStartX = 0;
let touchEndX = 0;

// === OPEN MODAL ===
function openForecastCarousel() {
  const modal = document.getElementById('forecastCarouselModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  currentSlide = 0;
  showSlide(currentSlide);
  
  document.addEventListener('keydown', handleKeyPress);
  
  const container = document.querySelector('.carousel-container');
  container.addEventListener('touchstart', handleTouchStart, { passive: true });
  container.addEventListener('touchend', handleTouchEnd, { passive: true });
}

// === CLOSE MODAL ===
function closeForecastCarousel() {
  const modal = document.getElementById('forecastCarouselModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  document.removeEventListener('keydown', handleKeyPress);
  
  const container = document.querySelector('.carousel-container');
  container.removeEventListener('touchstart', handleTouchStart);
  container.removeEventListener('touchend', handleTouchEnd);
}

// === SHOW SLIDE ===
function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (n >= totalSlides) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = n;
  }
  
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  
  slides[currentSlide].scrollTop = 0;
}

// === CHANGE SLIDE (ARROWS) ===
function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// === GO TO SPECIFIC SLIDE (DOTS) ===
function goToSlide(n) {
  showSlide(n);
}

// === KEYBOARD NAVIGATION ===
function handleKeyPress(e) {
  switch(e.key) {
    case 'ArrowLeft':
      changeSlide(-1);
      break;
    case 'ArrowRight':
      changeSlide(1);
      break;
    case 'Escape':
      closeForecastCarousel();
      break;
    case 'Home':
      goToSlide(0);
      e.preventDefault();
      break;
    case 'End':
      goToSlide(totalSlides - 1);
      e.preventDefault();
      break;
  }
}

// === TOUCH SWIPE DETECTION (MOBILE) ===
function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 50;
  
  if (touchEndX < touchStartX - swipeThreshold) {
    changeSlide(1);
  }
  
  if (touchEndX > touchStartX + swipeThreshold) {
    changeSlide(-1);
  }
}

// === CLICK OUTSIDE TO CLOSE ===
window.onclick = function(event) {
  const modal = document.getElementById('forecastCarouselModal');
  if (event.target === modal) {
    closeForecastCarousel();
  }
}

// === REQUEST FILE FUNCTION ===
function requestFile() {
  const email = 'priscah_supplydata@outlook.com';  // ← TON EMAIL
  const subject = 'Demande : Fichier Excel Dashboard Demand Forecast';
  const body = 'Bonjour Prisca,%0D%0A%0D%0AJe souhaiterais accéder à votre fichier Excel Dashboard Demand Forecast.%0D%0A%0D%0AMerci !';
  
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

// === PRELOAD IMAGES ===
function preloadImages() {
  const imageUrls = [
    'Images/DemandForecast/01-dashboard.jpg',
    'Images/DemandForecast/02-parameters.jpg',
    'Images/DemandForecast/03-power-query.jpg',
    'Images/DemandForecast/04-forecast-engine.jpg',
    'Images/DemandForecast/05-forecast-summary.jpg',
    'Images/DemandForecast/06-power-pivot.jpg'
  ];
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

window.addEventListener('load', preloadImages);

console.log('✅ Demand Forecast Carousel initialized');
