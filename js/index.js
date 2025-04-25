document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  // login block start
  const loginSelect = document.getElementById('loginSelect');
  const loginList = document.getElementById('loginList');
  const loginWrap = document.getElementById('loginWrap');
  const loginHeader = document.getElementById('loginHeader');
  const selectedTitle = document.getElementById('selectedTitle');
  let loginSelected = null;

  loginSelect.addEventListener('click', (e) => {
    const target = e.target.closest('[data-login-select]');
    if (target) switchLoginTarget(target);
  });

  loginSelect.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-login-select]');

    if (target !== null) {
      const paths = target.querySelectorAll('path');

      if (paths.length) {
        paths.forEach((path) => {
          path.classList.add('drawIcon');
        });
      }
    }
  });

  loginSelect.addEventListener('mouseout', (e) => {
    const target = e.target.closest('[data-login-select]');

    if (target !== null) {
      const paths = target.querySelectorAll('path');

      if (paths.length) {
        paths.forEach((path) => {
          path.classList.remove('drawIcon');
        });
      }
    }
  });

  loginSelect.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const target = e.target.closest('[data-login-select]');
      switchLoginTarget(target);
    }
  });

  function switchLoginTarget(target = 'user') {
    const loginType = target.getAttribute('data-login-select');
    selectedTitle.innerHTML = '';

    switch (loginType) {
      case 'user':
        selectedTitle.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="drawIcon bi bi-truck"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
            />
          </svg><p class="fsc-1">運送業者</p>`;
        loginSelected = 'user';
        break;

      case 'firm':
        selectedTitle.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="drawIcon bi bi-router"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707"
          />
          <path
            d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"
          />
          <path
            d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86zM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z"
          />
          <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        </svg><p class="fsc-1">車機廠商</p>`;
        loginSelected = 'firm';
        break;

      case 'admin':
        selectedTitle.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="drawIcon bi bi-key"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"
          />
          <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg><p class="fsc-1">管理單位</p>`;
        loginSelected = 'admin';
        break;

      default:
        break;
    }

    loginList.classList.add('d-none');
    loginWrap.classList.remove('d-none');
    loginHeader.style.animation = 'slideInFromRight 0.5s ease-out forwards';
    cardForm.style.animation = 'slideInFromBottom 0.5s ease-out forwards';
  }

  document
    .getElementById('loginHeaderCloseBtn')
    .addEventListener('click', () => {
      loginWrap.classList.add('d-none');
      loginList.classList.remove('d-none');
      cardNoticeWrap.classList.add('d-none'); //提示框關閉
    });

  document
    .getElementById('loginHeaderCloseBtn')
    .addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        loginWrap.classList.add('d-none');
        loginList.classList.remove('d-none');
        cardNoticeWrap.classList.add('d-none'); //提示框關閉
      }
    });

  const loginType = document.getElementById('loginType');
  const buttons = loginType.querySelectorAll('button');
  const cardForm = document.getElementById('cardForm');
  const accountForm = document.getElementById('accountForm');
  const cardNoticeWrap = document.getElementById('cardNoticeWrap');

  loginType.addEventListener('click', (e) => {
    cardNoticeWrap.classList.add('d-none'); //提示框關閉
    if (e.target.dataset.loginType !== undefined) {
      buttons.forEach((button) => {
        button.classList.remove('active');
      });
      e.target.classList.add('active');
    } else {
      return;
    }
    if (e.target.dataset.loginType === 'card') {
      accountForm.classList.add('d-none');
      cardForm.classList.remove('d-none');
      cardForm.style.animation = 'slideInFromBottom 0.5s ease-out forwards';
    } else if (e.target.dataset.loginType === 'account') {
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

  document.getElementById('noticeCloseBtn').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      cardNoticeWrap.classList.add('d-none');
    }
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
      delay: 4000,
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
      delay: 4000,
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
