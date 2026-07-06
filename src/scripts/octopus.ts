import { initBackButtonView } from "./backButtonView";
import { initHeaderView } from "./headerView";

export const initApp = () => {
  initHeaderView();
  initBackButtonView();
};
