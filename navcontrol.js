function updateCategoryNavTop() {
    var navBar = document.getElementById('nav-bar');
    var catNav = document.getElementById('category-navbar');
    if (navBar && catNav) {
      // Base offset: height of nav-bar
      var offset = navBar.offsetHeight;
      // If nav-bar has 'stuck', add an extra gap
      if (navBar.classList.contains('stuck')) {
        offset += window.innerHeight * 0.04; // 1vh gap
      }
      catNav.style.top = offset + 'px';
    }
  }
  
  // Make sure to run this after updating 'stuck' on nav-bar
  document.addEventListener('DOMContentLoaded', updateCategoryNavTop);
  window.addEventListener('resize', updateCategoryNavTop);
  window.addEventListener('scroll', function() {
    
    updateCategoryNavTop();
  });