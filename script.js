// Diseño con IA para programadores — interacciones

// 1. Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 5, 4) * 60}ms`;
  io.observe(el);
});

// 2. Nav border on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// 3. Class accordion
document.querySelectorAll('.class').forEach((item) => {
  const head = item.querySelector('.class__head');
  head.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.class.is-open').forEach((open) => {
      open.classList.remove('is-open');
      open.querySelector('.class__head').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('is-open');
      head.setAttribute('aria-expanded', 'true');
    }
  });
});
