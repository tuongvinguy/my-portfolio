const video = document.getElementById('v0');
const smoothness = 0.25; // Snappier response for 600vh
let targetTime = 0;
let currentTime = 0;

const scrollVideo = () => {
  const scrollPos = window.scrollY;
  const totalScroll = document.body.offsetHeight - window.innerHeight;
  const scrollFraction = scrollPos / totalScroll;

  if (video.duration) {
    targetTime = video.duration * scrollFraction;
  }
};

const updateVideo = () => {
  currentTime += (targetTime - currentTime) * smoothness;
  video.currentTime = currentTime;
  requestAnimationFrame(updateVideo);
};

video.addEventListener('loadedmetadata', () => {
  video.pause();
  scrollVideo();
});

updateVideo();
window.addEventListener('scroll', scrollVideo);

// Intersection Observer for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('reveal');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.glass-card, .project-card').forEach(card => observer.observe(card));