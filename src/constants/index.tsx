import { Mail, MapPin, Phone } from "lucide-react";
import { type TPhoto } from "@/components/common/gallery/types";
import { type TContactItem, type TOfferItem } from "@/types";

export const NAV_ITEMS = [
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
	},
	{
		id: "baptisms",
		title: "Komunie i chrzciny",
		shortDescription: "Przyjęcia komunijne oraz chrzciny w eleganckiej atmosferze.",
	},
	{
		id: "corporate-events",
		title: "Imprezy firmowe",
		shortDescription: "Konferencje, szkolenia i inne imprezy firmowe.",
	},
	{
		id: "occasional-events",
		title: "Imprezy okolicznościowe",
		shortDescription: "Przyjęcia urodzinowe, jubileuszowe i inne.",
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

export const GALLERY_INTRO_IMAGES: TPhoto[] = [
	{ id: 1, src: "/images/1.jpeg", alt: "1" },
	{ id: 2, src: "/images/2.jpg", alt: "2" },
	{ id: 3, src: "/images/3.jpg", alt: "3" },
	{ id: 4, src: "/images/4.jpg", alt: "4" },
	{ id: 5, src: "/images/5.jpg", alt: "5" },
	{ id: 6, src: "/images/6.jpg", alt: "6" },
];
