import { images } from "../assets";
import { IProject } from "../types";
import { routes } from "./shared.data";

export const projects: readonly IProject[] = Object.freeze([
  {
    _id: "prod_001",
    name: "Simigo- A Vibrant eSIM Brand",
    description:
      "We have designed architecture of the brand that brings youthfulness and energy in your roaming experience.",
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
    name: "UniSavi- Global Higher Education",
    description:
      "Keeping Fexibility with State-Of-Art Technology We Have Build UniSavi that Eases Higher Education.",
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
    name: "Telzen- VPN, eSIM & More!",
    description:
      "Nature Inspired Advance Technology That Comes With Affordable Roaming eSIM Data, VPN and Physical SIM.",
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
    name: "Kanga- Business Slot Booking",
    description:
      "Customers search for local businesses and book slots directly. Businesses manage customers, accounts, and staff in one place — that’s what Kanga is, today!",
    buttonPurpose: "Live Project URL and Case Study-",
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
    name: "NLC Fund- Best Loan Management",
    description:
      "First Time ever we have made this platform that eases loan application, term-sheet generation, loan execution and so many!",
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
