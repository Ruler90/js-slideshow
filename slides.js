/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const slides = document.querySelectorAll('.mainSlides');

function nextSlide () {
  for (let i = 0; i < slides.length; i++) {
    if (!slides[slides.length - 1].classList.contains('bigPic--hidden')) {
      setTimeout(function () { slides[slides.length - 1].classList.add('bigPic--hidden') }, 700);
      slides[slides.length - 1].classList.add('animation__slideFromZeroToLeft');
      setTimeout(function () { slides[slides.length - 1].classList.remove('animation__slideFromZeroToLeft') }, 700);
      slides[0].classList.remove('bigPic--hidden');
      slides[0].classList.add('animation__slideFromRightToLeft');
      setTimeout(function () { slides[0].classList.remove('animation__slideFromRightToLeft') }, 700);
      break;
    }
    if (!slides[i].classList.contains('bigPic--hidden')) {
      slides[i + 1].classList.remove('bigPic--hidden');
      slides[i + 1].classList.add('animation__slideFromRightToLeft');
      setTimeout(function () { slides[i + 1].classList.remove('animation__slideFromRightToLeft') }, 700);
      setTimeout(function () { slides[i].classList.add('bigPic--hidden') }, 700);
      slides[i].classList.add('animation__slideFromZeroToLeft');
      setTimeout(function () { slides[i].classList.remove('animation__slideFromZeroToLeft') }, 700);
      break;
    }
  }
  clearInterval(autoChange);
  autoChange = setInterval(nextSlide, 4000);
}

let autoChange = setInterval(nextSlide, 4000);

function previousSlide () {
  for (let i = 0; i < slides.length; i++) {
    if (!slides[0].classList.contains('bigPic--hidden')) {
      setTimeout(function () { slides[0].classList.add('bigPic--hidden') }, 700);
      slides[0].classList.add('animation__slideFromZeroToRight');
      setTimeout(function () { slides[0].classList.remove('animation__slideFromZeroToRight') }, 700);
      slides[slides.length - 1].classList.remove('bigPic--hidden');
      slides[slides.length - 1].classList.add('animation__slideFromLeftToRight');
      setTimeout(function () { slides[slides.length - 1].classList.remove('animation__slideFromLeftToRight') }, 700);
      break;
    }
    if (!slides[i].classList.contains('bigPic--hidden')) {
      setTimeout(function () { slides[i].classList.add('bigPic--hidden') }, 700);
      slides[i].classList.add('animation__slideFromZeroToRight');
      setTimeout(function () { slides[i].classList.remove('animation__slideFromZeroToRight') }, 700)
      slides[i - 1].classList.remove('bigPic--hidden');
      slides[i - 1].classList.add('animation__slideFromLeftToRight');
      setTimeout(function () { slides[i - 1].classList.remove('animation__slideFromLeftToRight') }, 700);
      break;
    }
  }
  clearInterval(autoChange);
  autoChange = setInterval(nextSlide, 4000);
}
