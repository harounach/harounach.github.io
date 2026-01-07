import type { TAward, TPhoto, TProject } from "src/types/types";

// import heroPhoto from "../assets/images/harounach-photo-square.jpg";
import heroPhoto from "../assets/images/Haroun-Achouche-Square.png";

import thumbnail_SunnyCoffeeShop from "../assets/images/sunny-coffee-shop.png";
import thumbnail_Travvall from "../assets/images/travvall.png";
import thumbnail_LittleTableRestaurant from "../assets/images/little-table-restaurant.png";
import thumbnail_NewvaRestaurant from "../assets/images/newva.png";
import thumbnail_EvergreenDentalClinic from "../assets/images/evergreen-dental-clinic.png";
import thumbnail_VegeFru from "../assets/images/vegefru.png";
import thumbnail_WildfireTracker from "../assets/images/Wildfire-Tracker.jpg";
import thumbnail_TodoList from "../assets/images/TodoList.jpg";
import thumbnail_Lensey from "../assets/images/Lensey.jpg";
import thumbnail_Suun from "../assets/images/Suun.jpg";
import thumbnail_D3BarCahrt from "../assets/images/D3-Bar-Chart.jpg";
import thumbnail_D3ScatterPlot from "../assets/images/D3-Scatter-Plot.jpg";
import thumbnail_D3HeatMap from "../assets/images/D3-Heat-Map.jpg";
import thumbnail_D3ChoroplethMap from "../assets/images/D3-Choropleth-Map.jpg";
import thumbnail_D3TreeMap from "../assets/images/D3-Tree-Map.jpg";
import thumbnail_MarkdownPreviewer from "../assets/images/Markdown-Previewer.jpg";
import thumbnail_DrumMackine from "../assets/images/Drum-Machine.jpg";
import thumbnail_JavaScriptCalculator from "../assets/images/JavaScript-Calculator.jpg";
import thumbnail_TwentyfiveFiveClock from "../assets/images/twentyfive-five-Clock.jpg";
import thumbnail_TechDocsPage from "../assets/images/Technical-Documentation-Page.jpg";

export const heroPhotoData: TPhoto = {
  imageUrl: heroPhoto,
  imageAlt: "Haroun",
};

