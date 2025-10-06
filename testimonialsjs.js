let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length -1;
    else slideIndex = index;

    slides.forEach(slide => (slide.style.display = "none"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex].style.display = "flex";
    dots[slideIndex].classList.add("active");
}

function nextSlide(n) {
    showSlide(slideIndex + n);
}

document.querySelector(".prev").addEventListener("click", () => nextSlide(-1));
document.querySelector(".next").addEventListener("click", () => nextSlide(1));

function autoSlide() {
    nextSlide(1);
    setTimeout(autoSlide, 5000); // sekunder
}

showSlide(slideIndex);
autoSlide();

