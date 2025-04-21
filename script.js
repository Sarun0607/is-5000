// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const next =
    document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
// Initialize theme on load
document.body.setAttribute(
  'data-theme',
  localStorage.getItem('theme') || 'light'
);

// AOS INITIALIZATION
AOS.init({
  duration: 800,
  once: true,
});

// SET SKILL BAR LEVELS
document.querySelectorAll('.skill-bar').forEach((bar) => {
  const level = bar.getAttribute('data-level') || '0%';
  bar.style.setProperty('--level', level);
});
// Add this script to your HTML file to enable the scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for scroll animations
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });

  // Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
