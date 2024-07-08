document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for fade-in effect
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger when 50% of the element is visible
  });

  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Flicker animation on scroll (if applicable)
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
        }, 1000); // Adjust this duration to match your flicker animation duration (if applicable)
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Run on load in case elements are already in view

  // Sequential animations for top content and columns
  const topElements = document.querySelectorAll(".top-animate");
  const columnElements = document.querySelectorAll(".column-animate");

  const addAnimationClasses = (elements, animationClass) => {
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.3}s`; // Adjust delay for faster animation start
      element.style.animationDuration = '0.5s'; // Adjust animation duration for faster fade-in
      element.classList.add(animationClass);
    });
  };

  const topAnimationDuration = 500; // Adjust animation duration for faster fade-in
  setTimeout(() => {
    addAnimationClasses(topElements, "fadeInLeftAnimation");
    addAnimationClasses(columnElements, "fadeInAnimation");
  }, topAnimationDuration);
});
