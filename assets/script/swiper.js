
const swiper01 = new Swiper('#swiper-brand', {
  loop: true,
  slidesPerView: 5,
    pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    dynamicBullets: true
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 5,
      },
  }
});


var swiper = new Swiper('.swiper-container.swiper-one', {
  loop: true,
  speed: '1400',
  spaceBetween: 20,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    dynamicBullets: true
  },
    autoplay: {
      delay: 3500,
   },
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});

