import heroImg from "../../../public/images/sala-bankietowa-vita-12.jpg";
import { PageMainContainer } from "@/components/common/PageMainContainer";
import { PageHeroContainer } from "@/components/common/PageHeroContainer";
import { PageHeroTitle } from "@/components/common/PageHeroTitle";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export default function ContactPage() {
	return (
		<>
			<PageHeroContainer image={heroImg}>
				<PageHeroTitle title="Kontakt" />
			</PageHeroContainer>
			<PageMainContainer>
				<ContactPageContent />
			</PageMainContainer>
		</>
	);
}
