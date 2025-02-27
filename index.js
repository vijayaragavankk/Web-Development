var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  loop: true,
});

// Pause/Play Button Functionality
let isPlaying = true;
const pausePlayButton = document.getElementById('pausePlayButton');
const pauseIcon = document.getElementById('pauseIcon');
const playIcon = document.getElementById('playIcon');

pausePlayButton.addEventListener('click', function () {
  if (isPlaying) {
      swiper.autoplay.stop();
      pauseIcon.classList.add('hidden');
      playIcon.classList.remove('hidden');
  } else {
      swiper.autoplay.start();
      pauseIcon.classList.remove('hidden');
      playIcon.classList.add('hidden');
  }
  isPlaying = !isPlaying;
});