import { Metadata } from "next";
import React from "react";

const OG_IMAGE_URL = "https://netrosystems.com/images/og-image.jpg";

export const metadata: Metadata = {
  title: "Our Work | Software, Design & Product Portfolio",
  description: "Explore Netro Systems’ project portfolio - custom apps, UI/UX designs, SaaS platforms, and animations built for startups and global enterprises.",
  keywords: "portfolio, software projects, UI/UX case studies, SaaS showcase, animation work",

  openGraph: {
    title: "Our Work | Software, Design & Product Portfolio",
    description: "Explore Netro Systems’ project portfolio - custom apps, UI/UX designs, SaaS platforms, and animations built for startups and global enterprises.",
    url: "https://netrosystems.com/portfolio",
    siteName: "Netro Systems",
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Netro Systems Portfolio" }],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Work | Software, Design & Product Portfolio",
    description: "Explore Netro Systems’ project portfolio - custom apps, UI/UX designs, SaaS platforms, and animations built for startups and global enterprises.",
    images: [OG_IMAGE_URL],
    creator: "@netrosystems",
  },
};


const PortfolioLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full w-full">{children}</div>;
};

export default PortfolioLayout;
