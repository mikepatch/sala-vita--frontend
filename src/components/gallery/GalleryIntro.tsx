import { GALLERY_IMAGES } from "@/constants";
import { LinkButton } from "@/components/common/LinkButton";
import { PhotoGallery } from "@/components/common/PhotoAlbum/PhotoGallery";
import { Container, Header } from "@/components/common/IntroSection";

export const GalleryIntro = () => {
	return (
		<Container layout="row">
			<article className="flex flex-col px-8 lg:max-w-lg">
				<Header title="Galeria" />
				<div className="flex flex-col gap-6">
					<p>Zapoznaj się z naszą galerią, aby zobaczyć jak wygląda nasza sala bankietowa.</p>
					<LinkButton href="/galeria" className="self-start">
						Zobacz całą galerię
					</LinkButton>
				</div>
			</article>
			<div className="lg:basis-1/2">
				<PhotoGallery photos={GALLERY_IMAGES.slice(0, 6)} />
			</div>
		</Container>
	);
};
