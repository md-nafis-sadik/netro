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
