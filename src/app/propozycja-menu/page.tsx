import heroImg from "../../../public/images/sala-bankietowa-vita-11.jpg";
import { Container, Title } from "@/components/common/PageHero";
import { PageMainContainer } from "@/components/common/PageMainContainer";
import { DishesPageContent } from "@/components/dishes/DishesPageContent";

export default function DishesPage() {
	return (
		<>
			<Container image={heroImg}>
				<Title title="Propozycja menu" />
			</Container>
			<PageMainContainer>
				<DishesPageContent />
			</PageMainContainer>
		</>
	);
}
