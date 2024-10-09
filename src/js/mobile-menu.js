(() => {
  const mobileMenu = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-btn]');
  const linksEl = document.querySelectorAll('[data-link]');
  const body = document.querySelector('[data-page]');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('active');

    body.classList.toggle('no-scroll');
  };

  const closeMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    if (!isMenuOpen) return;
    openMenuBtn.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('active');

    body.classList.remove('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  linksEl.forEach(function (item) {
    if (!item) {
      return;
    }
    item.addEventListener('click', closeMenu);
  });

  window.matchMedia('(min-width: 744px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('active');
    body.classList.remove('no-scroll');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();
