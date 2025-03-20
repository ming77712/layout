document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const backdropBlur = document.querySelector('.backdrop-blur');
  const infoWrapItem = document.querySelector('.infoWrapItem');
  const headerInfoWrap = document.querySelector('.headerInfoWrap');

  infoWrapItem.addEventListener('mouseenter', function () {
    headerInfoWrap.classList.add('active');
    backdropBlur.style.display = 'block';
  });

  headerInfoWrap.addEventListener('mouseenter', function () {
    headerInfoWrap.classList.add('active');
  });

  headerInfoWrap.addEventListener('mouseleave', function (event) {
    // 如果滑鼠進入 .infoWrapItem，則不移除 active 類別
    if (!infoWrapItem.contains(event.relatedTarget)) {
      headerInfoWrap.classList.remove('active');
      backdropBlur.style.display = 'none';
    }
  });

  const newsSwiper = new Swiper('.newsSwiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const infoSwiper = new Swiper('.infoSwiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});
