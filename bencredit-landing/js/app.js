const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('#mainNav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});


document.getElementById('year').textContent = new Date().getFullYear();
