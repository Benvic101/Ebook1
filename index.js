  const bar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  });

  // ── Sticky bar: show after hero
  const sticky = document.getElementById('stickyBar');
  const heroH = document.querySelector('.hero').offsetHeight;
  window.addEventListener('scroll', () => {
    sticky.classList.toggle('show', window.scrollY > heroH * 0.6);
  });

  // ── Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));

  // ── FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });

  // ── Button ripple effect
  document.querySelectorAll('a').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;width:80px;height:80px;border-radius:50%;
        background:rgba(255,255,255,0.3);transform:scale(0);
        animation:ripple 0.5s linear;pointer-events:none;
        left:${e.offsetX-40}px;top:${e.offsetY-40}px;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });

  const style = document.createElement('style');
  style.textContent = `@keyframes ripple{to{transform:scale(3);opacity:0;}}`;
  document.head.appendChild(style);