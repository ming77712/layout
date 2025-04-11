document.addEventListener('DOMContentLoaded', () => {
  const backdropBlur = document.querySelector('.backdropBlur');
  const infoWrapItem = document.querySelector('.infoWrapItem');
  const headerInfoWrap = document.querySelector('.headerInfoWrap');

  infoWrapItem.addEventListener('mouseenter', () => {
    headerInfoWrap.classList.add('active');
    backdropBlur.style.display = 'block';
  });

  infoWrapItem.addEventListener('focus', () => {
    headerInfoWrap.classList.add('active');
    backdropBlur.style.display = 'block';
  });

  headerInfoWrap.addEventListener('mouseleave', (e) => {
    if (!infoWrapItem.contains(e.relatedTarget)) {
      headerInfoWrap.classList.remove('active');
      backdropBlur.style.display = 'none';
    }
  });

  document.querySelector('.mainTop').addEventListener('touchstart', () => {
    if (headerInfoWrap.classList.has('active'))
      headerInfoWrap.classList.remove('active');
  });

  document.addEventListener('touchstart', (e) => {
    if (
      !headerInfoWrap.contains(e.target) &&
      headerInfoWrap.classList.contains('active')
    ) {
      headerInfoWrap.classList.remove('active');
    }
  });

  document.getElementById('AR').addEventListener('focus', () => {
    headerInfoWrap.classList.remove('active');
    backdropBlur.style.display = 'none';
  });
});
