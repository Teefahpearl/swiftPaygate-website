/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Emjay-1": "#ECECEC",
        "Emjay-2": "#0B1C57",
        "Emjay-3": "#0C0C0C",
        "Emjay-4": "#94BAF2",
        "Emjay-5": "#265193",
        "Emjay-6": "#2D5FAB",
        "Emjay-7": "#404040",
        "Emjay-8": "#FFFFFF",
        "Emjay-9": "#959595",
        "Emjay-10": "#D0D0D0",
        "Emjay-11": "#009494",
        "Emjay-12": "#5B7BAC",
        "Emjay-13": "#F0F9F9",
        "Emjaybg": "#137394",
      },
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"]
      },
      fontSize: {
        base: ['16px', '21.17px'],
        base2: ['16px', '19.25px'],
        lg2: ['16px', '19.25px'],
        lg3: ['20px', '32px'],
        xlg: ['32px', '51.2px'],
        lg4: ['24px', '38.4px'],
        lg5: ['24px', '31.75px'],
        xl64: ['64px', '84.67px'],
        base3: ['48px', '64px'],
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}