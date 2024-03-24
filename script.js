// JavaScript to toggle header visibility on scroll
window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.pageYOffset > document.querySelector('.hero').offsetHeight) {
        header.style.transform = 'translateY(0)';
    } else {
        header.style.transform = 'translateY(-100%)';
    }
}
