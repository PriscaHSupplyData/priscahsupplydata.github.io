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
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
  
  // Reset to first slide
  currentSlide = 0;
  showSlide(currentSlide);
  
  // Add keyboard listener
  document.addEventListener('keydown', handleKeyPress);
  
  // Add touch listeners for swipe on mobile
  const container = document.querySelector('.carousel-container');
  container.addEventListener('touchstart', handleTouchStart, { passive: true });
  container.addEventListener('touchend', handleTouchEnd, { passive: true });
}

// === CLOSE MODAL ===
function closeForecastCarousel() {
  const modal = document.getElementById('forecastCarouselModal');
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Re-enable scrolling
  
  // Remove keyboard listener
  document.removeEventListener('keydown', handleKeyPress);
  
  // Remove touch listeners
  const container = document.querySelector('.carousel-container');
  container.removeEventListener('touchstart', handleTouchStart);
  container.removeEventListener('touchend', handleTouchEnd);
}

// === SHOW SLIDE ===
function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  // Wrap around if out of bounds
  if (n >= totalSlides) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = n;
  }
  
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove active class from all dots
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Show current slide
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  
  // Scroll to top of slide content
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
  const swipeThreshold = 50; // Minimum distance for swipe
  
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left -> next slide
    changeSlide(1);
  }
  
  if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right -> previous slide
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
  // Option 1: Open email client
  const email = 'priscah_supplydata@outlook.com';
  const subject = 'Request: Demand Forecast Dashboard Excel File';
  const body = 'Hi Prisca,%0D%0A%0D%0AI would like to request access to your Demand Forecast Dashboard Excel file.%0D%0A%0D%0AThank you!';
  
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  
  // Option 2: Show custom modal with contact form
  // Uncomment if you prefer a modal instead of email
  /*
  alert('Please contact me at priscah_supplydata@outlook.com to request the full Excel file.');
  */

// === AUTO-PLAY (OPTIONAL) ===
// Uncomment to enable auto-play every 5 seconds
/*
let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    changeSlide(1);
  }, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Start auto-play when modal opens
function openForecastCarousel() {
  // ... existing code ...
  startAutoPlay();
}

// Stop auto-play when modal closes or user interacts
function closeForecastCarousel() {
  // ... existing code ...
  stopAutoPlay();
}

// Stop auto-play on manual navigation
document.querySelector('.carousel-nav.prev').addEventListener('click', stopAutoPlay);
document.querySelector('.carousel-nav.next').addEventListener('click', stopAutoPlay);
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', stopAutoPlay);
});
*/

// === PRELOAD IMAGES FOR SMOOTH TRANSITIONS (OPTIONAL) ===
function preloadImages() {
  const imageUrls = [
    'images/demand-forecast/01-dashboard.jpg',
    'images/demand-forecast/02-parameters.jpg',
    'images/demand-forecast/03-power-query.jpg',
    'images/demand-forecast/04-forecast-engine.jpg',
    'images/demand-forecast/05-forecast-summary.jpg',
    'images/demand-forecast/06-power-pivot.jpg'
  ];
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Preload images when page loads
window.addEventListener('load', preloadImages);

// === ANALYTICS TRACKING (OPTIONAL) ===
// Track when users open the carousel
function trackCarouselOpen() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'carousel_open', {
      'event_category': 'engagement',
      'event_label': 'Demand Forecast Dashboard'
    });
  }
}

// Track which slides users view
function trackSlideView(slideNumber) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'slide_view', {
      'event_category': 'engagement',
      'event_label': `Slide ${slideNumber + 1}`
    });
  }
}

// Add tracking to showSlide function
// showSlide = (function() {
//   const originalShowSlide = showSlide;
//   return function(n) {
//     originalShowSlide(n);
//     trackSlideView(currentSlide);
//   }
// })();

console.log('✅ Demand Forecast Carousel initialized');
