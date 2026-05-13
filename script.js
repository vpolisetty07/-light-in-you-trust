// Light in You Trust — minimal site interactions
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Copy-to-clipboard for UPI ID
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy'); ta.remove();
      }
      const label = btn.querySelector('.copy-label');
      const original = label ? label.textContent : 'Copy';
      if (label) label.textContent = 'Copied';
      btn.classList.add('copied');
      setTimeout(() => {
        if (label) label.textContent = original;
        btn.classList.remove('copied');
      }, 1800);
    });
  });

  // Gentle fade-in for impact numerals on first view
  const nums = document.querySelectorAll('.impact-stat .num');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !e.target.dataset.done) {
        e.target.dataset.done = '1';
        e.target.style.opacity = '0';
        e.target.style.transform = 'translateY(8px)';
        e.target.style.transition = 'opacity 800ms cubic-bezier(0.2,0.7,0.2,1), transform 800ms cubic-bezier(0.2,0.7,0.2,1)';
        requestAnimationFrame(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        });
      }
    });
  }, { threshold: 0.2 });
  nums.forEach((n) => io.observe(n));

  // Mobile menu toggle (basic)
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      if (open) {
        links.style.cssText = 'display:flex;flex-direction:column;gap:8px;position:absolute;top:100%;left:0;right:0;padding:24px 32px;background:#f8f5ee;border-bottom:1px solid rgba(10,10,10,0.1)';
      } else {
        links.style.cssText = '';
      }
    });
  }
});
