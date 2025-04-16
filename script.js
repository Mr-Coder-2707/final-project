document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.querySelector(".menu-toggle");
  let navLinks = document.querySelector(".nav-links");
  let navbar = document.getElementById("navbar");
  let logo = document.querySelector(".logo");


  menuToggle.addEventListener("click", function (event) {
      navLinks.classList.toggle("active");
      event.stopPropagation(); 
  });


  document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
          navLinks.classList.remove("active");
      }
  });


  navLinks.addEventListener("click", function (event) {
      event.stopPropagation();
  });


  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled"); 
      } else {
          navbar.classList.remove("scrolled");
      }
  });


  logo.addEventListener("click", function () {
      location.reload();
  });


  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
});





// في نهاية ملف script.js
document.addEventListener("DOMContentLoaded", function() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#f1c40f" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: "#f1c40f", 
        opacity: 0.4, 
        width: 1 
      },
      move: { 
        enable: true, 
        speed: 2, 
        direction: "none", 
        random: true, 
        straight: false, 
        out_mode: "out" 
      }
    },
    interactivity: {
      detect_on: "window", // تغيير من "canvas" إلى "window"
      events: {
        onhover: { 
          enable: true, 
          mode: "grab" // يمكنك تجربة "repulse" أو "bubble" أيضًا
        },
        onclick: { 
          enable: true, 
          mode: "push" 
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
});



