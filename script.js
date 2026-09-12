const cube = document.querySelector(".cube");
const scene = document.querySelector(".scene");

if (scene && cube) {
  scene.addEventListener("mousemove", (event) => {
    const rect = scene.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -18;
    const rotateY = ((x / rect.width) - 0.5) * 18;

    cube.style.transform =
      `translate(-50%, -50%) rotateX(${rotateX - 18}deg) rotateY(${rotateY + 35}deg) rotateZ(8deg)`;
  });

  scene.addEventListener("mouseleave", () => {
    cube.style.transform =
      "translate(-50%, -50%) rotateX(-18deg) rotateY(35deg) rotateZ(8deg)";
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 50, 350)}ms`;
  revealObserver.observe(element);
});

const menuToggle = document.querySelector(".menu-toggle");
const desktopNav = document.querySelector(".desktop-nav");

if (menuToggle && desktopNav) {
  menuToggle.addEventListener("click", () => {
    desktopNav.classList.toggle("mobile-nav");
    menuToggle.classList.toggle("menu-open");
  });

  desktopNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      desktopNav.classList.remove("mobile-nav");
      menuToggle.classList.remove("menu-open");
    });
  });
}
Add this small mobile navigation rule at the end of style.css so the hamburger menu works on smaller screens:

@media (max-width: 900px) {
  .desktop-nav.mobile-nav {
    background: rgba(16, 17, 15, 0.97);
    border: 1px solid var(--line);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    left: 1.25rem;
    padding: 1.5rem;
    position: absolute;
    right: 1.25rem;
    top: 70px;
    z-index: 20;
  }
}


Explore
