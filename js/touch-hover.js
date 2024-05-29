document.addEventListener('DOMContentLoaded', function() {
    var touchElements = document.querySelectorAll('nav ul li a, .animated-button');

    touchElements.forEach(function(element) {
        element.addEventListener('touchstart', function() {
            element.classList.add('touch-hover');
        });

        element.addEventListener('touchend', function() {
            element.classList.remove('touch-hover');
        });
    });
});
