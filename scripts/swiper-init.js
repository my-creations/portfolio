const PROJECTS = [
  { key: 'projectOne', github: 'https://github.com/my-creations/joke-teller', demo: 'https://my-creations.github.io/joke-teller/' },
  { key: 'projectTwo', github: 'https://github.com/my-creations/nike', demo: 'https://my-creations.github.io/nike/' },
  { key: 'projectThree', github: 'https://github.com/my-creations/music-player', demo: 'https://my-creations.github.io/music-player/' },
  { key: 'projectFour', github: 'https://github.com/my-creations/animated-navigation', demo: 'https://my-creations.github.io/animated-navigation/' },
  { key: 'projectFive', github: 'https://github.com/my-creations/animated-template', demo: 'https://my-creations.github.io/animated-template/' },
  { key: 'projectSix', github: 'https://github.com/my-creations/quote-generator', demo: 'https://my-creations.github.io/quote-generator/' },
  { key: 'projectSeven', github: 'https://github.com/my-creations/infinite-scroll', demo: 'https://my-creations.github.io/infinite-scroll/' },
  { key: 'projectEight', github: 'https://github.com/my-creations/custom-countdown', demo: 'https://my-creations.github.io/custom-countdown/' },
  { key: 'projectNine', github: 'https://github.com/my-creations/book-keeper', demo: 'https://my-creations.github.io/book-keeper/' },
  { key: 'projectTen', github: 'https://github.com/my-creations/form-validator', demo: 'https://my-creations.github.io/form-validator/' },
  { key: 'projectEleven', github: 'https://github.com/my-creations/spock-rock-game', demo: 'https://my-creations.github.io/spock-rock-game/' },
  { key: 'projectTwelve', github: 'https://github.com/my-creations/nasa-apod', demo: 'https://my-creations.github.io/nasa-apod/' },
  { key: 'projectThirteen', github: 'https://github.com/my-creations/math-sprint-game', demo: 'https://my-creations.github.io/math-sprint-game/' },
  { key: 'projectFourteen', github: 'https://github.com/my-creations/drag-and-drop', demo: 'https://my-creations.github.io/drag-and-drop/' },
  { key: 'projectFifteen', github: 'https://github.com/my-creations/calculator', demo: 'https://my-creations.github.io/calculator/' },
];

const PREVIEW_TIMEOUT_MS = 5000;
const previewTimers = new WeakMap();

function renderProjectSlides() {
  const wrapper = document.querySelector('#projects-wrapper');
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = '';

  PROJECTS.forEach((project, index) => {
    const number = index + 1;
    const projectKeyPath = `projects.${project.key}`;

    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.dataset.test = `project-${number}-slide`;

    slide.innerHTML = `
      <article class="details-container color-container" data-test="project-${number}-container">
        <div
          class="article-container project-preview"
          data-test="project-${number}-image-container"
          data-preview-url="${project.demo}"
          data-preview-state="idle"
        >
          <div class="project-preview-frame" aria-hidden="true"></div>
          <div class="project-preview-placeholder" data-test="project-${number}-placeholder">
            <span class="project-preview-label">Live Preview</span>
          </div>
          <div class="project-preview-fallback" data-test="project-${number}-fallback">Preview unavailable</div>
        </div>
        <h2 class="experience-sub-title project-title" data-translate="${projectKeyPath}.title" data-test="project-${number}-title"></h2>
        <div class="text-container" data-test="project-${number}-description-container">
          <p data-translate="${projectKeyPath}.description" data-test="project-${number}-description"></p>
        </div>
        <div class="btn-container" data-test="project-${number}-buttons">
          <a class="btn btn-color-2 project-btn" href="${project.github}" target="_blank" rel="noopener noreferrer" data-translate="${projectKeyPath}.github" data-test="project-${number}-github-button"></a>
          <a class="btn btn-color-2 project-btn" href="${project.demo}" target="_blank" rel="noopener noreferrer" data-translate="${projectKeyPath}.liveDemo" data-test="project-${number}-demo-button"></a>
        </div>
      </article>
    `;

    wrapper.appendChild(slide);
  });

  if (typeof updateTranslations === 'function') {
    updateTranslations();
  }
}

function clearPreviewTimer(container) {
  const timer = previewTimers.get(container);
  if (timer) {
    clearTimeout(timer);
    previewTimers.delete(container);
  }
}

