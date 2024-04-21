import NextImage from "next/image";
import Link from "next/link";
import { Gem } from "lucide-react";

import { OFFER_ITEMS } from "@/constants";

export const OfferIntro = () => {
	return (
		<section className="container flex flex-col gap-6 xl:flex-row-reverse xl:justify-between xl:gap-12">
			<article className="flex flex-col px-8 xl:max-w-lg">
				<header>
					<h2 className="py-6 text-4xl font-bold text-brand-primary">Oferta</h2>
				</header>
				<div className="flex flex-col gap-6">
					<p>
						W <strong>VITA</strong> oferujemy kompleksową organizację wydarzeń okolicznościowych.
					</p>
					<ul className="flex flex-col gap-6">
						{OFFER_ITEMS.map(({ id, title, shortDescription }) => (
							<li key={id} className="flex items-center gap-4">
								<Gem strokeWidth={2} className="" />
								<article className="basis-5/6">
									<header>
										<h3 className="text-xl font-bold text-brand-primary">{title}</h3>
									</header>
									<p>{shortDescription}</p>
								</article>
							</li>
						))}
					</ul>
					<Link
						href="/oferta"
						className="self-start rounded-sm border border-brand-primary border-opacity-60 bg-white px-6 py-3 text-center text-brand-primary shadow-sm transition-colors"
					>
						Sprawdź szczegóły
					</Link>
				</div>
			</article>
			<figure className="h-[600px] max-w-full overflow-hidden xl:basis-1/2 xl:rounded-sm">
				<NextImage
					src="/6.jpg"
					alt="2"
					width={1500}
					height={1500}
					className="h-full w-full animate-fade-right object-cover object-center"
				/>
			</figure>
		</section>
	);
};
