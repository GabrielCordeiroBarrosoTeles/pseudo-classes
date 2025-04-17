const slides = document.querySelectorAll('.slide');
let current = 0;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showSlide(index) {
    slides[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (current > 0) showSlide(current - 1);
});
nextBtn.addEventListener('click', () => {
    if (current < slides.length - 1) showSlide(current + 1);
});

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
});

prevBtn.disabled = true;
