import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cyan-gradient":
          "linear-gradient(360deg, rgba(211,245,255,1) 0%, rgba(244,248,250,1) 29%)",
        "cyan-black":
          "linear-gradient(150deg, rgba(0,0,0,1) 12%, rgba(53,205,251,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
