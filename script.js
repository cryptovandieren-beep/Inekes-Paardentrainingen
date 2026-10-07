// Mobile navigation and small page enhancements.
const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".nav-links");

// Open and close the small-screen navigation.
if (menuToggle && navigationLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigationLinks.classList.toggle("is-open", !isOpen);
  });

  // Close the menu after choosing a section.
  navigationLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigationLinks.classList.remove("is-open");
    }
  });

  // Also close the menu when returning to a wider layout.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigationLinks.classList.remove("is-open");
    }
  });
}

// Keep the copyright year current without editing the page each January.
const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

// Hide broken placeholder images while preserving their neutral background.
document.querySelectorAll(".hero-image, .about-photo").forEach((image) => {
  const hideMissingImage = () => image.classList.add("image-unavailable");
  image.addEventListener("error", hideMissingImage, { once: true });

  if (image.complete && image.naturalWidth === 0) {
    hideMissingImage();
  }
});

/* =========================
   HEADER KLEINER BIJ SCROLLEN
========================= */

const header = document.querySelector("header");

/*
   De header wordt pas klein nadat je 120px naar beneden bent gescrold.
   Hij wordt pas weer groot als je bijna helemaal bovenaan bent.
   
   Door twee verschillende grenzen te gebruiken voorkom je
   dat de header bij het verkleinen heen en weer blijft springen.
*/
window.addEventListener("scroll", () => {

    /* Naar beneden: header verkleinen */
    if (window.scrollY > 120) {
        header.classList.add("scrolled");
    }

    /* Terug naar boven: header weer vergroten */
    if (window.scrollY < 20) {
        header.classList.remove("scrolled");
    }

});