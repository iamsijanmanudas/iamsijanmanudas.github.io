
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
    // Reset all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.animation = "none";
    }

    // Show the next slide
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.animation = "slideIn 2s ease-in-out forwards";

    // Schedule the next slide
    setTimeout(showSlides, 9000); // Change slide every 5 seconds
}

// Start the slideshow
showSlides();