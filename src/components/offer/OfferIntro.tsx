import sectionImg from "../../../public/images/sala-bankietowa-vita-6.jpg";
import { Container, Header, Image } from "@/components/common/IntroSection";
import { LinkButton } from "@/components/common/LinkButton";
import { OfferIntroFeatureList } from "@/components/offer/OfferIntroFeatureList";

export const OfferIntro = () => {
	return (
		<Container layout="row-reverse">
			<article className="flex flex-col px-8 lg:max-w-lg">
				<Header title="Oferta" />
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
			<Image img={sectionImg} alt="Stół z zastawą" />
		</Container>
	);
};
