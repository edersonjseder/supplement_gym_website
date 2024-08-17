import loadImages from "../data/loadedImages";
import { weightLoss, protein, massGains } from "./linkList";

const containerTopics = [
  {
    title: "Weight Loss",
    link: weightLoss,
    image: loadImages.menuBackground1,
  },
  {
    title: "Protein",
    link: protein,
    image: loadImages.menuBackground2,
  },
  {
    title: "Mass Gainers",
    link: massGains,
    image: loadImages.menuBackground3,
  },
];

export default containerTopics;
