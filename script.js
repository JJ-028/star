// Champ d'étoiles discret en fond de page, dessiné une seule fois
(function () {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
  }

  function drawStars() {
    resize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const starCount = Math.floor((canvas.width * canvas.height) / 9000);
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.2 + 0.2;
      const alpha = Math.random() * 0.6 + 0.2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240, 237, 228, ${alpha})`;
      ctx.fill();
    }
  }

  drawStars();

  if (!prefersReducedMotion) {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(drawStars, 200);
    });
  }
})();
