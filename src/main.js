const video = document.getElementById('v0');

// 1. The Scroll Logic
const scrollVideo = () => {
  const scrollPos = window.scrollY;
  const totalScroll = document.body.offsetHeight - window.innerHeight;
  const scrollFraction = scrollPos / totalScroll;

  if (video.duration) {
    // This manually set the frame based on your scroll position
    video.currentTime = video.duration * scrollFraction;
  }
};

// 2. The "Freeze" Logic
video.addEventListener('loadedmetadata', () => {
  video.pause(); // Ensure it doesn't play on its own
  scrollVideo(); // Set it to the very first frame
});

// Run this in case the video was already cached/loaded
video.pause();

window.addEventListener('scroll', () => {
  requestAnimationFrame(scrollVideo);
});

// 3. Reveal Cards Logic (Your existing fade-in effect)
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