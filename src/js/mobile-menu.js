(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  // Guard against missing elements
  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) return;

  const toggleMenu = () => {
    const isOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.classList.toggle('is-open');
    mobileMenu.toggleAttribute('hidden');

  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Auto-close menu on wide screens
  const mediaQuery = window.matchMedia('(min-width: 1440px)');
  mediaQuery.addEventListener('change', e => {
    if (e.matches) {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });
})();
