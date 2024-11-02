function navscroll() {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? document.querySelector("nav").classList.add("nav-background") : document.querySelector("nav").classList.remove("nav-background"), document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? document.getElementById("back_to_top").style.opacity = "1" : document.getElementById("back_to_top").style.opacity = "0"
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
          slidesPerView: 2,
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
            slidesPerView: 6,
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
