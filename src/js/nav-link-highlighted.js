document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop();
  const homePage = 'index.html';

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage && homePage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});