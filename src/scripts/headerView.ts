let menuToggle: HTMLButtonElement | null = null;
let navMenu: HTMLElement | null = null;

export const initHeaderView = (): void => {
  menuToggle = document.getElementById("menu-toggle") as HTMLButtonElement;
  navMenu = document.getElementById("nav-menu");

  menuToggle?.addEventListener("click", () => {
    const isExpanded = menuToggle?.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      closeMenu();
    } else {
      navMenu?.classList.remove("hidden");
      navMenu?.classList.add("flex");
      menuToggle?.setAttribute("aria-expanded", "true");

      // Animate three horizontal bars into an "X" shape
      menuToggle
        ?.querySelector(".line-1")
        ?.classList.add("rotate-45", "translate-x-1");
      menuToggle?.querySelector(".line-2")?.classList.add("opacity-0");
      menuToggle
        ?.querySelector(".line-3")
        ?.classList.add("-rotate-45", "translate-x-1");
    }
  });

  // Select all interactive links inside the mobile navigation menu drawer
  const navLinks = navMenu?.querySelectorAll("a");

  // Attach click listeners to immediately close the navigation tray on click
  navLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      // Only run on mobile layouts to avoid modifying desktop flow states
      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });
};

const closeMenu = () => {
  navMenu?.classList.add("hidden");
  navMenu?.classList.remove("flex");
  menuToggle?.setAttribute("aria-expanded", "false");

  // Reset the hamburger morphing animation back to three horizontal bars
  menuToggle
    ?.querySelector(".line-1")
    ?.classList.remove("rotate-45", "translate-x-1");
  menuToggle?.querySelector(".line-2")?.classList.remove("opacity-0");
  menuToggle
    ?.querySelector(".line-3")
    ?.classList.remove("-rotate-45", "translate-x-1");
};
