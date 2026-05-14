const video = document.getElementById('v0');

// Function to sync video playback with scroll
const scrollVideo = () => {
  const scrollPos = window.scrollY;
  const totalScroll = document.body.offsetHeight - window.innerHeight;
  const scrollFraction = scrollPos / totalScroll;

  if (video.duration) {
    // Set video time based on scroll percentage
    video.currentTime = video.duration * scrollFraction;
  }
};

// Listen for scroll
window.addEventListener('scroll', () => {
  requestAnimationFrame(scrollVideo);
});

// Intersection Observer for cards fading in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.glass-card, .project-card').forEach(card => {
  observer.observe(card);
});

// Run once on load to set initial state
video.addEventListener('loadedmetadata', scrollVideo);