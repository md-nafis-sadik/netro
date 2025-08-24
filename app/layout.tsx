import type { Metadata } from "next";
import { bonbon, inter, scout, scoutCond, yesevaOne } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/styles/app.css";
import "@/styles/textGradient.css";
import "@/styles/bgGradient.css";
import "@/styles/animation.css";
import Footer from "@/components/footer/Footer";
import LetsTalk from "@/components/letsTalk/LetsTalkHome";
import { cn } from "@/lib/utils";
import LenisWrapper from "@/components/wrappers/LenisWrapper";
import Script from "next/script";
import Image from "next/image";
import NavbarWrapper from "@/components/navigation/NavbarWrapper";

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
        <LenisWrapper>
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

        {/* <Script
          id="facebook-pixel"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1063313381986362');
fbq('track', 'PageView');`,
          }}
        ></Script>
        <noscript>
          <Image
            alt="Facebook Pixel"
            height="1"
            width="1"
            style={{ display: "none", visibility: "hidden" }}
            src="https://www.facebook.com/tr?id=1063313381986362&ev=PageView&noscript=1"
          />
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8P5R6GX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N8P5R6GX');
            `,
          }}
        />
        <Script
          id="visitor-tracking"
          async
          defer
          src="https://app.visitortracking.com/assets/js/tracer.js"
        ></Script>
        <Script
          id="visitor-tracking-init"
          dangerouslySetInnerHTML={{
            __html: `
              function init_tracer() {
                var tracer = new Tracer({
                  websiteId : "c87457c7-3ebb-4987-b4c8-9cd0a745586b",
                  async : true,
                  debug : false
                });
              }
              window.onload = init_tracer;
            `,
          }}
        /> */}
        <Script
          id="visitor-tracking"
          strategy="afterInteractive"
          src="https://app.visitortracking.com/assets/js/tracer.js"
        />

        <Script
          id="visitor-tracking-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      function init_tracer() {
        var tracer = new Tracer({
          websiteId: "c87457c7-3ebb-4987-b4c8-9cd0a745586b",
          async: true,
          debug: false
        });
      }
      window.onload = init_tracer;
    `,
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
