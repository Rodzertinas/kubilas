  
    document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active_footer_img", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); 

  document.querySelector(".footer_slider-main").addEventListener("mouseover", function () {
    clearInterval(autoPlay);
  });

  document.querySelector(".footer_slider-main").addEventListener("mouseout", function () {
    autoPlay = setInterval(nextSlide, 1000);
  });
});

