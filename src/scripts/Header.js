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
      this.header = document.querySelector("#header");
      this.menuButton = document.querySelector("#menu-btn");
      this.mainContent = document.querySelector("#content");
      this.links = self.header.querySelectorAll("nav a");
      this.nav = self.header.querySelector("nav");

      this.navLinks = document.querySelectorAll(".nav__link");

      // set up listeners
      this.listen();
      this.updateActiveLink();
    },

    /**
     * Set up listeners
     */
    listen: function () {
      const self = this;

      // Fix header on scroll
      self.onHeaderFixed();

      // Listen to menu button click
      self.onMenuButtonClicked();

      self.onDrawerClosed();

      // self.onScroll();
    },

    /**
     * Fix header when document scroll
     */
    onHeaderFixed: function () {
      const self = this;

      // get the height of header
      const headerHeight = self.header.clientHeight;

      // Fix primary header when scrolling
      const headerScollListener = () => {
        if (window.scrollY > headerHeight) {
          self.header.dataset.headerFixed = "yes";
          self.mainContent.style.paddingTop = `${headerHeight}px`;
        } else {
          self.header.dataset.headerFixed = "no";
          self.mainContent.style.paddingTop = 0;
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
        // open and close menu button (Mobile only)
        self.menuButton.classList.toggle("menu-open");

        // open and close navidation drawer (Mobile only)
        self.header.classList.toggle("header-open");
      });
    },

    /**
     * Close drawer when nav links clicked
     */
    onDrawerClosed: function () {
      const self = this;
      // Close the navigation drawer
      self.menuButton.classList.remove("menu-open");
      self.header.classList.remove("header-open");
    },

    /**
     * Listen for links clicked then scroll to element and close drawer
     */
    onScroll: function () {
      const self = this;
      self.links.forEach((link) => {
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

      // self.links.forEach((link) => {
      //   link.addEventListener("click", function (event) {
      //     event.preventDefault();

      //     // Close the navigation drawer
      //     self.menuButton.classList.remove("menu-open");
      //     self.header.classList.remove("header-open");

      //     const targetId = link.hash.slice(1);
      //     const targetElement = document.getElementById(targetId);
      //     if (targetElement) {
      //       self.scrollTo(targetElement);
      //     }
      //   });
      // });
    },

    /**
     * Scroll to element
     */
    scrollTo: function (el) {
      const offset = Math.round(this.header.offsetHeight);
      const elementPos = el.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
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
