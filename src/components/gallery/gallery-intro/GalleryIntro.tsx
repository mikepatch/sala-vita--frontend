import { GALLERY_IMAGES } from "@/constants";
import { IntroSectionContainer } from "@/components/common/IntroSectionContainer";
import { LinkButton } from "@/components/common/LinkButton";
import { IntroSectionHeader } from "@/components/common/IntroSectionHeader";
import { PhotoGallery } from "@/components/common/PhotoAlbum/PhotoGallery";

export const GalleryIntro = () => {
	return (
		<IntroSectionContainer layout="row">
			<article className="flex flex-col px-8 lg:max-w-lg">
				<IntroSectionHeader title="Galeria" />
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
		</IntroSectionContainer>
	);
};
