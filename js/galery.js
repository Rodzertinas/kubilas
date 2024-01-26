
let currentIndex = 0;
let edgeReached = false;
let isTransitioning = false;

function showSlide(index) {
    if (!isTransitioning) {
        const slider = document.querySelector('.slider');
        const totalSlides = document.querySelectorAll('.slider img').length;

        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const translation = -currentIndex * 100 + '%';
  
        // const translation = currentIndex * 100 + '%';

        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = 'translateX(' + translation + ')';
        toggleButtons();
        updateBullets();

        isTransitioning = true;
    }
}



function toggleButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalSlides = document.querySelectorAll('.imagees').length;

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === totalSlides - 1 || edgeReached ? 'none' : 'block';
}

function updateBullets() {
    const bulletsContainer = document.querySelector('.bullets');
    const totalSlides = document.querySelectorAll('.imagees').length;

    // Išvalome esamas bullets
    bulletsContainer.innerHTML = '';

    // Sukuriame naujus bullets
    for (let i = 0; i < totalSlides; i++) {
        const bullet = document.createElement('li');
        bullet.classList.add('bullet');
        bullet.addEventListener('click', () => showSlide(i));
        if (i === currentIndex) {
            bullet.classList.add('active');
        }
        bulletsContainer.appendChild(bullet);
    }
}

function prevSlide() {
    edgeReached = false;
    showSlide(currentIndex - 1);
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slider img').length;
    if (currentIndex === totalSlides - 1) {
        edgeReached = true;
    }
    showSlide(currentIndex + 1);
}

document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.slider');

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    slider.addEventListener('transitionend', function () {
        isTransitioning = false;
    });

    toggleButtons();
    updateBullets();
});
