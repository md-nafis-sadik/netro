import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        bonbon: ["var(--font-bonbon)"],
        "yeseva-one": ["var(--font-yeseva-one)"],
        poppins: ["var(--font-poppins)"],
        scoutcond: ["var(--font-scout-one)"],
      },
      padding: {
        30: "7.5rem", // 120px
        15: "3.75rem", // 60px
      },
      screens: {
        xs: "380px",
      },
      height: {
        30: "7.5rem", // 120px
      },
      width: {
        30: "7.5rem", // 120px
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          100: "#fafafa",
        },
        blue: {
          950: "#131C53",
          900: "#060023",
        },
        black: {
          DEFAULT: "#000000",
          900: "#0A0400",
          800: "#03020B",
          700: "#767676",
          50: "#E1E2E5",
        },
        main: {
          50: "#ECEFFF",
          100: "#DDE1FF",
          200: "#C1C8FF",
          300: "#9CA4FF",
          350: "#0DB9E8",
          400: "#7775FF",
          500: "#6455FF",
          600: "#5536F5",
          700: "#5536F5",
          800: "#3C24AF",
          900: "#332689",
          950: "#201650",
        },
        secondary: {
          50: "#FFF8ED",
          100: "#FFFCC5",
          200: "#FFFA85",
          300: "#FFF146",
          400: "#FFE31B",
          500: "#FFC400",
          600: "#E29800",
          700: "#BB6C02",
          800: "#985308",
          900: "#7C440B",
          950: "#FF9D00",
        },
        status: {
          success: "#2CC672",
          error: "#FF6B6B",
          warning: "#FF9F43",
          info: "#54A0FF",
          alert: "#FECA57",
        },
        text: {
          disabled: "#D0D0D0",
          rgb44: "rgba(207, 215, 238, 0.44)",
          50: "#FFFFFF",
          100: "#E7E7E7",
          200: "#D1D1D1",
          500: "#6D6D6D",
          600: "#888888",
          700: "#4F4F4F",
          750: "#474747",
          900: "#000000",
        },
        natural: {
          50: "#FFFFFF",
          100: "#F6F6F6",
          200: "#EEEEEE",
          300: "#E0E0E0",
          350: "#E8E8E8",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          950: "#0F0F0F",
          black: "#000000",
        },
        darkbg: {
          DEFAULT: "#03020B",
        },
        darkPurplebg: {
          DEFAULT: "#060023",
        },
        "new-main": {
          950: "#201650",
        },
        orange: {
          500: "#FFA77C",
        },
        green: {
          500: "#7FFBAF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        gradientGreen:
          "linear-gradient(90deg, #483BDC 30%, #FFA8A9 70.5%, #82D3A4 100%)",
        blandGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #002F25 100%)",
      },
      boxShadow: {
        nav: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
