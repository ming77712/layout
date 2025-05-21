const dashboardInfoItem = document.querySelectorAll('.dashboardInfoItem');
const dashboardInfoCover = document.querySelectorAll('.dashboardInfoCover');

dashboardInfoItem.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    dashboardInfoCover[index].classList.remove('d-none');
  });
  item.addEventListener('mouseout', () => {
    dashboardInfoCover[index].classList.add('d-none');
  });
});
