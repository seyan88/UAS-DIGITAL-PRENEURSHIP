// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
    backToTopBtn.classList.add("opacity-100", "visible");
  } else {
    backToTopBtn.classList.remove("opacity-100", "visible");
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// Service selection scroll to contact form
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from reloading the page

  // Capture the values from the input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value.trim();
  const message = document.getElementById("message").value.trim();

  // Format the message
  const whatsappMessage = `Halo! Saya ingin konsultasi dengan detail berikut:\n\nNama: ${name}\nEmail: ${email}\nNo HP: ${phone}\nLayanan: ${service}\nPesan: ${message}`;

  // Encode URL for WhatsApp
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappNumber = "085721933469"; // Updated WhatsApp number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Redirect to WhatsApp
  window.open(whatsappURL, "_blank");
});
