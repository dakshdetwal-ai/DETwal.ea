
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for homepage section links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Check that signup and payment pages exist later
  document.querySelectorAll(
    'a[href="signup.html"], a[href="payment.html"]'
  ).forEach(link => {
    link.addEventListener("click", () => {
      console.log("DETwal navigation:", link.getAttribute("href"));
    });
  });

  // Respect visitors who prefer reduced motion
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    document.querySelectorAll(".chart-line").forEach(line => {
      line.style.animation = "none";
      line.style.strokeDashoffset = "0";
    });
  }

  console.log("DETwal homepage initialized successfully.");
});
