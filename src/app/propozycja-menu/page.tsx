import heroImg from "../../../public/images/sala-bankietowa-vita-11.jpg";
import { PageHeroContainer } from "@/components/common/PageHeroContainer";
import { PageHeroTitle } from "@/components/common/PageHeroTitle";
import { PageMainContainer } from "@/components/common/PageMainContainer";
import { DishesPageContent } from "@/components/dishes/DishesPageContent";

export default function DishesPage() {
	return (
		<>
			<PageHeroContainer image={heroImg}>
				<PageHeroTitle title="Propozycja menu" />
			</PageHeroContainer>
			<PageMainContainer>
				<DishesPageContent />
			</PageMainContainer>
		</>
	);
}
