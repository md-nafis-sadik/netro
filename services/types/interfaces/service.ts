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
  image: StaticImageData;
};

export type ServiceTechStack = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
};

export type Challenge = {
  title: string;
  description: string;
};

export type ChallengesSolution = {
  title: string;
  description: string;
  challenges: Challenge[];
};

export type CommitmentCard = {
  title?: string;
  description?: string;
  image?: StaticImageData;
  bg?: StaticImageData;
  bgColor: string;
  textColor: string;
  imageAlt?: string;
  innerText?: string;
};

export type Commitment = {
  title: string;
  description: string;
  cards: CommitmentCard[];
};

export type RelatedWorks = {
  title: string;
};

export type ServiceOfferItem = {
  title: string;
  desc: string;
  link: string;
  featuredImage: StaticImageData;
};

export type ServicesOffer = {
  title: string;
  description: string;
  data: ServiceOfferItem[];
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
  atGlanceTitle?: string;
  atGlanceDescription?: string;
  techStacks?: ServiceTechStack[];
  relatedWorks?: RelatedWorks;
  challengesSolution?: ChallengesSolution;
  commitment?: Commitment;
  servicesOffer?: ServicesOffer;
}>;
