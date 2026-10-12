
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for homepage section links
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start"
        });
      }
    });
  });

  // Keep chart animations accessible
  if (reduceMotion) {
    document.querySelectorAll(".chart-line").forEach(line => {
      line.style.animation = "none";
      line.style.strokeDashoffset = "0";
    });
  }

  // Log the current navigation destinations for debugging
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (
      href === "../signup/" ||
      href === "../payment/" ||
      href === "../login/" ||
      href === "../home/"
    ) {
      console.log("DETwal navigation:", href);
    }
  });

  console.log("DETwal homepage initialized successfully.");
});
