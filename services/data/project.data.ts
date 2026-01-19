import { images } from "../assets";
import { IProject } from "../types";
import { routes } from "./shared.data";

export const projects: readonly IProject[] = Object.freeze([
  {
    _id: "prod_001",
    name: "Simigo- vibrant eSIM Brand",
    description:
      "The brand focused on youth centric packages, connectivity & flexibility.",
    buttonPurpose: "Live Project URL and Case Study-",
    backgroundImage: images.simgo,
    backgroundColor: "linear-gradient(180deg, #86C9FF 0%, #563EF0 100%)",
    buttons: [
      {
        text: "Live Project",
        url: "https://www.simigo.com/",
      },
      {
        text: "Case Study",
        url:
          routes.portfolio.link + "/simigo-esim-branding-and-digital-marketing",
      },
    ],
  },
  {
    _id: "prod_002",
    name: "Short Project Brief Goes  here. Short",
    description:
      "Short Project Brief Goes  here. Short Project Brief Goes  here.",
    buttonPurpose: "Project Case Study and Lots more",
    backgroundImage: images.unisavi,
    backgroundColor: "linear-gradient(180deg, #F9D20E 0%, #F99B0E 100%)",
    buttons: [
      {
        text: "Live Project",
        url: "https://www.simigo.com/",
      },
      {
        text: "Case Study",
        url: routes.portfolio.link + "/unisavi-branding-and-digital-marketing",
      },
    ],
  },
  {
    _id: "prod_003",
    name: "Short Project Brief Goes  here. Short",
    description:
      "Short Project Brief Goes  here. Short Project Brief Goes  here.",
    buttonPurpose: "Project Case Study and Lots more",
    backgroundImage: images.telzen,
    backgroundColor: "linear-gradient(180deg, #00DE71 0%, #014A43 100%)",
    buttons: [
      {
        text: "Live Project",
        url: "https://www.simigo.com/",
      },
      {
        text: "Case Study",
        url: routes.portfolio.link + "telzen-branding-and-digital-marketing",
      },
    ],
  },

  {
    _id: "prod_004",
    name: "Short Project Brief Goes  here. Short",
    description:
      "Short Project Brief Goes  here. Short Project Brief Goes  here.",
    buttonPurpose: "Project Case Study and Lots more",
    backgroundImage: images.kanga,
    backgroundColor: "linear-gradient(180deg, #86C9FF 0%, #563EF0 100%)",
    buttons: [
      {
        text: "Live Project",
        url: "https://www.simigo.com/",
      },
      {
        text: "Case Study",
        url:
          routes.portfolio.link + "kangabooking-branding-and-digital-marketing",
      },
    ],
  },

  {
    _id: "prod_005",
    name: "Short Project Brief Goes  here. Short",
    description:
      "Short Project Brief Goes  here. Short Project Brief Goes  here.",
    buttonPurpose: "Project Case Study and Lots more",
    backgroundImage: images.nlc,
    backgroundColor: "linear-gradient(180deg, #F9D20E 0%, #F99B0E 100%)",
    buttons: [
      {
        text: "Live Project",
        url: "https://www.simigo.com/",
      },
      {
        text: "Case Study",
        url: routes.portfolio.link + "nlc-branding-and-digital-marketing",
      },
    ],
  },
]);
