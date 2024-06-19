const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    else entry.target.classList.remove("show");
  });
});

const hidden_elements = document.querySelectorAll(".hidden");
hidden_elements.forEach((element) => {
  observer.observe(element);
});

