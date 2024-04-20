import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const plugin = require("tailwindcss/plugin");

const animationDelayPlugin = plugin(
	({
		matchUtilities,
		theme,
	}: {
		matchUtilities: PluginAPI["matchUtilities"];
		theme: PluginAPI["theme"];
	}) => {
		matchUtilities(
			{
				"animation-delay": (value: string) => {
					return {
						"animation-delay": value,
					};
				},
			},
			{
				values: {
					"0": "0s",
					"100": "100ms",
					"150": "150ms",
					"200": "200ms",
					"250": "250ms",
					"300": "300ms",
					"350": "350ms",
					"400": "400ms",
					"450": "450ms",
					"500": "500ms",
					"550": "550ms",
					"600": "600ms",
					"650": "650ms",
					"700": "700ms",
					"750": "750ms",
					"800": "800ms",
					"850": "850ms",
					"900": "900ms",
					"950": "950ms",
					"1000": "1000ms",
					"1100": "1100ms",
					"1200": "1200ms",
					"1300": "1300ms",
					"1400": "1400ms",
					"1500": "1500ms",
				},
			},
		);
	},
);

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"fade-up": "fade-up .7s ease-out both",
				"fade-down": "fade-down .5s ease-out both",
				"fade-left": "fade-left 1s ease-out both",
				"fade-right": "fade-right 1s ease-out both",
				"fade-in": "fade-in 1.5s ease-out both",
			},
			keyframes: {
				"fade-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(1rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-1rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(1rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(-1rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
			fontWeight: {
				400: "400",
				semibold: "500",
				bold: "700",
			},
			colors: {
				white: "#FBFAF5",
				black: "#222222",
				"brand-primary": "#6d5915",
				"brand-primary-light": "#A68A21",
				"brand-primary-dark": "#504210",
			},
			backgroundImage: {
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
	plugins: [animationDelayPlugin],
};
export default config;
