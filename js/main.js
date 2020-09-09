// Nav change color on scroll
const navbar = document.querySelector('.custom-nav');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// Mobile nav dissapears after clicked
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("navbar-toggler-icon")) {
      document.getElementById("responsiveNav").classList.toggle("show");
    } else if (event.target.classList.contains("nav-link")) {
      document.getElementById("responsiveNav").classList.remove("show");
    }
  });
  