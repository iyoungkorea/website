document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("nav-bar");
    const trigger = document.getElementById("nav-trigger");
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          navBar.classList.add("stuck");
        } else {
          navBar.classList.remove("stuck");
        }
      },
      { rootMargin: "0px 0px 0px 0px", threshold: [0] }
    );
  
    if (trigger) observer.observe(trigger);
  });