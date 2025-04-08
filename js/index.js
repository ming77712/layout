document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  // login block start
  const loginList = document.getElementById('loginList');
  const userWrap = document.getElementById('userWrap');
  const userSelect = document.getElementById('userSelect');

  document.getElementById('userBtn').addEventListener('click', () => {
    loginList.classList.add('d-none');
    userWrap.classList.remove('d-none');
    userSelect.style.animation = 'slideInFromRight 0.5s ease-out forwards';
    cardForm.style.animation = 'slideInFromBottom 0.5s ease-out forwards';
  });

  document.getElementById('userCloseBtn').addEventListener('click', () => {
    userWrap.classList.add('d-none');
    loginList.classList.remove('d-none');
  });

  const selectLogin = document.getElementById('selectLogin');
  const buttons = selectLogin.querySelectorAll('button');
  const cardForm = document.getElementById('cardForm');
  const accountForm = document.getElementById('accountForm');
  const cardNoticeWrap = document.getElementById('cardNoticeWrap');

  selectLogin.addEventListener('click', (e) => {
    if (e.target.dataset.selectLogin !== undefined) {
      buttons.forEach((button) => {
        button.classList.remove('active');
      });
      e.target.classList.add('active');
    } else {
      return;
    }
    if (e.target.dataset.selectLogin === 'card') {
      accountForm.classList.add('d-none');
      cardForm.classList.remove('d-none');
      cardForm.style.animation = 'slideInFromBottom 0.5s ease-out forwards';
    } else if (e.target.dataset.selectLogin === 'account') {
      cardForm.classList.add('d-none');
      accountForm.classList.remove('d-none');
      accountForm.style.animation = 'slideInFromBottom 0.5s ease-out forwards';
    }
  });

  document.getElementById('cardNoticeBtn').addEventListener('click', () => {
    cardNoticeWrap.classList.remove('d-none');
  });

  document.getElementById('noticeCloseBtn').addEventListener('click', () => {
    cardNoticeWrap.classList.add('d-none');
  });

  document.querySelectorAll('.registerBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      location.href = './registeraccount.html';
    });
  });

  // login block end

  const svgContainer = document.querySelector('.svgContainer');

  svgContainer.addEventListener('mouseover', (e) => {
    const region = e.target.closest('.region');
    if (region) {
      const regionName = region.getAttribute('data-region');
      if (regionName && regionValue[regionName]) {
        const regionLabel = region.querySelector('.regionLabel');

        regionLabel.classList.add('showingValue');

        setTimeout(() => {
          regionLabel.textContent = regionValue[regionName];
          regionLabel.classList.remove('showingValue');
          regionLabel.classList.add('valueShown');
        }, 150);
      }
    }
  });

  svgContainer.addEventListener('mouseout', (e) => {
    const region = e.target.closest('.region');
    const toRegion = e.relatedTarget?.closest('.region');

    if (region && region !== toRegion) {
      const regionName = region.getAttribute('data-region');
      if (regionName) {
        const regionLabel = region.querySelector('.regionLabel');

        regionLabel.classList.add('showingValue');
        regionLabel.classList.remove('valueShown');

        setTimeout(() => {
          regionLabel.textContent = regionName;
          regionLabel.classList.remove('showingValue');
        }, 150);
      }
    }
  });

  const regionValue = {
    基隆市: 1,
    臺北市: 2,
    新北市: 3,
    桃園市: 4,
    宜蘭縣: 5,
    新竹市: 6,
    新竹縣: 7,
    苗栗縣: 8,
    臺中市: 9,
    彰化縣: 10,
    南投縣: 11,
    雲林縣: 12,
    嘉義市: 13,
    嘉義縣: 14,
    臺南市: 15,
    高雄市: 16,
    屏東縣: 17,
    臺東縣: 18,
    花蓮縣: 19,
    澎湖縣: 20,
    金門縣: 21,
    連江縣: 22,
  };

  const newsSwiper = new Swiper('.newsSwiper', {
    loop: true,

    autoplay: {
      delay: 1000,
    },

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

    autoplay: {
      delay: 1000,
    },

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
