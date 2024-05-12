import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const plugin = require("tailwindcss/plugin");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontWeight: {
				400: "400",
				semibold: "500",
				bold: "700",
			},
			spacing: {
				navbar: "100px",
				"navbar-small": "70px",
			},
			colors: {
				white: "#FBFAF5",
				black: "#222222",
				"brand-primary": "#6d5915",
				"brand-primary-light": "#806919",
				"brand-primary-dark": "#504210",
			},
			backgroundImage: {
				"bg-pattern": "url('/images/bg-pattern.svg')",
				"gradient-hero":
					"linear-gradient(0deg, rgba(251,250,245,1) 0%, rgba(251,250,245,0.25) 100%)",
			},
		},
	},
	plugins: [],
};
export default config;