function setPreviewState(container, state) {
  container.dataset.previewState = state;
}

function setFallback(container) {
  clearPreviewTimer(container);

  const frame = container.querySelector('.project-preview-frame');
  if (frame) {
    frame.innerHTML = '';
  }

  setPreviewState(container, 'fallback');
}

function mountPreview(container) {
  if (!container) {
    return;
  }

  const previewUrl = container.dataset.previewUrl;
  const frame = container.querySelector('.project-preview-frame');

  if (!previewUrl || !frame || container.dataset.previewState === 'live' || container.dataset.previewState === 'loading') {
    return;
  }

  setPreviewState(container, 'loading');

  const iframe = document.createElement('iframe');
  iframe.src = previewUrl;
  iframe.loading = 'lazy';
  iframe.title = 'Live project preview';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.sandbox = 'allow-scripts allow-forms allow-popups allow-same-origin';

  iframe.addEventListener('load', () => {
    clearPreviewTimer(container);
    setPreviewState(container, 'live');
  });

  iframe.addEventListener('error', () => {
    setFallback(container);
  });

  frame.innerHTML = '';
  frame.appendChild(iframe);

  const timer = setTimeout(() => {
    if (container.dataset.previewState !== 'live') {
      setFallback(container);
    }
  }, PREVIEW_TIMEOUT_MS);

  previewTimers.set(container, timer);
}

function unmountPreview(container) {
  if (!container) {
    return;
  }

  clearPreviewTimer(container);

  const frame = container.querySelector('.project-preview-frame');
  if (frame) {
    frame.innerHTML = '';
  }

  if (container.dataset.previewState !== 'fallback') {
    setPreviewState(container, 'idle');
  }
}

function getVisibleSlideIndexes(swiperInstance) {
  const visibleIndexes = new Set();
  const activeIndex = swiperInstance.activeIndex;

  [activeIndex - 1, activeIndex, activeIndex + 1].forEach((index) => {
    if (index >= 0 && index < swiperInstance.slides.length) {
      visibleIndexes.add(index);
    }
  });

  swiperInstance.slides.forEach((slide, index) => {
    if (slide.classList.contains('swiper-slide-visible')) {
      visibleIndexes.add(index);
    }
  });

  return visibleIndexes;
}

function syncVisiblePreviews(swiperInstance) {
  const visibleIndexes = getVisibleSlideIndexes(swiperInstance);

  swiperInstance.slides.forEach((slide, index) => {
    const container = slide.querySelector('.project-preview');

    if (visibleIndexes.has(index)) {
      mountPreview(container);
    } else {
      unmountPreview(container);
    }
  });
}

function updateSlideFocus(swiperInstance) {
  swiperInstance.slides.forEach((slide) => {
    let opacity = 0.35;
    let scale = 0.88;

    if (slide.classList.contains('swiper-slide-active')) {
      opacity = 1;
      scale = 1;
      slide.classList.add('swiper-slide-active-custom');
    } else if (
      slide.classList.contains('swiper-slide-next') ||
      slide.classList.contains('swiper-slide-prev')
    ) {
      opacity = 0.72;
      scale = 0.94;
      slide.classList.remove('swiper-slide-active-custom');
    } else {
      slide.classList.remove('swiper-slide-active-custom');
    }

    slide.style.opacity = opacity;
    slide.style.transform = `scale(${scale})`;
  });
}

renderProjectSlides();

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  loopedSlides: PROJECTS.length,
  loopAdditionalSlides: 2,
  speed: 420,
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
    320: {
      slidesPerView: 'auto',
      spaceBetween: 18,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 28,
      centeredSlides: true,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 38,
      centeredSlides: true,
    },
  },
  watchOverflow: true,
  observeParents: true,
  observer: true,
  watchSlidesProgress: true,
  on: {
    init() {
      updateSlideFocus(this);
      syncVisiblePreviews(this);
    },
    slideChange() {
      updateSlideFocus(this);
      syncVisiblePreviews(this);
    },
    resize() {
      updateSlideFocus(this);
      syncVisiblePreviews(this);
    },
  },
});

window.addEventListener('beforeunload', () => {
  swiper.slides.forEach((slide) => {
    unmountPreview(slide.querySelector('.project-preview'));
  });
});
