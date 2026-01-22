import { StaticImageData } from "next/image";
import { images } from "../assets";

export interface IAward {
  icon: "star" | "prize" | "award";
  title: string;
  description: string;
  year: string;
  image?: StaticImageData;
  imageClassName?: string;
}

export const awardsData: IAward[] = [
  {
    icon: "star",
    title: "Behance Feature",
    description:
      "Highlighted for outstanding ideas, compelling storytelling, and design work",
    year: "Jan - 2023",
    image: images.topClutch,
    imageClassName: "aspect-[326/347]",
  },
  {
    icon: "prize",
    title: "Awwwards Honorable Mention",
    description: "Recognized for innovation and creativity in web design",
    year: "Aug - 2022",
    image: images.raterGreat,
    imageClassName: "aspect-[295/347]",
  },
  {
    icon: "award",
    title: "Design Excellence Award",
    description: "Honored for cutting-edge UI/UX designs and brand experiences",
    year: "March - 2023",
    image: images.globalAward,
    imageClassName: "aspect-[396/340]",
  },
];
