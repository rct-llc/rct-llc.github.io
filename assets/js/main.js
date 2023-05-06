// alert('woah');
// console.log('hi');
window.addEventListener('DOMContentLoaded', function(domEvent) {
  var siteSelectorButton = document.getElementById('site-selector-button');
  if (siteSelectorButton) {
    var siteSelector = document.getElementById('site-selector');
    siteSelectorButton.addEventListener('click', function(event) {
      siteSelector.classList.toggle('active');
    }, true);
    // siteSelectorButton.addEventListener('blur', function(event) {
    //   siteSelector.classList.remove('active');
    // }, true);
  }
  // var menuItem = document.querySelectorAll('.dropdown-button');
  // if (menuItem) {
  //   for (var i = 0; i < menuItem.length; i++) {
  //     var button = menuItem[i];
  //     button.addEventListener('click', function(event) {
  //       event.target.classList.toggle('dropdown-active');
  //     });
  //     button.addEventListener('blur', function(event) {
  //       event.target.classList.remove('dropdown-active');
  //     });
  //   }
  // }
});
