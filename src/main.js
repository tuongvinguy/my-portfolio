const video = document.getElementById('v0');

// Settings for smoothness
const smoothness = 0.1; // Lower = smoother/slower, Higher = snappier
let targetTime = 0;
let currentTime = 0;

// 1. Calculate where the video SHOULD be based on scroll
const scrollVideo = () => {
  const scrollPos = window.scrollY;
  const totalScroll = document.body.offsetHeight - window.innerHeight;
  const scrollFraction = scrollPos / totalScroll;

  if (video.duration) {
    targetTime = video.duration * scrollFraction;
  }
};

// 2. The Animation Loop (The "Lerp" Magic)
const updateVideo = () => {
  // This math calculates the distance between current and target time
  // and moves a small percentage (0.1) of the way there every frame.
  currentTime += (targetTime - currentTime) * smoothness;
  
  // Apply the time to the video
  video.currentTime = currentTime;

  // Keep the loop running at 60fps
  requestAnimationFrame(updateVideo);
};

// 3. Initialize
video.addEventListener('loadedmetadata', () => {
  video.pause();
  scrollVideo();
});

// Start the smooth animation loop immediately
updateVideo();

window.addEventListener('scroll', scrollVideo);

// 4. Reveal Logic for your Project Cards
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, observerOptions);

document.querySelectorAll('.glass-card, .project-card').forEach((card) => {
  observer.observe(card);
});