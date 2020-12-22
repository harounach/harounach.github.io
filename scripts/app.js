$(document).ready(function () {
  /* MVC model */
  const model = {
    /* Initialize Model */
    init: function () {
      /* Keep track of the state of drawer on mobile */
      this.drawerOpen = false;
    },
    toggleDrawer: function () {
      this.drawerOpen = !this.drawerOpen;
    },
    isDrawerOpen: function () {
      return this.drawerOpen;
    },
  };

  /* MVC controller */
  const controller = {
    /* Initialize Controller */
    init: function () {
      model.init();
      view.init();
    },
    /* Open or close drawer on mobile */
    toggleDrawer: function () {
      model.toggleDrawer();
    },
    isDrawerOpen: function () {
      return model.isDrawerOpen();
    },
  };

  /* MVC View */
  const view = {
    init: function () {
      // Get references
      this.menuBtn = $(".menu-btn");
      this.drawer = $(".appbar");
      this.drawerScrim = $(".appbar-scrim");

      let self = this;

      // Toggle navigation drawer
      this.menuBtn.on("click", function (event) {
        event.stopPropagation();
        self.menuBtn.toggleClass("appbar__menu--open");
        self.drawer.toggleClass("appbar--open");
        self.drawerScrim.toggleClass("appbar-scrim--active");
        controller.toggleDrawer();
      });

      this.closeDrawer = function () {
        if (controller.isDrawerOpen()) {
          controller.toggleDrawer();
        }
        self.drawer.removeClass("appbar--open");
        self.drawerScrim.removeClass("appbar-scrim--active");
        self.menuBtn.removeClass("appbar__menu--open");
      };

      $(document).on("click", function (event) {
        self.closeDrawer();
      });
    },
  };

  // init App
  controller.init();
});
