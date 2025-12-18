import { Metadata } from "next";
import React from "react";

const OG_IMAGE_URL = "https://netrosystems.com/images/og-image.jpg";

export const metadata: Metadata = {
  title: "About Netro Systems | Innovative Software Company",
  description: "Learn about Netro Systems - a Bangladesh-based software company delivering design, SaaS, and development solutions for global innovation.",
  keywords: "about Netro Systems, software company, tech innovation, IT company Bangladesh, digital solutions",

  openGraph: {
    title: "About Netro Systems | Innovative Software Company",
    description: "Learn about Netro Systems - a Bangladesh-based software company delivering design, SaaS, and development solutions for global innovation.",
    url: "https://netrosystems.com/about",
    siteName: "Netro Systems",
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "About Netro Systems" }],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Netro Systems | Innovative Software Company",
    description: "Learn about Netro Systems - a Bangladesh-based software company delivering design, SaaS, and development solutions for global innovation.",
    images: [OG_IMAGE_URL],
    creator: "@netrosystems",
  },
};


const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full w-full">{children}</div>;
};

export default AboutLayout;
