const starLayer = document.getElementById('stars');

const handleScroll = () => {
  const scrolled = window.pageYOffset;

  // Parallax for Background Stars
  // Moves slightly slower than scroll to create depth
  starLayer.style.transform = `translateY(${scrolled * 0.3}px)`;

  // Reveal cards when they enter view
  const cards = document.querySelectorAll('.glass-card, .project-card');
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight * 0.8) {
      card.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', handleScroll);

// Initialize positions
handleScroll();