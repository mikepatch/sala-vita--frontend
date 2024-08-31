import heroImg from "../../../public/images/sala-bankietowa-vita-10.jpg";
import { Container, Title } from "@/components/common/PageHero";
import { PageMainContainer } from "@/components/common/PageMainContainer";
import { GalleryPageContent } from "@/components/gallery/GalleryPageContent";

export default function GalleryPage() {
	return (
		<>
			<Container image={heroImg}>
				<Title title="Galeria" />
			</Container>
			<PageMainContainer>
				<GalleryPageContent />
			</PageMainContainer>
		</>
	);
}
