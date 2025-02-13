document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel', // Slayt növü: 'carousel', 'slider', 'cover-flow'
    startAt: 0,       // Başlanğıc slayt indeksi
    perView: 1,       // Görünən slayd sayı
    autoplay: 3000,   // Avtomatik keçid (millisaniyə)
    hoverpause: true  // Keçid zamanı durdurma
  }).mount();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySviper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


