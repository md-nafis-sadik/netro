import { StaticImageData } from "next/image";
import React from "react";

export type IService = Readonly<{
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  icon?: React.ReactNode;
  link?: string;
  featuredImage: StaticImageData;
  tags: string[];
  content: string;
  metaTitle?: string;
  metaDescription?: string;
}>;
