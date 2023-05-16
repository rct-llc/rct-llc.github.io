window.addEventListener('DOMContentLoaded', function(domEvent) {
  var siteSelectorButton = document.getElementById('site-selector-button');
  var selectorFlag = document.getElementById('flag');
  var selectorIdentifier = document.getElementById('identifier');
  var siteOptions = document.querySelectorAll('.options');
  if (siteSelectorButton) {
    var siteSelector = document.getElementById('site-selector');
    siteSelectorButton.addEventListener('click', function(event) {
      siteSelector.classList.toggle('active');
    });
  }
  if (siteOptions.length > 0) {
    for (var i = 0; i < siteOptions.length; i++) {
      siteOptions[i].addEventListener('click', function(event) {
        var ident = event.currentTarget.dataset.identifier;
        siteSelector.classList.remove('active');
        if (identifier.innerHTML === ident) {
          return;
        }
        var domain = event.currentTarget.dataset.domain;
        var flag = event.currentTarget.children[0].firstElementChild.firstElementChild.innerText;
        selectorIdentifier.innerHTML = ident;
        selectorFlag.innerText = flag;
        var swapLinks = document.querySelectorAll('.swap-link');
        for (var j = 0; j < swapLinks.length; j++) {
          var newUrl = new URL(swapLinks[j].href);
          newUrl.hostname = domain;
          swapLinks[j].href = newUrl.href;
        }
      }, { capture: true });
    }
  }
});
