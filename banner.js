window.addEventListener('DOMContentLoaded', function () {
  // Site switcher logic
  const currentURL = window.location.pathname;
  const switchLink = document.getElementById('switch-link');
  const switchLogo = document.getElementById('switch-logo');

  if (switchLink && switchLogo) {
    if (currentURL.includes('/Logistics/')) {
      switchLink.href = '../index.html';
      switchLogo.src = 'images/logoB.png';
      switchLogo.alt = 'Go to Main Site';
    } else {
      switchLink.href = 'Logistics/index.html';
      switchLogo.src = 'images/logoA.png';
      switchLogo.alt = 'Go to Logistics Site';
    }
  }
});



window.addEventListener('scroll', function () {
    const banner = document.getElementById('sticky-banner');
    const siteSwitcher = document.getElementById('site-switcher');
    const languageSwitcher = document.getElementById('language-switcher');
    const stopPoint = 90;
  
    if (window.scrollY >= stopPoint) {
      banner.style.position = 'absolute';
      banner.style.top = stopPoint + 'px';
  
      siteSwitcher.style.position = 'absolute';
      siteSwitcher.style.top = '2%'; // maintain offset
      siteSwitcher.style.left = '2.5%';
  
      languageSwitcher.style.position = 'absolute';
      languageSwitcher.style.top = '2%';
      languageSwitcher.style.right = '2.5%';
    } else {
      banner.style.position = 'fixed';
      banner.style.top = '0';
  
      siteSwitcher.style.position = 'fixed';
      siteSwitcher.style.top = '2%';
      siteSwitcher.style.left = '2.5%';
      
  
      languageSwitcher.style.position = 'fixed';
      languageSwitcher.style.top = '2%';
      languageSwitcher.style.right = '2.5%';
    }
  });