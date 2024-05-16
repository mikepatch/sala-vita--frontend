import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://sala-vita.pl/",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://sala-vita.pl/oferta",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: "https://sala-vita.pl/galeria",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
		{
			url: "https://sala-vita.pl/propozycja-menu",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
		{
			url: "https://sala-vita.pl/kontakt",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.9,
		},
	];
}
