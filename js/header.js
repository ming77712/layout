document.addEventListener('DOMContentLoaded', () => {
  const backdropBlur = document.querySelector('.backdropBlur');
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
});
