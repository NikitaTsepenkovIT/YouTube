const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });
  
  const swiperRec = new Swiper('.channel-slider-rec', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 2
      },
      800: {
        slidesPerView: 1
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-rec',
      prevEl: '.channel-button-prev-rec',
    },
  
  });

  const swiperFd = new Swiper('.channel-slider-fd', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-fd',
      prevEl: '.channel-button-prev-fd',
    },
  
  });

  const searchBtn = document.querySelector ('.mobile-search')
  const mobileSearch = document.querySelector ('.input-group')
  searchBtn.addEventListener('click', () => {
     mobileSearch.classList.toggle('is-open');

  });

  if(document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
    swiperRec.destroy();
    swiperFd.destroy();
  }