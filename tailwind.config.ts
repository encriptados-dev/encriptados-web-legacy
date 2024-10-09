import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Fuente personalizada Roboto
      },
      backgroundImage: {
        "cyan-gradient":
          "linear-gradient(360deg, rgba(211,245,255,1) 0%, rgba(244,248,250,1) 29%)",
        "cyan-black-gradient":
          "linear-gradient(150deg, rgba(0,0,0,1) 12%, rgba(53,205,251,1) 100%)",
        "red-black-gradient":
          "linear-gradient(170deg, rgba(0,0,0,1) 25%, rgba(209,24,39,1) 100%)",
        "custom-gradient-img":
         "linear-gradient(180deg, #def7ff 40%, transparent 60%)",        
      },
    },
  },
  plugins: [],
};

export default config;
