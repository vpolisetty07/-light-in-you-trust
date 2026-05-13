// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Animated counters
const counters = document.querySelectorAll('.impact-number');
const animate = (el) => {
  const target = +el.dataset.count;
  const duration = 1800;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString() + (target >= 1000 ? '+' : '+');
  };
  requestAnimationFrame(tick);
};
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animate(e.target);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => io.observe(c));

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});
links?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('nav-open'));
});
