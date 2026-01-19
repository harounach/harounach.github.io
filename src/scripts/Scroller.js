// Header component
const Scroller = function () {
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
      this.header = document.querySelector("#header");
      this.menuButton = document.querySelector("#menu-btn");
      this.scrollLinks = document.querySelectorAll("a[data-scroller]");
      console.log(this.scrollLinks);

      // set up listeners
      this.listen();
    },

    /**
     * Set up listeners
     */
    listen: function () {
      const self = this;

      self.onLinksScroll();
    },

    onLinksScroll: function () {
      const self = this;
      self.scrollLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault();

          // Close the navigation drawer
          self.menuButton.classList.remove("menu-open");
          self.header.classList.remove("header-open");

          const targetId = link.hash.slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            self.scrollTo(targetElement);
          }
        });
      });
    },

    /**
     * Scroll to element
     */
    scrollTo: function (el) {
      const offset = Math.round(this.header.offsetHeight);
      const elementPos = el.getBoundingClientRect().top + window.scrollY;

      console.log("Offset", offset);
      console.log("ElementPos", elementPos);

      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    },
  };

  return {
    init: function () {
      controller.init();
    },
  };
};

export default Scroller;
