function initCarousel() {
  let rightButton = document.querySelector('.carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow_left');
  let transform = 0;
  let currentPosition = 1;
  document.querySelector('.carousel__arrow_left').style.display = 'none';

  rightButton.addEventListener("click", function () {
    transform += document.querySelector('.carousel__inner').offsetWidth;
    document.querySelector('.carousel__inner').style.transform = 'translateX(-' + transform + 'px)';
    currentPosition++;
    hideArrows(currentPosition);
  });

  leftButton.addEventListener("click", function () {
    transform -= document.querySelector('.carousel__inner').offsetWidth;
    document.querySelector('.carousel__inner').style.transform = 'translateX(-' + transform + 'px)';
    currentPosition--;
    hideArrows(currentPosition)
  });
}

function hideArrows(currentPosition) {
  if (currentPosition <= 1) {
    document.querySelector('.carousel__arrow_left').style.display = 'none';
    document.querySelector('.carousel__arrow_right').style.display = '';
  }
  if (currentPosition > 1) {
    document.querySelector('.carousel__arrow_left').style.display = '';
  }
  if (currentPosition >= document.querySelectorAll('.carousel__slide').length) {
    document.querySelector('.carousel__arrow_right').style.display = 'none';
  }
}
