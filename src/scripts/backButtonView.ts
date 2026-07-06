let backButton: HTMLButtonElement | null = null;

export const initBackButtonView = () => {
  backButton = document.getElementById("back-btn") as HTMLButtonElement;
  document.addEventListener("scroll", backButtonListener);
};

const backButtonListener = () => {
  if (window.scrollY > 150) {
    backButton?.classList.remove("hidden");
    backButton?.classList.add("inline-flex");
  } else {
    backButton?.classList.add("hidden");
    backButton?.classList.remove("inline-flex");
  }
};
