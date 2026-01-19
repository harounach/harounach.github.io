import Header from "./Header";
import BackButton from "./BackButton";
import Scroller from "./Scroller";

document.addEventListener("DOMContentLoaded", function () {
  const App = {
    init: function () {
      const header = Header();
      const backButton = BackButton();
      const scroller = Scroller();
      header.init();
      backButton.init();
      scroller.init();
    },
  };

  App.init();
});
