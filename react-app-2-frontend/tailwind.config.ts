import type { Config } from "tailwindcss"
const withMT = require("@material-tailwind/react/utils/withMT")

const config: Config = {
   mode: "jit",
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/tailwind-datepicker-react/dist/**/*.js",
   ],
   theme: {
      extend: {
         colors: {
            main: "darkslategray",
            "main-darker": "#243b35",
            light: "#e2e6e7",
            "light-secondary": "#afb6af",
            dark: "#222220",
            "dark-soft": "gray",
            "priority-low": "#2ECC71",
            "priority-medium": "#E49B0F",
            "priority-high": "#E74C3C",
         },
         flex: {
            "basis-22": "0 0 23.5%",
         },
      },
   },
   plugins: [],
}

export default withMT(config)
