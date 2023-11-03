import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        simpleblue: "#0C5BC6",
        lightsteelblue: "rgba(198, 222, 255, 0.1)",
        "text-mid-grey": "#5e587a",
        "text-purple-haze": "#494369",
        royalblue: "#0c5bc6",
        "text-bright-grey": "#332c5c",
        whitesmoke: "#f5f5f5",
        featureLinkBorder: "#EBEBF0",
        cardBlue: "rgb(41,63,214)",
      },
      boxShadow: {
        sd: "shadow-[5px_5px_15px_rgba(0,_0,_0,_0.1),_-5px_-5px_15px_rgba(0,_0,_0,_0.1)_inset] ",
      },
    },
  },
  plugins: [],
};
export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//   colors: {
//     white: "#fff",
//     gainsboro: "rgba(229, 229, 229, 0.5)",
//     royalblue: "#0c5bc6",
//     gray: "#242331",
//   },
//   spacing: {},
//   fontFamily: {
//     nunito: "Nunito",
//     "nunito-sans": "'Nunito Sans'",
//   },
// },
// fontSize: {
//   lg: "1.13rem",
//   inherit: "inherit",
// },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };
