const video = document.getElementById('v0');

// 1. Video Scrubbing (Scroll sync)
function scrubVideo() {
  const scrollPos = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollPos / totalHeight;

  if (video.duration) {
    video.currentTime = video.duration * scrollFraction;
  }
}

// 2. Reveal Sections on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.2 });

// Initialize everything
window.addEventListener('scroll', () => {
  requestAnimationFrame(scrubVideo);
});

document.querySelectorAll('.glass-card, .project-card').forEach((el) => {
  observer.observe(el);
});

// Ensure video is ready
video.addEventListener('loadedmetadata', scrubVideo);