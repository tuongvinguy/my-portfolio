const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.project-card');
hiddenElements.forEach((el) => observer.observe(el));

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add a small delay based on the index for a "staggered" look
      setTimeout(() => {
        entry.target.classList.add('reveal');
      }, index * 150); 
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.8s ease-out";
  observer.observe(card);
});

// Add this class in your CSS for the JS to trigger
// .reveal { opacity: 1 !important; transform: translateY(0) !important; }