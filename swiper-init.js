const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: true,
    },
    breakpoints: {
        // Mobile devices
        320: {
          slidesPerView: 'auto',
          spaceBetween: 20,
          centeredSlides: true,
        },
        // Tablets
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          centeredSlides: true,
        },
        // Desktop
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 40,
          centeredSlides: true,
        }
    },
    watchOverflow: true,
    observeParents: true,
    observer: true,
    on: {
        init: function() {
            updateSlideOpacity(this);
        },
        slideChange: function() {
            updateSlideOpacity(this);
        },
        resize: function() {
            updateSlideOpacity(this);
        }
    }
});

function updateSlideOpacity(swiperInstance) {
    const slides = swiperInstance.slides;
    const activeIndex = swiperInstance.activeIndex;
    
    slides.forEach((slide, index) => {
        let opacity = 0.3; // Default opacity for distant slides
        let scale = 0.85; // Default scale for distant slides
        
        if (index === activeIndex) {
            // Active/focused slide - full opacity and scale
            opacity = 1;
            scale = 1;
        } else if (Math.abs(index - activeIndex) === 1) {
            // Adjacent slides - medium opacity and slight scale
            opacity = 0.6;
            scale = 0.9;
        } else if (Math.abs(index - activeIndex) === 2) {
            // Second adjacent slides - lower opacity
            opacity = 0.4;
            scale = 0.85;
        }
        
        // Apply opacity and scale with smooth transition
        slide.style.opacity = opacity;
        slide.style.transform = `scale(${scale})`;
        slide.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        // Add/remove focus class for additional styling
        if (index === activeIndex) {
            slide.classList.add('swiper-slide-active-custom');
        } else {
            slide.classList.remove('swiper-slide-active-custom');
        }
    });
}