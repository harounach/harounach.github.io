import Header from "./Header";
import BackButton from "./BackButton";

document.addEventListener("DOMContentLoaded", function () {
  const App = {
    init: function () {
      const header = Header();
      const backButton = BackButton();
      header.init();
      backButton.init();
    },
  };

  App.init();
});
