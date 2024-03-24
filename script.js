window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.pageYOffset > document.querySelector('.hero').offsetHeight) {
        header.style.transition = 'transform 0.3s ease';
        header.style.transform = 'translateY(0)';
    } else {
        header.style.transition = 'transform 0.3s ease';
        header.style.transform = 'translateY(-100%)';
    }
});
