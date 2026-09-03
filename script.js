/**
 * AskFolake Site Scripts
 * Utility functions for site interactivity
 */

/**
 * Toggle mobile navigation menu
 */
function toggleMenu(button) {
  const menu = document.getElementById('mobileMenu');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  menu.style.display = isExpanded ? 'none' : 'block';
}
