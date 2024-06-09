
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
      delay: 1000,
      disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


  




  