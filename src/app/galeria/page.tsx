import heroImg from "../../../public/images/sala-bankietowa-vita-10.jpg";
import { PageMainContainer } from "@/components/common/PageMainContainer";
import { PageHeroContainer } from "@/components/common/PageHeroContainer";
import { PageHeroTitle } from "@/components/common/PageHeroTitle";
import { GalleryPageContent } from "@/components/gallery/GalleryPageContent";

export default function GalleryPage() {
	return (
		<>
			<PageHeroContainer image={heroImg}>
				<PageHeroTitle title="Galeria" />
			</PageHeroContainer>
			<PageMainContainer>
				<GalleryPageContent />
			</PageMainContainer>
		</>
	);
}
