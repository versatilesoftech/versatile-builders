document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat-item h3');

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      counter.innerText = '0'; // Reset before animating again
      const speed = 200;

      const updateCount = () => {
        const current = +counter.innerText.replace('+', '');
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target + '+';
        }
      };

      updateCount();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
