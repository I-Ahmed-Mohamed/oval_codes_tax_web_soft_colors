/**
 * ========================================
 * UTILITY FUNCTIONS
 * ========================================
 */

/**
 * Load data from localStorage with fallback
 */
function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : structuredClone(fallback);
  } catch (e) {
    return structuredClone(fallback);
  }
}

/**
 * Persist data to localStorage
 */
function persist() {
  localStorage.setItem('oval_products_v6', JSON.stringify(products));
  localStorage.setItem('oval_clients_v6', JSON.stringify(clients));
}

/**
 * Escape HTML special characters
 */
function esc(s) {
  return String(s ?? '')
    .replace(/[&<>"]/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
    }[m]));
}

/**
 * Normalize Arabic text for searching
 */
function norm(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/أ|إ|آ/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .trim();
}

/**
 * Get section name for product
 */
function sectionOf(p) {
  const n = norm((p.name || '') + ' ' + (p.brand || ''));
  if (n.includes('كارفور')) return 'كارفور';
  if (n.includes('فاليو')) return 'فاليو';
  if (n.includes('بيج') || n.includes('big')) return 'بيج ايج';
  return p.brand === 'بيج ايج' ||
    p.brand === 'فاليو' ||
    p.brand === 'كارفور'
    ? p.brand
    : 'أخرى';
}

/**
 * Get color classification for product
 */
function colorOf(p) {
  const n = norm((p.color || '') + ' ' + (p.name || ''));
  if (n.includes('احمر')) return 'أحمر';
  if (n.includes('بلدي') || n.includes('بلدى')) return 'بلدي';
  if (n.includes('ابيض')) return 'أبيض';
  return 'غير محدد';
}

/**
 * Match item against search query
 */
function matchItem(x, q) {
  q = norm(q);
  if (!q) return true;
  return norm(Object.values(x).join(' ')).includes(q);
}

/**
 * Copy text to clipboard
 */
function copyText(t) {
  navigator.clipboard
    ?.writeText(t)
    .then(() => toast('تم النسخ'))
    .catch(() => {
      const ta = document.createElement('textarea');
      ta.value = t;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      toast('تم النسخ');
    });
}

/**
 * Show toast notification
 */
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1600);
}

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark-mode');
  localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
  updateThemeButton();
}

/**
 * Initialize theme from localStorage
 */
function initTheme() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme-preference');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.classList.add('dark-mode');
  } else {
    html.classList.remove('dark-mode');
  }
  updateThemeButton();
}

/**
 * Update theme button icon
 */
function updateThemeButton() {
  const button = document.getElementById('themeToggle');
  if (button) {
    const isDark = document.documentElement.classList.contains('dark-mode');
    button.textContent = isDark ? '☀️' : '🌙';
  }
}

/**
 * Initialize header auto-hide on scroll
 */
function initHeaderScroll() {
  let lastScrollTop = 0;
  const header = document.querySelector('.header');

  if (!header) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Scrolling down - hide header
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      header.classList.add('hidden');
    }
    // Scrolling up - show header
    else {
      header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}
