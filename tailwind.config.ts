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
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        main: {
          50: "#ECEFFF",
          100: "#DDE1FF",
          200: "#C1C8FF",
          300: "#9CA4FF",
          400: "#7775FF",
          500: "#6455FF",
          600: "#5536F5",
          700: "#5536F5",
          800: "#3C24AF",
          900: "#332689",
          950: "#201650",
        },
        secondary: {
          100: "#FFFCC5",
          200: "#FFFA85",
          300: "#FFF146",
          400: "#FFE31B",
          500: "#FFC400",
          600: "#E29800",
          700: "#BB6C02",
          800: "#985308",
          900: "#7C440B",
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
          50: "#FFFFFF",
          100: "#E7E7E7",
          200: "#D1D1D1",
          600: "#888888",
          700: "#4F4F4F",
          900: "#000000",
        },
        natural: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          black: "#000000",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
