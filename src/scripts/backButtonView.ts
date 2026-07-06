export const initBackButtonView = () => {
  const backButton = document.querySelector("#back-btn") as HTMLButtonElement;
  const progressCircle = document.querySelector(
    "#progress-circle",
  ) as SVGCircleElement;
  const sentinel = document.querySelector("#header-sentinel") as HTMLDivElement;

  if (!backButton && !progressCircle && !sentinel) return;

  const circumference = 283; // 2 * PI * radius(45)

  const updateProgress = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = Math.min(scrollPosition / scrollHeight, 1);

    // Calculate offset: full circumference minus the scrolled portion
    const offset = circumference - scrollPercentage * circumference;
    progressCircle.style.strokeDashoffset = offset.toString();
  };

  // 1. Visibility via Sentinel
  const observer = new IntersectionObserver(
    ([entry]) => {
      backButton.dataset.visible = entry.isIntersecting ? "no" : "yes";
    },
    { threshold: 0 },
  );

  observer.observe(sentinel);

  // 2. Progress on Scroll
  window.addEventListener("scroll", updateProgress, { passive: true });

  // 3. Click to Top
  backButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initial call
  updateProgress();
};
