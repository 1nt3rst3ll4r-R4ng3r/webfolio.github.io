document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.footer-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 6000); // 4 seconds display + 2 seconds transition
});
