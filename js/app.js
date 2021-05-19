$(document).ready(function () {
  const model = {};

  const controller = {
    init: function () {
      view.init();
    },
  };

  const view = {
    init: function () {
      this.appbar = $(".appbar");
      this.menuBtn = $(".appbar__menu");

      const self = this;

      // Open and close appbar nav
      this.menuBtn.click(function (event) {
        event.stopPropagation();
        self.appbar.toggleClass("appbar--open");
      });

      // Close appbar nav
      $(document).click(function (event) {
        self.appbar.toggleClass("appbar--open", false);
      });

      $(".appbar__link").click(function () {
        // remove classes from all
        $(".appbar__link").removeClass("appbar__link--active");
        // add class to the one we clicked
        $(this).addClass("appbar__link--active");
      });
    },
  };

  // init app
  controller.init();
});
