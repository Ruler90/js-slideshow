const slides = document.querySelectorAll('.mainSlides');
const time = +getComputedStyle(document.querySelector('.animation--time')).animationDuration.replace('s', '') * 1000;

function nextSlide () {
  for (let i = 0; i < slides.length; i++) {
    if (!slides[slides.length - 1].classList.contains('slidePic--hidden')) {
      setTimeout(function () { slides[slides.length - 1].classList.add('slidePic--hidden') }, time);
      slides[slides.length - 1].classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { slides[slides.length - 1].classList.remove('animation', 'animation--time', 'animation__slideFromZeroToLeft') }, time);
      slides[0].classList.remove('slidePic--hidden');
      slides[0].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft');
      setTimeout(function () { slides[0].classList.remove('animation', 'animation--time', 'animation__slideFromRightToLeft') }, time);
      break;
    }
    if (!slides[i].classList.contains('slidePic--hidden')) {
      slides[i].classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { slides[i].classList.remove('animation', 'animation--time', 'animation__slideFromZeroToLeft') }, time);
      setTimeout(function () { slides[i].classList.add('slidePic--hidden') }, time);
      slides[i + 1].classList.remove('slidePic--hidden');
      slides[i + 1].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft');
      setTimeout(function () { slides[i + 1].classList.remove('animation', 'animation--time', 'animation__slideFromRightToLeft') }, time);
      break;
    }
  }
  clearInterval(autoChange);
  autoChange = setInterval(nextSlide, 4000);
}

let autoChange = setInterval(nextSlide, 4000);

function previousSlide () {
  for (let i = 0; i < slides.length; i++) {
    if (!slides[0].classList.contains('slidePic--hidden')) {
      setTimeout(function () { slides[0].classList.add('slidePic--hidden') }, time);
      slides[0].classList.add('animation', 'animation--time', 'animation__slideFromZeroToRight');
      setTimeout(function () { slides[0].classList.remove('animation', 'animation--time', 'animation__slideFromZeroToRight') }, time);
      slides[slides.length - 1].classList.remove('slidePic--hidden');
      slides[slides.length - 1].classList.add('animation', 'animation--time', 'animation__slideFromLeftToRight');
      setTimeout(function () { slides[slides.length - 1].classList.remove('animation', 'animation--time', 'animation__slideFromLeftToRight') }, time);
      break;
    }
    if (!slides[i].classList.contains('slidePic--hidden')) {
      setTimeout(function () { slides[i].classList.add('slidePic--hidden') }, time);
      slides[i].classList.add('animation', 'animation--time', 'animation__slideFromZeroToRight');
      setTimeout(function () { slides[i].classList.remove('animation', 'animation--time', 'animation__slideFromZeroToRight') }, time)
      slides[i - 1].classList.remove('slidePic--hidden');
      slides[i - 1].classList.add('animation', 'animation--time', 'animation__slideFromLeftToRight');
      setTimeout(function () { slides[i - 1].classList.remove('animation', 'animation--time', 'animation__slideFromLeftToRight') }, time);
      break;
    }
  }
  clearInterval(autoChange);
  autoChange = setInterval(nextSlide, 4000);
}
