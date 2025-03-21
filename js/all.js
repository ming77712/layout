document.addEventListener('DOMContentLoaded', () => {
  // header block start
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
    // 如果滑鼠進入 .infoWrapItem，則不移除 active
    if (!infoWrapItem.contains(event.relatedTarget)) {
      headerInfoWrap.classList.remove('active');
      backdropBlur.style.display = 'none';
    }
  });
  // header block end

  // login block start
  const loginList = document.getElementById('loginList');
  const userBtn = document.getElementById('userBtn');
  const userWrap = document.getElementById('userWrap');
  const userCloseBtn = document.getElementById('userCloseBtn');

  userBtn.addEventListener('click', () => {
    loginList.classList.add('d-none');
    userWrap.classList.remove('d-none');
  });

  userCloseBtn.addEventListener('click', () => {
    userWrap.classList.add('d-none');
    loginList.classList.remove('d-none');
  });

  const selectLogin = document.getElementById('selectLogin');
  const buttons = selectLogin.querySelectorAll('button');
  const cardForm = document.getElementById('cardForm');
  const accountForm = document.getElementById('accountForm');

  selectLogin.addEventListener('click', (e) => {
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    e.target.classList.add('active');
    if (e.target.dataset.selectLogin === 'card') {
      accountForm.classList.add('d-none');
      cardForm.classList.remove('d-none');
    } else {
      cardForm.classList.add('d-none');
      accountForm.classList.remove('d-none');
    }
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
