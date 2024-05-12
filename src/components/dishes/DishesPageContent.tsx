import { Accordion } from "@/components/common/Accordion/Accordion";
import { GemIcon } from "@/components/common/GemIcon";
import { Heading } from "@/components/common/Heading";
import { PageSectionContainer } from "@/components/common/PageSectionContainer";
import { DISHES, PROPOSAL_MENU } from "@/constants";

export const DishesPageContent = () => {
	const pricePerPerson = new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(150);

	return (
		<PageSectionContainer className="px-8">
			<p className="pt-16 text-center">
				Poniżej znajdziesz propozycję menu dla imprezy okolicznościowej oraz listę wszystkich
				dostępnych dań w sali bankietowej <strong>VITA</strong>. Finalną wersję ustalamy i wyceniamy
				wspólnie z klientem.
			</p>
			<section className="flex flex-col gap-8">
				<header className="flex flex-wrap items-center gap-2">
					<GemIcon />
					<Heading level={2}>Propozycja menu</Heading>
				</header>
				<article className="flex flex-col gap-8">
					<p>
						Menu dedykowane dla minimum 30 osób. Wydarzenia typu obiad rodzinny, chrzciny, roczek i
						podobne.
					</p>
					{<Accordion items={PROPOSAL_MENU} />}
					<div className="flex gap-2">
						<p>
							Cena:{" "}
							<strong className="text-xl">
								{pricePerPerson}
								<small>/za osobę</small>
							</strong>
						</p>
					</div>
				</article>
			</section>
			<section className="flex flex-col gap-8 pb-8">
				<header className="flex flex-wrap items-center gap-2">
					<GemIcon />
					<Heading level={2}>Wszystkie dania</Heading>
				</header>
				<article className="flex flex-col gap-8">
					<p>Sprawdź listę wszystkich dostępnych dań.</p>
					{<Accordion items={DISHES} />}
				</article>
			</section>
		</PageSectionContainer>
	);
};
