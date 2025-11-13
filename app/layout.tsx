import ScrollToTopOnRouteChange from "@/components/common/ScrollToTopOnRouteChange";
import Footer from "@/components/footer/Footer";
import LetsTalk from "@/components/letsTalk/LetsTalkHome";
import NavbarWrapper from "@/components/navigation/NavbarWrapper";
import { TidycalModal } from "@/components/shared/TidycalModal";
import LenisWrapper from "@/components/wrappers/LenisWrapper";
import { TidycalModalProvider } from "@/contexts/TidycalModalContext";
import { bonbon, inter, scout, scoutCond, yesevaOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/animation.css";
import "@/styles/app.css";
import "@/styles/bgGradient.css";
import "@/styles/globals.css";
import "@/styles/textGradient.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Netro Systems",
  description:
    "𝗖𝘂𝘀𝘁𝗼𝗺 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝘀𝗼𝗹𝘂𝘁𝗶𝗼𝗻𝘀 - 𝗯𝘂𝗶𝗹𝘁 𝗳𝗼𝗿 𝘆𝗼𝘂𝗿 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀.",
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
          "bg-white min-h-screen text-neutral-700 relative"
        )}
      >
        <TidycalModalProvider>
          <LenisWrapper>
            <ScrollToTopOnRouteChange />
            <NavbarWrapper />
            {children}
            <LetsTalk />
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
