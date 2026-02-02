import { images } from "../assets";
import {
  AiIcon,
  AIMenuIcon,
  AppMenuIcon,
  BrandingMenuIcon,
  SAASMenuIcon,
  SQAMenuIcon,
  UIMenuIcon,
  VibeMenuIcon,
} from "../assets/svgs";
import { IService } from "../types";

export const coreStrengthsServicesData = [
  {
    serial: "01",
    title: "Enterprise",
    text: "Powering businesses with scalable and innovative enterprise solutions.",
  },
  {
    serial: "02",
    title: "Fintech",
    text: "Delivering secure, scalable, and innovative fintech solutions.",
  },
  {
    serial: "03",
    title: "Crypto & Web3",
    text: "Powering secure, scalable, and innovative Crypto & Web3 solutions.",
  },
  {
    serial: "04",
    title: "Technology",
    text: "Transforming ideas into cutting-edge technology solutions.",
  },
  {
    serial: "05",
    title: "Ecommerce",
    text: "Crafting seamless, scalable, and innovative eCommerce experiences.",
  },
  {
    serial: "06",
    title: "Startups & VC",
    text: "Clean design for seamless startup and VC experiences.",
  },
  {
    serial: "07",
    title: "Healthcare",
    text: "Clean, intuitive design for modern, user-centric healthcare solutions.",
  },
  {
    serial: "08",
    title: "Teleco",
    text: "Modern design for seamless, user-focused telecom experiences.",
  },
];

export const servicesData: readonly IService[] = Object.freeze([
  {
    _id: "service-01",
    title: "AI-Powered Development",
    subtitle: "Integrate AI into your products",
    description:
      "We help startups, enterprises, and global brands integrate AI into their products, workflow, and infrastructure through end-to-end engineering.",
    image: images.service1,
    icon: <AIMenuIcon color="#FFC400" />,
    link: "/services/ai-powered-development",
  },
  {
    _id: "service-02",
    title: "SaaS, MVP Development",
    subtitle: "Expertise over 5 years with 30+ apps",
    description:
      "Building a SaaS product or MVP isn’t about writing the most code. It’s about validating the right idea quickly, engineering it properly, and setting yourself up to scale without painful rewrites later.",
    image: images.service2,
    icon: <SAASMenuIcon color="#FF7036" />,
    link: "/services/ai-powered-development",
  },
  {
    _id: "service-03",
    title: "App Development",
    subtitle: "We develop apps with craftsmanship ",
    description:
      "Great apps aren’t just about features—they’re about performance, usability, and reliability. We design and build mobile and web applications that feel intuitive, scale smoothly, and integrate seamlessly with modern backend and AI systems.",
    image: images.service3,
    icon: <AppMenuIcon color="#7AD58D" />,
    link: "/services/ai-powered-development",
  },
  {
    _id: "service-04",
    title: "Vibe Coding Assistance",
    subtitle: "Quick yet MVP needs to develop?",
    description:
      "Vibe Coding is our rapid MVP delivery approach designed for teams that need to move fast, validate ideas early, and get real user feedback—without sacrificing code quality or future scalability. It’s not about rushing. It’s about momentum, focus, and shipping the right thing at the right time.",
    image: images.service4,
    icon: <VibeMenuIcon color="#8F73FF" />,
    link: "/services/ai-powered-development",
  },
  {
    _id: "service-05",
    title: "SQA, Deployment & Support",
    subtitle: "We don’t left you even after development",
    description:
      "Good design isn’t just how a product looks. It’s how it behaves, how easily users move through it, and how confidently they achieve their goals. We design user experiences that are intuitive, scalable, and aligned with real business outcomes.",
    image: images.service5,
    icon: <SQAMenuIcon color="#FFC400" />,
    link: "/services/ai-powered-development",
  },
    {
    _id: "service-06",
    title: "UIUX Design",
    subtitle: "Years of expertise and proven portfolio",
    description:
      "Great software isn’t just built—it’s tested, deployed, monitored, and supported in the real world. We help teams make sure their applications are reliable, secure, and ready for growth long after the first release.",
    image: images.service6,
    icon: <UIMenuIcon color="#FF7036" />,
  },
  {
    _id: "service-07",
    title: "Branding & Stationery",
    subtitle: "We builds visually appealing brands",
    description:
      "Good design isn’t just how a product looks. It’s how it behaves, how easily users move through it, and how confidently they achieve their goals. We design user experiences that are intuitive, scalable, and aligned with real business outcomes.",
    image: images.service7,
    icon: <BrandingMenuIcon color="#7AD58D" />,
    link: "/services/ai-powered-development",
  },
]);

