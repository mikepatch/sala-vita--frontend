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
				"navbar-small": "60px",
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
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-hero":
					"linear-gradient(0deg, rgba(251,250,245,1) 0%, rgba(251,250,245,0.25) 100%)",
				"gradient-hero-2":
					"radial-gradient(circle, rgba(251,250,245,1) 0%, rgba(251,250,245,0.25) 80%)",
				"gradient-footer": "linear-gradient(0deg, rgba(80,66,16,0.6) 0%, rgba(80,66,16,1) 80%)",
			},
		},
	},
	plugins: [],
};
export default config;
