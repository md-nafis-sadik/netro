import { images } from "@/services";
import {
  LinkedinOutlinedIcon,
  TelegramOutlinedIcon,
  WhatsappOutlinedIcon,
} from "@/services/assets/svgs";

export const servicesHomeData = [
  {
    title: "Software Development",
    text: "Building robust solutions to power your business growth.",
    link: "",
    imageComponent: {
      src: images.doubleLCrystal,
      alt: "Double L Crystal",
      className: "w-[194px] h-auto",
      width: 194,
    },
  },
  {
    title: "UXUI \nDesign",
    text: "Designing seamless and intuitive digital experiences.",
    link: "",
    imageComponent: {
      src: images.gemCrystal,
      alt: "Gem crystal image",
      className: "w-[135px] h-auto",
      width: 135,
    },
  },
  {
    title: "AI Apps Custom LLMs",
    text: "Building intelligent applications that revolutionize user experiences.",
    link: "",
    imageComponent: {
      src: images.StarMixerCrystal,
      alt: "",
      className: "w-[156px] h-auto",
      width: 156,
    },
  },
  {
    title: "Branding Solution",
    text: "Building identities that leave a lasting impression.",
    link: "",
    imageComponent: {
      src: images.StarCrystal,
      alt: "",
      className: "w-[184px] h-auto",
      width: 184,
    },
  },
  {
    title: "Server Maintenance",
    text: "24/7 server care to prevent downtime and ensure efficiency.",
    link: "",
    imageComponent: {
      src: images.honeycombCrystal,
      alt: "",
      className: "w-[180px] h-auto",
      width: 180,
    },
  },
];

export const heroHomeSocialsData = [
  {
    icon: <WhatsappOutlinedIcon className="!w-6 !h-6 !shrink-0" />,
    link: "",
  },
  {
    icon: <TelegramOutlinedIcon className="!w-6 !h-6 !shrink-0" />,
    link: "",
  },
  {
    icon: <LinkedinOutlinedIcon className="!w-6 !h-6 !shrink-0" />,
    link: "",
  },
];
