window.addEventListener('scroll', function () {
    const banner = document.getElementById('sticky-banner');
    const siteSwitcher = document.getElementById('site-switcher');
    const languageSwitcher = document.getElementById('language-switcher');
    const stopPoint = 100;
  
    if (window.scrollY >= stopPoint) {
      banner.style.position = 'absolute';
      banner.style.top = stopPoint + 'px';
  
      siteSwitcher.style.position = 'absolute';
      siteSwitcher.style.top = '20px'; // maintain offset
      siteSwitcher.style.left = '30px';
  
      languageSwitcher.style.position = 'absolute';
      languageSwitcher.style.top = '20px';
      languageSwitcher.style.right = '30px';
    } else {
      banner.style.position = 'fixed';
      banner.style.top = '0';
  
      siteSwitcher.style.position = 'fixed';
      siteSwitcher.style.top = '20px';
      siteSwitcher.style.left = '30px';
      
  
      languageSwitcher.style.position = 'fixed';
      languageSwitcher.style.top = '20px';
      languageSwitcher.style.right = '30px';
    }
  });