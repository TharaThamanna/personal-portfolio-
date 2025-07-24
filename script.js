// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Typing Effect
const typed = new Typed("#typing-text", {
  strings: ["Web Developer", "UI/UX Designer", "Tech Enthusiast"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Scroll Reveal
ScrollReveal().reveal('.home-content', { delay: 300, origin: 'bottom', distance: '50px', duration: 800 });
ScrollReveal().reveal('.section h2', { delay: 200, origin: 'top', distance: '30px', duration: 700 });
ScrollReveal().reveal('.skills li, .project-card, #contact-form', { interval: 150 });

// EmailJS Contact Form
const form = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
    .then(() => {
      statusText.textContent = "Message sent successfully!";
      statusText.style.color = "green";
      form.reset();
    }, () => {
      statusText.textContent = "Failed to send message!";
      statusText.style.color = "red";
    });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filter;
    projectCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Resume Modal
const resumeBtn = document.getElementById('resume-btn');
const modal = document.getElementById('resume-modal');
const closeBtn = document.querySelector('.close-btn');
resumeBtn.addEventListener('click', () => modal.style.display = 'flex');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
