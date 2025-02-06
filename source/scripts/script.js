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

 

document.getElementById("back_to_top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});


  