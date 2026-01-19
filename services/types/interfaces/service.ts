import { StaticImageData } from "next/image";

export type IService = Readonly<{
  _id: string;
  title: string;
  description: string;
  image: StaticImageData;
}>;
