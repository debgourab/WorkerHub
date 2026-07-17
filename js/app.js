document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("[data-nav-links]");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const homeSearch = document.querySelector("#home-search");
  if (homeSearch) {
    homeSearch.addEventListener("click", () => {
      const service = document.querySelector("#home-service").value;
      const location = document.querySelector("#home-location").value.trim();
      const params = new URLSearchParams();
      if (service) params.set("service", service);
      if (location) params.set("location", location);
      window.location.href = `workers.html?${params.toString()}`;
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactForm.querySelector(".form-message").textContent = "Message sent. Our team will reply soon.";
      contactForm.reset();
    });
  }
});
