import sectionImg from "../../../../public/images/6.jpg";
import { LinkButton } from "@/components/common/LinkButton";
import { IntroSectionImage } from "@/components/common/IntroSectionImage";
import { IntroSectionHeader } from "@/components/common/IntroSectionHeader";
import { IntroSectionContainer } from "@/components/common/IntroSectionContainer";
import { OfferIntroFeatureList } from "@/components/offer/offer-intro/OfferIntroFeatureList";

export const OfferIntro = () => {
	return (
		<IntroSectionContainer layout="row-reverse">
			<article className="flex flex-col px-8 lg:max-w-lg">
				<IntroSectionHeader title="Oferta" />
				<div className="flex flex-col gap-6">
					<p>
						W <strong>VITA</strong> oferujemy kompleksową organizację wydarzeń okolicznościowych.
					</p>
					<OfferIntroFeatureList />
					<LinkButton href="/oferta" className="self-start">
						Sprawdź szczegóły
					</LinkButton>
				</div>
			</article>
			<IntroSectionImage img={sectionImg} alt="Stół z zastawą" />
		</IntroSectionContainer>
	);
};
