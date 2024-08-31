import heroImg from "../../../public/images/sala-bankietowa-vita-9.jpg";
import { Container, Title } from "@/components/common/PageHero";
import { PageMainContainer } from "@/components/common/PageMainContainer";
import { OfferPageContent } from "@/components/offer/OfferPageContent";

export default function OfferPage() {
	return (
		<>
			<Container image={heroImg}>
				<Title title="Nasza oferta" />
			</Container>
			<PageMainContainer>
				<OfferPageContent />
			</PageMainContainer>
		</>
	);
}
