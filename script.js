// Typing effect for the hero tagline
function typeText(el, text, speed = 28) {
  if (!el) return;
  let i = 0;
  el.textContent = '';
  (function tick() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(tick, speed);
    }
  })();
}

document.addEventListener('DOMContentLoaded', () => {
  const headerTyping = document.getElementById('headerTyping');
  typeText(headerTyping, "Building clean, responsive, and thoughtful web experiences.");

  const more = document.getElementById('more');
  const dots = document.getElementById('dots');
  if (more) more.classList.remove('expanded');
  if (dots) dots.style.display = 'block';
});

function readMore() {
  const more = document.getElementById('more');
  const dots = document.getElementById('dots');
  const btn = document.getElementById('readMoreBtn');
  if (!more) return;

  const isExpanded = more.classList.toggle('expanded');
  if (dots) dots.style.display = isExpanded ? 'none' : 'block';
  if (btn) btn.textContent = isExpanded ? 'Show less' : 'Discover more';
}
