import { Gem } from "lucide-react";

import { OFFER_ITEMS } from "@/constants";

export const OfferIntroFeatureList = () => {
	return (
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
	);
};
