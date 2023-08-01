/* globals bootstrap:false, Prism:false */

(function () {
  'use strict';

  //  Helper functions
  function escapeHtml(html) {
    return html.replace(/×/g, '&times;')
               .replace(/«/g, '&laquo;')
               .replace(/»/g, '&raquo;')
               .replace(/←/g, '&larr;')
               .replace(/→/g, '&rarr;');
  }

  // Add/remove `.navbar-transparent` on scroll; should probably be throttled later
  function addNavbarTransparentClass() {
    const navBarElement = document.querySelector('#home > .navbar');

    if (!navBarElement) {
      return;
    }

    window.addEventListener('scroll', () => {
      const scroll = document.documentElement.scrollTop;

      if (scroll > 50) {
        navBarElement.classList.remove('navbar-transparent');
      } else {
        navBarElement.classList.add('navbar-transparent');
      }
    });
  }


  // Toggle light and dark themes
  function toggleThemeMenu() {
    let themeMenu = document.querySelector('#theme-menu');

    if (!themeMenu) return;

    document.querySelectorAll('[data-bs-theme-value]').forEach(value => {
    console.log('foo');
      value.addEventListener('click', () => {
        const theme = value.getAttribute('data-bs-theme-value');
        document.documentElement.setAttribute('data-bs-theme', theme);
        console.log(theme);
      });
    });
  }

  addNavbarTransparentClass();


  toggleThemeMenu();

  // Prevent empty `a` elements or `submit` buttons from navigating away
  const targets = document.querySelectorAll('[href="#"], [type="submit"]');

  for (const element of targets) {
    element.addEventListener('click', event => {
      event.preventDefault();
    });
  }

  // Initialize popovers
  const popoverElements = document.querySelectorAll('[data-bs-toggle="popover"]');

  for (const popover of popoverElements) {
    new bootstrap.Popover(popover); // eslint-disable-line no-new
  }

  // Initialize tooltips
  const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  for (const tooltip of tooltipElements) {
    new bootstrap.Tooltip(tooltip); // eslint-disable-line no-new
  }
})();
