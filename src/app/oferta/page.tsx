import heroImg from "../../../public/images/sala-bankietowa-vita-9.jpg";
import { PageMainContainer } from "@/components/common/PageMainContainer";
import { PageHeroContainer } from "@/components/common/PageHeroContainer";
import { PageHeroTitle } from "@/components/common/PageHeroTitle";
import { OfferPageContent } from "@/components/offer/OfferPageContent";

export default function OfferPage() {
	return (
		<>
			<PageHeroContainer image={heroImg}>
				<PageHeroTitle title="Nasza oferta" />
			</PageHeroContainer>
			<PageMainContainer>
				<OfferPageContent />
			</PageMainContainer>
		</>
	);
}
