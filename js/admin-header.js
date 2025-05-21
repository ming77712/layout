document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const tabsContainer = document.querySelector('.tabs');

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      showTab(e.target.dataset.tab);
    });
  });

  tabsContainer.addEventListener('click', (e) => {
    const li = e.target.closest('.menu-section ul li');
    if (li) {
      document.querySelectorAll('.menu-section ul li').forEach((item) => {
        item.classList.remove('active');
      });

      li.classList.add('active');
    }
  });

  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach((tab) => {
      tab.style.display = 'none';
    });

    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';
    event.target.classList.add('active');
  }
});
