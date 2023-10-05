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
      this.backBtn = $(".page__back");

      const self = this;

      // Open and close appbar nav
      this.menuBtn.on("click", function (event) {
        event.stopPropagation();
        self.appbar.toggleClass("appbar--open");
      });

      // Close appbar nav
      $(document).on("click", function (event) {
        self.appbar.toggleClass("appbar--open", false);
      });

      $(".appbar__link").click(function () {
        // remove classes from all
        $(".appbar__link").removeClass("appbar__link--active");
        // add class to the one we clicked
        $(this).addClass("appbar__link--active");
      });

      // show back button when scrolling
      const backButtonListener = () => {
        if (window.scrollY > 100) {
          self.backBtn.addClass("btn--active");
        } else {
          self.backBtn.removeClass("btn--active");
        }
      };

      this.onScroll(document, backButtonListener);

      // scroll to hash when clicking appbar links
      $(".scrollto").click(function (event) {
        event.preventDefault();

        const scrollElem = $($(this)[0].hash);
        self.scrollTo(scrollElem);
      });
    },

    onScroll: function (el, listener) {
      el.addEventListener("scroll", listener);
    },
    scrollTo: function (el) {
      let offset = Math.round(this.appbar.outerHeight());
      let elementPos = el.offset().top;

      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    },
  };

  // init app
  controller.init();
});
