import { PageSectionContainer } from "@/components/common/PageSectionContainer";
import { GALLERY_IMAGES } from "@/constants";
import { PhotoGallery } from "@/components/common/PhotoAlbum/PhotoGallery";

export const GalleryPageContent = () => {
	return (
		<PageSectionContainer>
			<p className="px-8 pt-16 text-center">
				Jeśli chcesz zobaczyć naszą salę, zapraszamy do obejrzenia galerii zdjęć z sali{" "}
				<strong>VITA</strong>.
			</p>
			<PhotoGallery photos={GALLERY_IMAGES} />
		</PageSectionContainer>
	);
};
