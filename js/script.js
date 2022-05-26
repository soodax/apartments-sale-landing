let offset = 0;
const sliderLine = document.querySelector('.rooms__line');

document.querySelector('.rooms__btn-next').addEventListener('click', () => {
    offset += 340;

    if (offset > 1360) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.rooms__btn-prev').addEventListener('click', () => {
    offset -= 340;

    if (offset < 0) {
        offset = 1360;
    }
    sliderLine.style.left = -offset + 'px';
})