import { GALLERY_IMAGES } from "@/constants";
import { IntroSectionContainer } from "@/components/common/IntroSectionContainer";
import { LinkButton } from "@/components/common/LinkButton";
import { IntroSectionHeader } from "@/components/common/IntroSectionHeader";
import { PhotoGallery } from "@/components/common/PhotoAlbum/PhotoGallery";

export const GalleryIntro = () => {
	return (
		<IntroSectionContainer>
			<article className="flex w-full flex-col px-8 xl:items-center">
				<IntroSectionHeader title="Galeria" />
				<div className="flex flex-col items-center gap-6">
					<p>
						Zapoznaj się z naszą galerią, aby zobaczyć jak wygląda nasza sala bankietowa oraz
						wydarzenia, które w niej organizujemy.
					</p>
					<div className="w-full">
						<PhotoGallery photos={GALLERY_IMAGES.slice(0, 6)} />
					</div>
					<LinkButton href="/galeria">Zobacz całą galerię</LinkButton>
				</div>
			</article>
		</IntroSectionContainer>
	);
};
