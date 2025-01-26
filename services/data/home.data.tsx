import { images } from "@/services";
import {
  BehanceIcon,
  DribbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinOutlinedIcon,
  TelegramOutlinedIcon,
  TwitterIcon,
  WhatsappOutlinedIcon,
  YoutubeIcon,
} from "@/services/assets/svgs";
import colors from "@/lib/colors";

export const marqueeHomeData = [
  {
    image: images.companyWhite1,
    darkImage: images.companyBlack1,
  },
  {
    image: images.companyWhite2,
    darkImage: images.companyBlack2,
  },
  {
    image: images.companyWhite3,
    darkImage: images.companyBlack3,
  },
  {
    image: images.companyWhite4,
    darkImage: images.companyBlack4,
  },
  {
    image: images.companyWhite5,
    darkImage: images.companyBlack5,
  },
  {
    image: images.companyWhite6,
    darkImage: images.companyBlack6,
  },
];

export const projectsData = [
  {
    name: "Telzen",
    description:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    image: images.projectBannerTelzen,
    icon: images.telzenIcon,
  },
  {
    name: "Yoowifi",
    description:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    image: images.projectBannerYooWifi,
    icon: images.yoowifiIcon,
  },
];

export const servicesHomeData = [
  {
    title: "Software Development",
    text: "Building robust solutions to power your business growth.",
    link: "",
    imageComponent: {
      src: images.doubleLCrystal,
      alt: "Double L Crystal",
      className: "!max-w-[142px] md:!max-w-[194px] h-auto",
    },
  },
  {
    title: "UXUI \nDesign",
    text: "Designing seamless and intuitive digital experiences.",
    link: "",
    imageComponent: {
      src: images.gemCrystal,
      alt: "Gem crystal image",
      className: "!max-w-[96px] md:!max-w-[135px] h-auto",
    },
  },
  {
    title: "AI Apps Custom LLMs",
    text: "Building intelligent applications that revolutionize user experiences.",
    link: "",
    imageComponent: {
      src: images.starMixerCrystal,
      alt: "",
      className: "!max-w-[133px] md:!max-w-[156px] h-auto",
    },
  },
  {
    title: "Branding Solution",
    text: "Building identities that leave a lasting impression.",
    link: "",
    imageComponent: {
      src: images.starCrystal,
      alt: "",
      className: "!max-w-[136px] md:!max-w-[184px] h-auto",
    },
  },
  {
    title: "Server Maintenance",
    text: "24/7 server care to prevent downtime and ensure efficiency.",
    link: "",
    imageComponent: {
      src: images.honeycombCrystal,
      alt: "",
      className: "!max-w-[116px] md:!max-w-[180px] h-auto",
    },
  },
];

export const productsData = [
  {
    name: "Yoowifi",
    description:
      "A cutting-edge telecom project delivering seamless connectivity solutions.",
  },
  {
    name: "Indemnif.ai",
    description:
      "A cutting-edge telecom project delivering seamless connectivity solutions.",
  },
  {
    name: "Artistry",
    description:
      "A cutting-edge telecom project delivering seamless connectivity solutions.",
  },
  {
    name: "kanga",
    description:
      "A cutting-edge telecom project delivering seamless connectivity solutions.",
  },
];

export const teamData = [
  {
    name: "asiq mohammed",
    position: "Managing Director & CEO",
    image: images.team1,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  {
    name: "altamira tripty",
    position: "Chief Marketing Officer (CMO)",
    image: images.team2,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  {
    name: "sultan mahmud",
    position: "Chief Operations Officer (COO)",
    image: images.team3,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  {
    name: "ahmed lincon",
    position: "Chief Technology Officer (CTO)",
    image: images.team4,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  {
    name: "asiq mohammed",
    position: "Managing Director & CEO",
    image: images.team1,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  {
    name: "altamira tripty",
    position: "Chief Marketing Officer (CMO)",
    image: images.team2,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  {
    name: "sultan mahmud",
    position: "Chief Operations Officer (COO)",
    image: images.team3,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  {
    name: "ahmed lincon",
    position: "Chief Technology Officer (CTO)",
    image: images.team4,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
];

export const faqData = [
  {
    question: "What services does Netro Creative offer?",
    answer:
      "Netro Creative offers a wide range of services including custom software development, mobile app development, web application development, enterprise software solutions, software consulting, and ongoing maintenance and support.",
  },
  {
    question: "What industries does Netro Creative specialize in?",
    answer:
      "Netro Creative specializes in a wide range of industries, including finance, healthcare, e-commerce, education, and more. We tailor our services to meet the unique needs of each industry.",
  },
  {
    question:
      "How does Netro Creative ensure the quality of its software products?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "What is Netro Creative's development process?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "How does Netro Creative handle data security and privacy?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "Does Netro Creative provide ongoing support and maintenance?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "What are Netro Creative's pricing models?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "How can I get started with Netro Creative?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
];

export const journalData = [
  {
    title: "Vision for creative excellence vision",
    image: images.blog1,
    date: "30 November, 2024",
    link: "",
  },
  {
    title: "Vision for creative excellence vision",
    image: images.blog2,
    date: "30 November, 2024",
    link: "",
  },
  {
    title: "Vision for creative excellence vision",
    image: images.blog3,
    date: "30 November, 2024",
    link: "",
  },
];

export const pricingData = [
  {
    title: "UI/UX Design",
    subtitle: "For personal or Industrial",
    price: 29,
    period: "per hour",
    popular: false,
    features: [
      "Ensured proper UX",
      "Followed guide or create",
      "Modern softwares",
      "Scalable and ready to develop",
      "Collaborative",
    ],
  },
  {
    title: "Development",
    subtitle: "For personal or Industrial",
    price: 49,
    period: "per hour",
    popular: true,
    features: [
      "Frontend Development",
      "Backend Development",
      "Database, Server Setup",
      "DevOps and Deploy",
      "Bug Fixing",
      "After sales service",
    ],
  },
  {
    title: "Branding",
    subtitle: "For personal or Industrial",
    price: 19,
    period: "per hour",
    popular: false,
    features: [
      "Logo from scratch",
      "Brand Guideline",
      "Animation and Graphical assets",
      "3D Animation",
      "Brand Assets preparation",
    ],
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
        <TwitterIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "linkedin",
      href: "#",
      icon: (
        <LinkedinOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6"
        />
      ),
    },
    {
      platform: "instagram",
      href: "#",
      icon: (
        <InstagramIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "youtube",
      href: "#",
      icon: (
        <YoutubeIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "facebook",
      href: "#",
      icon: (
        <FacebookIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "telegram",
      href: "#",
      icon: (
        <TelegramOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6"
        />
      ),
    },
    {
      platform: "dribbble",
      href: "#",
      icon: (
        <DribbleIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "behance",
      href: "#",
      icon: (
        <BehanceIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "github",
      href: "#",
      icon: (
        <GithubIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
  ],
  actions: [{ text: "Go To Top", href: "#top" }],
};
