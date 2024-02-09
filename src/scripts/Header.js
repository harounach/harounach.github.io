// Header component
const Header = function () {
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
      this.header = document.querySelector(".header");
      this.menuButton = document.querySelector(".menu-btn");
      this.navLinks = document.querySelectorAll(".nav__link");

      // set up listeners
      this.listen();
      this.updateActiveLink();
    },

    /**
     * Listen to document scroll
     */
    onScroll: function () {
      const self = this;
      // Top offset

      const topOffset = 36;

      // Fix primary header when scrolling
      const headerScollListener = () => {
        if (window.scrollY > topOffset) {
          self.header.classList.add("header--fixed");
        } else {
          self.header.classList.remove("header--fixed");
        }
      };
      document.addEventListener("scroll", headerScollListener);
    },

    /**
     * Toggle nav menu
     */
    onMenuButtonClicked: function () {
      const self = this;
      self.menuButton.addEventListener("click", function () {
        self.menuButton.classList.toggle("menu-btn--open");
        self.header.classList.toggle("header--open");
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
      self.onMenuButtonClicked();
    },

    /**
     * Update active link
     */
    updateActiveLink: function () {
      const self = this;
      const currentHref = window.location.href;
      self.navLinks.forEach((link) => {
        link.classList.remove("nav__link--active");
        if (link.href === currentHref) {
          link.classList.add("nav__link--active");
        }
      });
    },
  };

  return {
    init: function () {
      controller.init();
    },
  };
};

export default Header;
