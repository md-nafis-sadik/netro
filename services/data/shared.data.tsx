import colors from "@/lib/colors";
import { images } from "../assets";
import {
  BehanceIcon,
  DribbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinOutlinedIcon,
  TelegramOutlinedIcon,
  TwitterIcon,
  YoutubeIcon,
  WhatsappOutlinedIcon,
} from "../assets/svgs";
import {} from "@/services/assets/svgs";

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

export const servicesMenu = [
  {
    serialNo: "01",
    name: "UI/UX Design",
    link: "/services/ui-ux-design",
  },
  {
    serialNo: "02",
    name: "Software Development",
    link: "/services/software-development",
  },
  {
    serialNo: "03",
    name: "Branding",
    link: "/services/branding",
  },
  {
    serialNo: "04",
    name: "3D Design",
    link: "/services/3d-design",
  },
];

export const footerData = {
  inquiries: {
    title: "INQUIRIES",
    address:
      "290/737 York House Green Lane West, Garstang, Preston, Lancashire, England, PR3 1NJ",
    phone: "+1 789 567 890",
    email: "hello@netrosystems.com",
  },
  companyInfo: {
    title: "COMPANY INFO",
    links: [
      { text: "About Us", href: "/about-us" },
      { text: "Join Our Team", href: "/careers" },
      { text: "Our Process", href: "/process" },
      { text: "Client Reviews", href: "/reviews" },
      { text: "Portfolio", href: "/portfolio" },
      { text: "Case Studies", href: "/case-studies" },
    ],
  },
  services: {
    title: "SERVICES",
    links: [
      { text: "UI/UX Design", href: "/services/ui-ux-design" },
      { text: "Branding & Identity", href: "/services/branding" },
      { text: "Web Development", href: "/services/web-development" },
      { text: "Mobile App Development", href: "/services/mobile-development" },
      { text: "SaaS Development", href: "/services/saas-development" },
      { text: "MVP Development", href: "/services/mvp-development" },
      { text: "3D Animation", href: "/services/3d-animation" },
    ],
  },
  support: {
    title: "SUPPORT",
    links: [
      { text: "Privacy Policy", href: "/privacy-policy" },
      { text: "Terms of Service", href: "/terms-of-service" },
      { text: "Help Center", href: "/help" },
    ],
  },
  resources: {
    title: "RESOURCES",
    links: [
      { text: "Our Journal", href: "/journal" },
      { text: "Whitepapers & E-books", href: "/resources/whitepapers" },
      { text: "Tools & Templates", href: "/resources/tools" },
      { text: "Webinars / Workshops", href: "/resources/webinars" },
      { text: "FAQs", href: "/faqs" },
    ],
  },
  copyright: "© 2022 - 2025 • Netro Systems, All Rights Reserved.",
  socialLinks: [
    {
      platform: "twitter",
      href: "#",
      icon: (
        <TwitterIcon className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white" />
      ),
    },
    {
      platform: "linkedin",
      href: "#",
      icon: (
        <LinkedinOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "instagram",
      href: "#",
      icon: (
        <InstagramIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "youtube",
      href: "#",
      icon: (
        <YoutubeIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "facebook",
      href: "#",
      icon: (
        <FacebookIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "telegram",
      href: "#",
      icon: (
        <TelegramOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "dribbble",
      href: "#",
      icon: (
        <DribbleIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "behance",
      href: "#",
      icon: (
        <BehanceIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "github",
      href: "#",
      icon: (
        <GithubIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
  ],
  actions: [{ text: "Go To Top", href: "#top" }],
};

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

export const socialsData = [
  {
    icon: (
      <WhatsappOutlinedIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0"
        color={colors.white}
      />
    ),
    link: "",
  },
  {
    icon: (
      <TelegramOutlinedIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0 text-white"
        color={colors.white}
      />
    ),
    link: "",
  },
  {
    icon: (
      <LinkedinOutlinedIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0 text-white"
        color={colors.white}
      />
    ),
    link: "",
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
