function animateValue(finalValue) {
    const element = document.getElementById('luck-value');
    anime({
        targets: element,
        scale: [1, 1.3, 1],
        opacity: [1, 0.5, 1],
        duration: 1200,
        easing: 'easeInOutQuad',
        update: function(anim) {
            if(anim.progress > 50) {
                element.textContent = finalValue;
            }
        }
    });
}