export const projectList: Array<TProject> = [
  /* # 1 */
  {
    title: "Evergreen dental clinic",
    description: "dental clinic website",
    imageUrl: thumbnail_EvergreenDentalClinic,
    imageAlt: "Evergreen dental clinic",
    url: "https://evergreen-dental.netlify.app/",
  },

  /* # 2 */
  {
    title: "Newva Restaurant",
    description: "Newva restaurant website",
    imageUrl: thumbnail_NewvaRestaurant,
    imageAlt: "Newva Restaurant",
    url: "https://haron-newva.netlify.app/",
  },

  /* # 3 */
  {
    title: "Little Table",
    description: "Restaurant Website",
    imageUrl: thumbnail_LittleTableRestaurant,
    imageAlt: "Little Table Restaurant",
    url: "https://littletable.netlify.app",
  },

  /* # 4 */
  {
    title: "Sunny Coffee Shop",
    description: "Ecommerce website",
    imageUrl: thumbnail_SunnyCoffeeShop,
    imageAlt: "Sunny Coffee Shop",
    url: "https://github.com/harounach/sunnycoffeeshop",
  },

  /* # 5 */
  {
    title: "VegeFru",
    description: "A Online Grocery Store Web App",
    imageUrl: thumbnail_VegeFru,
    imageAlt: "VegeFru",
    url: "https://github.com/harounach/vegefru",
  },

  /* # 6 */
  {
    title: "Travvall",
    description: "Travel agency website",
    imageUrl: thumbnail_Travvall,
    imageAlt: "Travvall",
    url: "https://github.com/harounach/vegefru",
  },

  /* # 7 */
  {
    title: "Wildfire Tracker",
    description: "A Wildfire Tracker App",
    imageUrl: thumbnail_WildfireTracker,
    imageAlt: "Wildfire Tracker",
    url: "https://github.com/harounach/wildfire-tracker",
  },

  /* # 8 */
  {
    title: "TodoList",
    description: "A React Todo List App",
    imageUrl: thumbnail_TodoList,
    imageAlt: "Todo List",
    url: "https://haron-todolist.netlify.app/",
  },

  /* # 9 */
  {
    title: "Lensey",
    description: "Lensey is a simple news website",
    imageUrl: thumbnail_Lensey,
    imageAlt: "Lensey",
    url: "https://github.com/harounach/lensey",
  },

  /* # 10 */
  {
    title: "Suun",
    description: "Suun is simple weather website",
    imageUrl: thumbnail_Suun,
    imageAlt: "Suun",
    url: "https://github.com/harounach/suun",
  },

  /* # 11 */
  {
    title: "D3 Bar Chart",
    description: "Visualize Data with a Bar Chart",
    imageUrl: thumbnail_D3BarCahrt,
    imageAlt: "D3 Bar Chart",
    url: "https://codepen.io/harounachouche/full/zYBXZQJ",
  },

  /* # 12 */
  {
    title: "D3 Scatter Plot",
    description: "Visualize Data with Scatterplot Graph",
    imageUrl: thumbnail_D3ScatterPlot,
    imageAlt: "D3 Scatter Plot",
    url: "https://codepen.io/harounachouche/full/qBNwwoy",
  },

  /* # 13 */
  {
    title: "D3 Heat Map",
    description: "Visualize Data with Heat Map",
    imageUrl: thumbnail_D3HeatMap,
    imageAlt: "D3 Heat Map",
    url: "https://codepen.io/harounachouche/full/BazgJRM",
  },

  /* # 14 */
  {
    title: "D3 Choropleth Map",
    description: "Visualize Data with Choropleth Map",
    imageUrl: thumbnail_D3ChoroplethMap,
    imageAlt: "D3 Choropleth Map",
    url: "https://codepen.io/harounachouche/full/WNxqKzy",
  },

  /* # 15 */
  {
    title: "D3 Tree Map",
    description: "Visualize Data with Treemap Diagram",
    imageUrl: thumbnail_D3TreeMap,
    imageAlt: "D3 Tree Map",
    url: "https://codepen.io/harounachouche/full/QWEXXRJ",
  },

  /* # 16 */
  {
    title: "Markdown Previewer",
    description: "Build a Markdown Previewer",
    imageUrl: thumbnail_MarkdownPreviewer,
    imageAlt: "Markdown Previewer",
    url: "https://codepen.io/harounachouche/full/QWNRNry",
  },

  /* # 17 */
  {
    title: "Drum Machine",
    description: "Build a Drum Machine",
    imageUrl: thumbnail_DrumMackine,
    imageAlt: "Drum Machine",
    url: "https://codepen.io/harounachouche/full/LYNoaQv",
  },

  /* # 18 */
  {
    title: "JavaScript Calculator",
    description: "Build a JavaScript Calculator",
    imageUrl: thumbnail_JavaScriptCalculator,
    imageAlt: "JavaScript Calculator",
    url: "https://codepen.io/harounachouche/full/BaKeepM",
  },

  /* # 19 */
  {
    title: "25 + 5 Clock",
    description: "Build a 25 + 5 Clock",
    imageUrl: thumbnail_TwentyfiveFiveClock,
    imageAlt: "25 + 5 Clock",
    url: "https://codepen.io/harounachouche/full/ExyLNxO",
  },

  /* # 20 */
  {
    title: "Technical Documentation Page",
    description: "Build a Technical Documentation Page",
    imageUrl: thumbnail_TechDocsPage,
    imageAlt: "Technical Documentation Page",
    url: "https://codepen.io/harounachouche/full/RwraBaR",
  },
];

export const featuredProjectList: Array<TProject> = projectList.slice(0, 6);

export const awardList: Array<TAward> = [
  /* # 1 */
  {
    title: "",
    issuer: "",
    url: "",
  },
];
