window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    let introSection = document.getElementById('intro');
    introSection.style.backgroundPositionY = offset * 0.7 + 'px';
});
