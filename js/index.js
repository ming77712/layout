document.addEventListener('DOMContentLoaded', () => {
  // login block start
  const loginList = document.getElementById('loginList');
  const userBtn = document.getElementById('userBtn');
  const userWrap = document.getElementById('userWrap');
  const userSelect = document.getElementById('userSelect');
  const userCloseBtn = document.getElementById('userCloseBtn');

  userBtn.addEventListener('click', () => {
    loginList.classList.add('d-none');
    userWrap.classList.remove('d-none');
    userSelect.style.animation = 'slideInFromRight 0.5s ease-out forwards';
    cardForm.style.animation = 'slideInFromBottom 0.5s ease-out forwards';
  });

  userCloseBtn.addEventListener('click', () => {
    userWrap.classList.add('d-none');
    loginList.classList.remove('d-none');
  });

  const selectLogin = document.getElementById('selectLogin');
  const buttons = selectLogin.querySelectorAll('button');
  const cardForm = document.getElementById('cardForm');
  const accountForm = document.getElementById('accountForm');
  const cardNoticeBtn = document.getElementById('cardNoticeBtn');
  const cardNoticeWrap = document.getElementById('cardNoticeWrap');
  const noticeCloseBtn = document.getElementById('noticeCloseBtn');

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

  cardNoticeBtn.addEventListener('click', () => {
    cardNoticeWrap.classList.remove('d-none');
  });

  noticeCloseBtn.addEventListener('click', () => {
    cardNoticeWrap.classList.add('d-none');
  });

  // login block end

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
