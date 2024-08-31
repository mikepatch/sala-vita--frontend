import heroImg from "../../../public/images/sala-bankietowa-vita-12.jpg";
import { Container, Title } from "@/components/common/PageHero";
import { PageMainContainer } from "@/components/common/PageMainContainer";

import { ContactPageContent } from "@/components/contact/ContactPageContent";

export default function ContactPage() {
	return (
		<>
			<Container image={heroImg}>
				<Title title="Kontakt" />
			</Container>
			<PageMainContainer>
				<ContactPageContent />
			</PageMainContainer>
		</>
	);
}
