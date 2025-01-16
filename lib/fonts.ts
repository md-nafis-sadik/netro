import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/Poppins-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const bonbon = localFont({
  src: [
    {
      path: "../public/fonts/bonbon/Bonbon-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bonbon",
});

export const yesevaOne = localFont({
  src: [
    {
      path: "../public/fonts/yeseva_one/YesevaOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yeseva-one",
});

export const scout = localFont({
  src: [
    {
      path: "../public/fonts/scout/Scout-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/scout/Scout-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-scout-one",
});

export const scoutCond = localFont({
  src: [
    {
      path: "../public/fonts/scout_cond/ScoutCond-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/scout_cond/ScoutCond-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-scout-one",
});
