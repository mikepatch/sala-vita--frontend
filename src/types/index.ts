import { type Route } from "next";

export type TOfferItem = {
	id: string;
	title: string;
	shortDescription: string;
	description: string;
};

export type TContactItem = {
	icon: JSX.Element;
	title: string;
	content: string;
	href: string;
};

export type TNavItem = {
	href: Route;
	label: string;
};

export type TDishes = {
	title: string;
	meals: string[];
};
