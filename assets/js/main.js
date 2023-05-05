// alert('woah');
// console.log('hi');
window.addEventListener('DOMContentLoaded', function(event) {
  var menuItem = document.querySelectorAll('.dropdown-button');
  if (menuItem) {
    for (var i = 0; i < menuItem.length; i++) {
      var button = menuItem[i];
      button.addEventListener('click', function(event) {
        event.target.classList.toggle('dropdown-active');
      });
      button.addEventListener('blur', function(event) {
        event.target.classList.remove('dropdown-active');
      });
    }
  }
});
