const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });
  
  const swiperRec = new Swiper('.channel-slider-rec', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-rec',
      prevEl: '.channel-button-prev-rec',
    },
  
  });

  const swiperFd = new Swiper('.channel-slider-fd', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-fd',
      prevEl: '.channel-button-prev-fd',
    },
  
  });