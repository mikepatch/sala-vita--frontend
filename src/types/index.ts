import { type Route } from "next";
import { type StaticImageData } from "next/image";

export type TOfferItem = {
	id: string;
	title: string;
	shortDescription: string;
	description: string;
	image: StaticImageData;
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
