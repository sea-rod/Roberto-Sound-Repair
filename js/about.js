document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target); // Stop observing after the animation
          }
        });
      },
      { threshold: 0 }
    );
  
    const featurettes = document.querySelectorAll(".featurette");
    featurettes.forEach((featurette) => {
      featurette.classList.add("hidden"); // Initial hidden state
      observer.observe(featurette);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Define a callback function to handle intersection events
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to the intersecting element
                entry.target.classList.add('visible');
                // Unobserve the element after it is animated to improve performance
                observer.unobserve(entry.target);
            }
        });
    }

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Observe all elements with the class 'fade-in-section'
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const flickerSections = document.querySelectorAll('.hidden-flicker');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    flickerSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight && !section.classList.contains('reveal')) {
        section.classList.add('flicker');
        setTimeout(() => {
          section.classList.remove('hidden-flicker');
          section.classList.remove('flicker');
          section.classList.add('reveal');
        }, 1500); // Match this duration with your flicker animation duration
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Run on load in case elements are already in view
});
