// Header component
const BackButton = function () {
  // MVC model
  const model = {};

  // MVC controller
  const controller = {
    init: function () {
      view.init();
    },
  };

  // MVC view
  const view = {
    init: function () {
      this.backButton = document.querySelector("#back-btn");

      // set up listeners
      this.listen();
    },

    /**
     * Listen to document scroll
     */
    onScroll: function () {
      const self = this;
      // show back button when scrolling
      const backButtonListener = () => {
        if (window.scrollY > 150) {
          self.backButton.classList.remove("hidden");
          self.backButton.classList.add("inline-flex");
        } else {
          self.backButton.classList.add("hidden");
          self.backButton.classList.remove("inline-flex");
        }
      };

      document.addEventListener("scroll", backButtonListener);
    },

    /**
     * Scroll to top when back button clicked
     */
    onBackButtonClicked: function () {
      const self = this;

      self.backButton.addEventListener("click", function (evt) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    },

    /**
     * Set up listeners
     */
    listen: function () {
      const self = this;

      // Listen to scroll
      self.onScroll();

      // Listen to menu button click
      self.onBackButtonClicked();
    },
  };

  return {
    init: function () {
      controller.init();
    },
  };
};

export default BackButton;
