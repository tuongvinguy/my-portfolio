const video = document.getElementById('v0');

// 1. Scrubbing Logic
const scrollVideo = () => {
  const scrollPos = window.scrollY;
  const totalScroll = document.body.offsetHeight - window.innerHeight;
  const scrollFraction = scrollPos / totalScroll;

  if (video.duration) {
    video.currentTime = video.duration * scrollFraction;
  }
};

// 2. Initialize Video immediately
video.onloadeddata = () => {
  video.currentTime = 0;
  scrollVideo();
};

// Fallback in case it loads too fast
if (video.readyState >= 2) {
  scrollVideo();
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(scrollVideo);
});

// 3. Reveal Cards Logic
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.glass-card, .project-card').forEach(card => {
  observer.observe(card);
});