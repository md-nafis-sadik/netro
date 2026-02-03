import { StaticImageData } from "next/image";
import React from "react";

export type ServiceDeliverable = {
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  textColor?: string;
};

export type ServiceAtGlanceItem = {
  title: string;
  description: string;
  items: string[];
  bgColor: string;
  textColor: string;
};

export type ServiceTechStack = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
};

export type IService = Readonly<{
  _id: string;
  title: string;
  slug: string;
  descTitle: string;
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
  deliverables?: ServiceDeliverable[];
  deliverablesTitle?: string;
  deliverablesDescription?: string;
  atGlance?: ServiceAtGlanceItem[];
  techStacks?: ServiceTechStack[];
}>;
