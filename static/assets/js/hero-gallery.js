/* ============================================================
   Hero Gallery Slideshow JavaScript
   ============================================================ */

class HeroSlideshow {
  constructor(element) {
    this.container = element;
    this.slides = element.querySelectorAll('.hero__slide');
    this.prevBtn = element.querySelector('.hero__nav--prev');
    this.nextBtn = element.querySelector('.hero__nav--next');
    this.indicators = element.querySelectorAll('.hero__indicator');

    this.currentIndex = 0;
    this.slideCount = this.slides.length;
    this.autoplayInterval = null;
    this.autoplayDelay = 5000;

    this.init();
  }

  init() {
    if (this.slides.length === 0) return;

    this.updateSlide();
    this.startAutoplay();
    this.bindEvents();
  }

  bindEvents() {
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goTo(index));
    });



    document.addEventListener('keydown', (e) => {
      if (!this.isElementInViewport()) return;
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  isElementInViewport() {
    const rect = this.container.getBoundingClientRect();
    return (
      rect.top >= -rect.height &&
      rect.bottom <= (window.innerHeight + rect.height)
    );
  }

  updateSlide() {
    this.slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev');
      if (index === this.currentIndex) {
        slide.classList.add('active');
      } else if (index === this.getPrevIndex()) {
        slide.classList.add('prev');
      }
    });

    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
  }

  getPrevIndex() {
    return this.currentIndex === 0 ? this.slideCount - 1 : this.currentIndex - 1;
  }

  getNextIndex() {
    return this.currentIndex === this.slideCount - 1 ? 0 : this.currentIndex + 1;
  }

  prev() {
    this.currentIndex = this.getPrevIndex();
    this.updateSlide();
    this.resetAutoplay();
  }

  next() {
    this.currentIndex = this.getNextIndex();
    this.updateSlide();
    this.resetAutoplay();
  }

  goTo(index) {
    if (index < 0 || index >= this.slideCount || index === this.currentIndex) return;
    this.currentIndex = index;
    this.updateSlide();
    this.resetAutoplay();
  }

  startAutoplay() {
    if (this.autoplayInterval) return;
    this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
  }

  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  resetAutoplay() {
    this.pauseAutoplay();
    this.startAutoplay();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const heroGalleries = document.querySelectorAll('.hero-gallery');
  heroGalleries.forEach(gallery => new HeroSlideshow(gallery));
});
