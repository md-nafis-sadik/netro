import colors from "@/lib/colors";
import {} from "@/services/assets/svgs";
import { images } from "../assets";
import {
  BehanceIcon,
  CalendarIcon,
  CodeCanyonIcon,
  DribbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinOutlinedIcon,
  PinterestIcon,
  TelegramOutlinedIcon,
  TwitterIcon,
  WhatsappOutlinedIcon,
  YoutubeIcon,
} from "../assets/svgs";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const tidycalMettingUrl = "https://tidycal.com/netrosystems/discussion";

export const routes = {
  homepage: {
    name: "Home",
    link: "/",
    activeRoute: "/",
  },
  services: {
    name: "Services",
    link: "/services/all",
    activeRoute: "/services/all",
    childLink: "/services",
  },
  portfolio: {
    name: "Portfolio",
    link: "/portfolio",
    activeRoute: "/portfolio",
  },
  career: {
    name: "Join us",
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
  // {
  //   name: routes.homepage.name,
  //   link: routes.homepage.link,
  // },
  {
    name: routes.services.name,
    link: routes.services.link,
    megaMenu: true,
  },
  {
    name: routes.portfolio.name,
    link: routes.portfolio.link,
  },
  // {
  //   name: routes.career.name,
  //   link: routes.career.link,
  // },
  {
    name: routes.about.name,
    link: routes.about.link,
  },
  {
    name: routes.career.name,
    link: routes.career.link,
  },
  {
    name: routes.contact.name,
    link: routes.contact.link,
  },
  // {
  //   name: routes.journal.name,
  //   link: routes.journal.link,
  // },
];

export const footerData = {
  inquiries: {
    title: "INQUIRIES",
    address:
      "290/737 York House Green Lane West, Garstang, Preston, Lancashire, England, PR3 1NJ",
    phone: "+44 7360251473",
    email: "hello@netrosystems.com",
  },
  companyInfo: {
    title: "COMPANY INFO",
    links: [
      { text: "About Us", href: routes.about.link },
      { text: "Join Our Team", href: routes.career.link },
      { text: "Our Process", href: "/process" },
      { text: "Client Reviews", href: "/reviews" },
      { text: "Portfolio", href: routes.portfolio.link },
      { text: "Case Studies", href: "/case-studies" },
    ],
  },
  services: {
    title: "SERVICES",
    links: [
      { text: "UI/UX Design", href: "/services/Product Design (UI/UX Design)" },
      {
        text: "Branding & Identity",
        href: "/services/Product Design (UI/UX Design)",
      },
      { text: "Web Development", href: "/services/Software Development" },
      {
        text: "Mobile App Development",
        href: "/services/Software Development",
      },
      {
        text: "SaaS Development",
        href: "/services/SaaS Development & SQA",
      },
      {
        text: "MVP Development",
        href: "#",
      },
      {
        text: "3D Animation",
        href: "/services/3D Product Animation",
      },
    ],
  },
  support: {
    title: "SUPPORT",
    links: [
      { text: "Privacy Policy", href: "/privacy-policy" },
      { text: "Terms of Service", href: "/terms-of-service" },
      { text: "Help Center", href: routes.contact.link },
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
      // {
      //   text: "Company Portfolio",
      //   href: "https://drive.google.com/file/d/13U3baPQyC8cg2tJdKEh5E43Alw23IHVH/view?usp=sharing",
      // },
      // { text: "Brand Guideline", href: "/brand-guideline" },
    ],
  },
  copyright: "© 2022 - 2025 • Netro Systems, All Rights Reserved.",
  socialLinks: [
    {
      platform: "linkedin",
      href: "http://linkedin.com/company/netrosystems",
      icon: (
        <LinkedinOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "facebook",
      href: "https://www.facebook.com/netrosystems",
      icon: (
        <FacebookIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "dribbble",
      href: "https://dribbble.com/netrosystems",
      icon: (
        <DribbleIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "github",
      href: "https://github.com/netrosystems",
      icon: (
        <GithubIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "behance",
      href: "https://www.behance.net/netrosystems",
      icon: (
        <BehanceIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "twitter",
      href: "https://x.com/netrosystems",
      icon: (
        <TwitterIcon className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white" />
      ),
    },

    {
      platform: "instagram",
      href: "https://www.instagram.com/netrosystems",
      icon: (
        <InstagramIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "youtube",
      href: "https://www.youtube.com/@netrosystems",
      icon: (
        <YoutubeIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },

    // {
    //   platform: "telegram",
    //   href: "#",
    //   icon: (
    //     <TelegramOutlinedIcon
    //       color={colors.black}
    //       className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
    //     />
    //   ),
    // },
    {
      platform: "pinterest",
      href: "https://pinterest.com/netrosystems",
      icon: (
        <PinterestIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white"
        />
      ),
    },
    {
      platform: "codecanyon",
      href: "https://codecanyon.net/user/netrosystems/portfolio",
      icon: (
        <CodeCanyonIcon
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

export const homeHeroSocialsData = [
  {
    icon: (
      <CalendarIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0"
        color={colors.white}
      />
    ),
    link: tidycalMettingUrl,
    text: "Book a call",
  },
  {
    icon: (
      <WhatsappOutlinedIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0"
        color={colors.white}
      />
    ),
    link: "https://wa.me/message/O7VDJ52RI3Q5G1",
    text: "WhatsApp",
  },
  {
    icon: (
      <TelegramOutlinedIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0 text-white"
        color={colors.white}
      />
    ),
    link: "https://t.me/netrosystems",
    text: "Telegram",
  },
  {
    icon: (
      <LinkedinOutlinedIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0 text-white"
        color={colors.white}
      />
    ),
    link: "http://linkedin.com/company/netrosystems",
    text: "LinkedIn",
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
    link: "https://wa.me/message/O7VDJ52RI3Q5G1",
  },
  {
    icon: (
      <TelegramOutlinedIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0 text-white"
        color={colors.white}
      />
    ),
    link: "https://t.me/netrosystems",
  },
  {
    icon: (
      <LinkedinOutlinedIcon
        className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0 text-white"
        color={colors.white}
      />
    ),
    link: "http://linkedin.com/company/netrosystems",
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

export const clientCompanyData = [
  images.companyBlack1,
  images.companyBlack2,
  images.companyBlack3,
  images.companyBlack4,
  images.companyBlack5,
  images.companyBlack6,
  images.companyBlack7,
  images.companyBlack8,
  images.companyBlack9,
  images.companyBlack10,
  images.companyBlack11,
  images.companyBlack12,
  images.companyBlack13,
];

export const contactData = {
  netroContactMail: "hello@netrosystems.com",
  netroContactPhone: "+880 1724244796",
  netroWhatsappLink: "https://wa.me/message/O7VDJ52RI3Q5G1",
};
