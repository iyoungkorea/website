document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("toTopBtn");
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 150) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
  
    btn.onclick = function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  });