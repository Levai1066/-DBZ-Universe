const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  console.log('Toggle clicked');
  navLinks.classList.toggle("show");
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu
    navLinks.classList.remove('show');
  });
});

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("click", () => {
  document.querySelector("#characters").scrollIntoView({
    behavior:"smooth"
  });
});
