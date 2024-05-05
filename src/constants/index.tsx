import { Mail, MapPin, Phone } from "lucide-react";
import { type Photo } from "react-photo-album";
import { type TNavItem, type TContactItem, type TOfferItem } from "@/types";

export const NAV_ITEMS: TNavItem[] = [
	{ href: "/", label: "Strona główna" },
	{ href: "/oferta", label: "Oferta" },
	{ href: "/galeria", label: "Galeria" },
	{ href: "/rezerwacje", label: "Rezerwacje" },
	{ href: "/kontakt", label: "Kontakt" },
];

export const OFFER_ITEMS: TOfferItem[] = [
	{
		id: "weddings",
		title: "Wesela",
		shortDescription: "Organizujemy wesela na miarę marzeń.",
		description: `Naszą specjalnością są wesela. Oferujemy kompleksową organizację przyjęć weselnych. Nasi kucharze przygotują pyszne, tradycyjne dania, a nasz zespół zadba o oprawę muzyczną i dekoracje, aby Państwa ślub był wyjątkowy. Standardowy pakiet weselny obejmuje przystawkę, zupę, danie główne, deser oraz napoje, ale istnieje również możliwość skomponowania własnego, indywidualnego menu.`,
	},
	{
		id: "baptisms",
		title: "Komunie i chrzciny",
		shortDescription: "Przyjęcia komunijne oraz chrzciny w eleganckiej atmosferze.",
		description: `Organizujemy przyjęcia komunijne i chrzciny. Nasza sala bankietowa to idealne miejsce na organizację takich wydarzeń. Chętnie dostosujemy się do Państwa preferencji i pomożemy w zorganizowaniu wymarzonego wydarzenia.`,
	},
	{
		id: "corporate-events",
		title: "Imprezy firmowe",
		shortDescription: "Konferencje, szkolenia i inne imprezy firmowe.",
		description: `Nasza sala bankietowa to idealne miejsce na organizację konferencji, szkoleń, bankietów i innych wydarzeń firmowych. Dysponujemy nowoczesnym zapleczem technicznym, a nasz zespół zadba o sprawną organizację i profesjonalną obsługę Państwa gości. Zapraszamy do zapoznania się z pełną ofertą na naszej stronie internetowej. Chętnie dostosujemy się do Państwa preferencji i pomożemy w zorganizowaniu wymarzonego wydarzenia.`,
	},
	{
		id: "occasional-events",
		title: "Imprezy okolicznościowe",
		shortDescription: "Przyjęcia urodzinowe, jubileuszowe i inne.",
		description: `Organizujemy również urodziny, chrzciny, komunie i inne imprezy rodzinne. Zadbamy o to, aby Państwa wydarzenie było pełne radości i pamiętane przez długi czas. Nasi kucharze przygotują pyszne dania, a nasz zespół zadba o oprawę muzyczną i dekoracje.`,
	},
];

export const CONTACT_ITEMS: TContactItem[] = [
	{
		icon: <Mail size={22} strokeWidth={2} />,
		title: "E-mail",
		content: "example@example.com",
		href: "mailto:example@example.com",
	},
	{
		icon: <Phone size={22} strokeWidth={2} />,
		title: "Telefon",
		content: "+48 503 053 294",
		href: "tel:+48503053294",
	},
	{
		icon: <MapPin size={22} strokeWidth={2} />,
		title: "Adres",
		content: "ul. Gminna 4, 42-261 Starcza",
		href: "https://maps.app.goo.gl/hTUJYDz5p9s7WVAn9",
	},
];

export const GALLERY_IMAGES: Photo[] = [
	{
		src: "/images/1.jpeg",
		width: 2000,
		height: 2000,
		alt: "1",
	},
	{
		src: "/images/2.jpg",
		width: 2000,
		height: 2000,
		alt: "2",
	},
	{
		src: "/images/3.jpg",
		width: 2000,
		height: 2000,
		alt: "3",
	},
	{
		src: "/images/4.jpg",
		width: 2000,
		height: 2000,
		alt: "4",
	},
	{
		src: "/images/5.jpg",
		width: 2000,
		height: 2000,
		alt: "5",
	},
	{
		src: "/images/6.jpg",
		width: 2000,
		height: 2000,
		alt: "6",
	},
	{
		src: "/images/7.jpg",
		width: 2000,
		height: 2000,
		alt: "7",
	},
	{
		src: "/images/8.jpg",
		width: 2000,
		height: 2000,
		alt: "8",
	},
	{
		src: "/images/9.jpg",
		width: 2000,
		height: 2000,
		alt: "9",
	},
	{
		src: "/images/10.jpg",
		width: 2000,
		height: 2000,
		alt: "10",
	},
	{
		src: "/images/11.jpg",
		width: 2000,
		height: 2000,
		alt: "11",
	},
	{
		src: "/images/12.jpg",
		width: 2000,
		height: 2000,
		alt: "12",
	},
];
