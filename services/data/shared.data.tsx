import { images } from "../assets";

export const routes = {
  homepage: {
    name: "Home",
    link: "/",
    activeRoute: "/",
  },
  services: {
    name: "Services",
    link: "/services",
    activeRoute: "/services",
  },
  portfolio: {
    name: "Portfolio",
    link: "/portfolio",
    activeRoute: "/portfolio",
  },
  career: {
    name: "Career",
    link: "/career",
    activeRoute: "/career",
  },
  about: {
    name: "About us",
    link: "/about",
    activeRoute: "/about",
  },
  contact: {
    name: "Contact us",
    link: "/contact-us",
    activeRoute: "/contact-us",
  },
  journal: {
    name: "Journal",
    link: "/journal",
    activeRoute: "/journal",
  },
};

export const navbarData = [
  {
    name: routes.homepage.name,
    link: routes.homepage.link,
  },
  {
    name: routes.services.name,
    link: routes.services.link,
    megaMenu: true,
  },
  {
    name: routes.portfolio.name,
    link: routes.portfolio.link,
  },
  {
    name: routes.career.name,
    link: routes.career.link,
  },
  {
    name: routes.about.name,
    link: routes.about.link,
  },
  {
    name: routes.contact.name,
    link: routes.contact.link,
  },
  {
    name: routes.journal.name,
    link: routes.journal.link,
  },
];

export const successStoryData = [
  {
    type: "Experience",
    value: "5",
    ext: "YRS",
    color: "#91FF76",
  },
  {
    type: "Raised",
    value: "70",
    ext: "M",
    color: "#FFF146",
  },
  {
    type: "Happy Clients",
    value: "84",
    ext: "+",
    color: "#91FF76",
  },
  {
    type: "Projects",
    value: "153",
    ext: "+",
    color: "#FFF146",
  },
];

export const testimonialsData = [
  {
    id: 1,
    message:
      "I've been working with this team closely for a few years now and they have went above and beyond to bring my vision to life. Very talented and I look forward to continuing to make even more ideas a reality.",
    avatar: images.avater3,
    name: "Benjamin Oakes",
    title: "Founder - TechV",
  },
  {
    id: 2,
    message:
      "The dedication and creativity of this team are unmatched. They exceeded my expectations and delivered exceptional results every time.",
    avatar: images.avater3,
    name: "Sophia Lee",
    title: "CEO - InnovateNow",
  },
  {
    id: 3,
    message:
      "Working with this team has been an incredible experience. Their ability to bring ideas to life is truly remarkable, and I couldn't be happier with the results.",
    avatar: images.avater3,
    name: "Michael Harper",
    title: "CTO - FutureTech Solutions",
  },
];
