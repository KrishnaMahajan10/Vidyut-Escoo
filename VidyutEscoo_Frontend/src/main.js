document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const slideContainer = document.querySelector('.container');
  const slide = document.querySelector('.slides');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const interval = 3000;

  // Check if slideContainer exists before proceeding
  if (!slideContainer) {
    console.error('Error: slideContainer not found in the DOM.');
    return;
  }

  let slides;
  let index = 1;
  let slideWidth;
  let slideId;

  const updateSlides = () => {
    slides = document.querySelectorAll('.slide');
  };

  const updateSlideWidth = () => {
    const currentSlide = slides[index];
    slideWidth = currentSlide ? currentSlide.clientWidth : 0;
  };

  const resetSlidePosition = () => {
    slide.style.transition = 'none';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  const startSlide = () => {
    updateSlides();
    updateSlideWidth();
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
  };

  // Event listener for transition end
  slide.addEventListener('transitionend', () => {
    updateSlides();
    if (slides[index].id === 'first-clone') {
      resetSlidePosition();
      index = 1;
    }

    if (slides[index].id === 'last-clone') {
      resetSlidePosition();
      index = slides.length - 2;
    }
  });

  // Function to move to the next slide
  const moveToNextSlide = () => {
    updateSlides();
    updateSlideWidth();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  // Function to move to the previous slide
  const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  // Check if slideContainer exists before adding event listeners
  if (slideContainer) {
    slideContainer.addEventListener('mouseenter', () => {
      clearInterval(slideId);
    });

    slideContainer.addEventListener('mouseleave', startSlide);
  } else {
    console.error('Error: slideContainer not found in the DOM.');
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', moveToNextSlide);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', moveToPreviousSlide);
  }

  // Event listener to ensure DOM is fully loaded before starting the slide show
  window.addEventListener('load', startSlide);
});
