let preloaderX = document.querySelector('.preloaderX');
let slideShowX = document.querySelector('.slideShowX');
let thumbnailsX = document.querySelector('.thumbnailsX');

let captionX = document.querySelector('.captionX');
let nextX = document.querySelector('.nextX');
let prevX = document.querySelector('.prevX');

let imagesX = ["bmw100.jpg", "bmw101.jpg", "bmw102.jpg", "bmw103.jpg", "bmw104.jpg", "bmw105.jpg", "bmw106.jpg"];
let captionsX = ['BMw blue', 'BMW white', 'BMW 5 Concept', 'bmw blue', 'bmw red', 'bmw red 2', 'programming'];

let slideIndex = 0;
let currentImageX = '';
let autoSlideShow;

function changeBgImage() {
    // check slideIndex X-Team
    if (slideIndex < 0) {
        slideIndex = imagesX.length - 1;
    } else if (slideIndex > imagesX.length - 1) {
        slideIndex = 0;
    }
    // change background and caption X-Team
    currentSlideX = "url('assets/" + imagesX[slideIndex] + "')";
    slideShowX.style.backgroundImage = currentSlideX;
    captionX.textContent = captionsX[slideIndex];
}

function nextSlide() {
    clearInterval(autoSlideShow);
    ++slideIndex;
    changeBgImage();
}

function prevSlide() {
    clearInterval(autoSlideShow);
    --slideIndex;
    changeBgImage();
}

function autoMotion() {
    ++slideIndex;
    changeBgImage();
}

// Start X-Team
// preload imagesX for SlideShow X-Team
for (let i = 0; i < imagesX.length; ++i) {
    let img = new Image();
    img.src = 'assets/' + imagesX[i];
}

// load only first image & caption X-Team
changeBgImage();

// remove preloaderX and load slideShowX X-Team
window.addEventListener('load', function () {
    preloaderX.style.display = 'none';
    slideShowX.style.display = 'flex';
    this.console.log('All Assets are loaded');

    for (let i = 0; i < imagesX.length; ++i) {
        // load thumbnails images in place X-Team
        let divX = document.createElement('div');
        divX.classList = 'thumbX';
        thumbnailsX.appendChild(divX);
        // thumbnailsX.innerHTML += '<div class="thumbX"></div>';

        let thumbDivX = document.querySelector('.thumbnailsX div:nth-child(' + (i + 1) + ')');
        thumbDivX.style.backgroundImage = "url('assets/" + imagesX[i] + "')";

        // onClick thumbnails X-Team
        thumbDivX.onclick = function () {
            clearInterval(autoSlideShow);
            slideIndex = i;
            changeBgImage();
        }
    }
});

// autoSlideShow X-Team
autoSlideShow = setInterval(autoMotion, 2500); // Change image every 2.5 seconds

// setTimeout(() => {
//     preloaderX.style.display = 'none';
//     slideShowX.style.display = 'block';
// }, 2000);