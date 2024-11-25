document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    function changeSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'block';
    }

    setInterval(changeSlide, 5000); // เปลี่ยนภาพทุก 5 วินาที
});
