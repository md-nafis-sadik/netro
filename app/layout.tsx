import ScrollToTopOnRouteChange from "@/components/common/ScrollToTopOnRouteChange";
import ScrollTriggerRefresh from "@/components/common/ScrollTriggerRefresh";
import Footer from "@/components/footer/Footer";
import NavbarWrapper from "@/components/navigation/NavbarWrapper";
import { TidycalModal } from "@/components/tidycal/TidycalModal";
import LenisWrapper from "@/components/wrappers/LenisWrapper";
import { TidycalModalProvider } from "@/contexts/TidycalModalContext";
import { bonbon, inter, scout, scoutCond, yesevaOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/animation.css";
import "@/styles/app.css";
import "@/styles/bgGradient.css";
import "@/styles/globals.css";
import "@/styles/textGradient.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Metadata } from "next";
import Script from "next/script";
gsap.registerPlugin(ScrollTrigger);

const OG_IMAGE_URL =
  "https://opengraph.b-cdn.net/production/images/eb88ff5b-9a69-4dac-b58d-da9c8cd8817b.png?token=4uWAqpARQAFN7EqcR0HXXkE6w0lWaWBdIUPe_Do_LWM&height=577&width=1200&expires=33301964835";

export const metadata: Metadata = {
  title: "Netro Systems | Software Development & Product Design Company",
  description:
    "Netro Systems is a software company delivering software development, SaaS, UI/UX design, and 3D product animation solutions for global clients.",
  keywords:
    "software company Bangladesh, product design, SaaS, UI/UX design, 3D animation, digital solutions",

  // Open Graph tags
  openGraph: {
    title: "Netro Systems | Software Development & Product Design Company",
    description:
      "Netro Systems is a software company delivering software development, SaaS, UI/UX design, and 3D product animation solutions for global clients.",
    url: "https://netrosystems.com",
    siteName: "Netro Systems",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Netro Systems - Software Development & Product Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "Netro Systems | Software Development & Product Design Company",
    description:
      "Netro Systems is a software company delivering software development, SaaS, UI/UX design, and 3D product animation solutions for global clients.",
    images: [OG_IMAGE_URL],
    creator: "@netrosystems", // Add your Twitter handle if you have one
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification for Google Search Console (if you have one)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" data-arp="">
      <body
        className={cn(
          inter.variable,
          bonbon.variable,
          yesevaOne.variable,
          scoutCond.variable,
          scout.variable,
          "bg-white min-h-screen text-neutral-700 relative",
        )}
      >
        <TidycalModalProvider>
          <LenisWrapper>
            <ScrollToTopOnRouteChange />
            <ScrollTriggerRefresh />
            <NavbarWrapper />
            {children}
            {/* <LetsTalk /> */}
            <Footer />
            {/* <ParallaxContainer
            containerClassName="fixed bottom-10 right-10 z-50"
            scaleAmount={1.5}
            >
            <ContactPin />
          </ParallaxContainer> */}
          </LenisWrapper>

          <TidycalModal />
        </TidycalModalProvider>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8P5R6GX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N8P5R6GX');`,
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
