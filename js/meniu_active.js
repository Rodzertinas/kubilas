
document.addEventListener('DOMContentLoaded', function () {
  var navItems = document.querySelectorAll('.nav__item');

  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Pašaliname 'active' klasę iš visų meniu elementų
      navItems.forEach(function (navItem) {
        navItem.classList.remove('active');
      });

      // Pridedame 'active' klasę paspaustam meniu elementui
      item.classList.add('active');
    });
  });
});
