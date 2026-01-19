import { StaticImageData } from "next/image";

export type IProject = Readonly<{
  _id: string;
  name: string;
  description: string;
  buttonPurpose: string;
  backgroundImage: StaticImageData;
  backgroundColor: string;
  buttons: ReadonlyArray<{
    text: string;
    url: string;
  }>;
}>;
