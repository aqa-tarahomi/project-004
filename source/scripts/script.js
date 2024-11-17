function navscroll() {
  const nav = document.querySelector("nav");
  const backToTop = document.getElementById("back_to_top");

  // Check if scrolled more than 100 pixels, add or remove nav background class
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      nav.classList.add("nav-background");
  } else {
      nav.classList.remove("nav-background");
  }

  // Check if scrolled more than 150 pixels, show the back-to-top button
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      backToTop.style.opacity = "1";
  } else {
      backToTop.style.opacity = "0";
  }

  // Check if user is at the bottom of the page
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 50) { // Adjust -50 as needed for sensitivity
      // Hide elements when at the bottom
      nav.style.opacity = "0";
      backToTop.style.opacity = "0";
  } else {
      // Reset elements when not at the bottom
      nav.style.opacity = "1";
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          backToTop.style.opacity = "1";
      }
  }
}

 AOS.init();

 const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        1: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween:100,
          },
      },
    });
    swiperEl.initialize();

    // Select the elements to animate
const animatedElements = document.querySelectorAll('.card-text');

// Function to check if element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Function to activate the animation
function activateAnimation() {
  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('animate');
    }
  });
}

// Listen for scroll events and activate animation on scroll
window.addEventListener('scroll', activateAnimation);

// Optionally, call the function once to activate animations if elements are in view on load
activateAnimation();
