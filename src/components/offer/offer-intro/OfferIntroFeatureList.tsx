import { OFFER_ITEMS } from "@/constants";
import { GemIcon } from "@/components/common/GemIcon";

export const OfferIntroFeatureList = () => {
	return (
		<ul className="flex flex-col gap-6">
			{OFFER_ITEMS.map(({ id, title, shortDescription }) => (
				<li key={id} className="flex items-center gap-4">
					<GemIcon />
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
