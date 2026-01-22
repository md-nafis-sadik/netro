import { images } from "../assets";
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
    title: "SaaS, MVP Development",
    description:
      "Tailored software solutions designed to meet your unique business needs and drive growth.",
    image: images.service1,
  },
  {
    _id: "service-02",
    title: "App Development",
    description:
      "Tailored software solutions designed to meet your unique business needs and drive growth.",
    image: images.service2,
  },
  {
    _id: "service-03",
    title: "Vibe Coding: MVP",
    description:
      "Tailored software solutions designed to meet your unique business needs and drive growth.",
    image: images.service3,
  },
  {
    _id: "service-04",
    title: "SQA, Deployment, Support",
    description:
      "Tailored software solutions designed to meet your unique business needs and drive growth.",
    image: images.service4,
  },
  {
    _id: "service-05",
    title: "UIUX Design, Branding",
    description:
      "Tailored software solutions designed to meet your unique business needs and drive growth.",
    image: images.service5,
  },
]);
