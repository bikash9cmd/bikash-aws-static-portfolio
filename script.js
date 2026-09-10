const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.right = '20px';
    nav.style.padding = '18px';
    nav.style.background = 'rgba(7,17,31,.97)';
    nav.style.border = '1px solid rgba(255,255,255,.1)';
    nav.style.borderRadius = '14px';
  });
}
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 850) nav.style.display = 'none';
}));
