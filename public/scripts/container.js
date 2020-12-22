//DOM
const fader = document.querySelector('.img-cont-inner');
const faderImages = document.querySelectorAll('.img-cont-inner img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Public Variables
var counter = 0;
var imgWidth = 1000;

//This is where the magic happens
window.addEventListener('load', () => {
    nextBtn.addEventListener('click', () => fadeHandler('right'))
    prevBtn.addEventListener('click', () => fadeHandler('left'))
})

//Functions
function fadeHandler(direction) {
    direction = direction == 'right' ? 1 : -1;
    counter+= direction;
    fade(direction);
}

function fade() {
    if (counter > faderImages.length - 1) {
        counter = 0;
    } else if (counter < 0) {
        counter = faderImages.length - 1;
    }

    fader.style.transition = 'opacity 0.4s ease-in';
    fader.style.opacity = 0;
    setTimeout(() => {
        fader.style.transition = '';
        fader.style.transform = 'translateX(' + -(imgWidth * counter) + 'px)';
        fader.style.transition = 'opacity 0.4s ease-in';
        fader.style.opacity = 1;
    }, 500)
}