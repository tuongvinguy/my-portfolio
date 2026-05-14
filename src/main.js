const stars = document.querySelectorAll('.doodle-star');

const handleScroll = () => {
  const scrolled = window.pageYOffset;

  // Make the stars drift at different speeds for that 3D book feel
  stars.forEach((star, index) => {
    const speed = (index + 1) * 0.2;
    star.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
  });

  // Simple Reveal Logic
  const cards = document.querySelectorAll('.glass-card, .project-card');
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight * 0.85) {
      card.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Run once on load