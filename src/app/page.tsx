import { AboutIntro } from "@/components/about/AboutIntro";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { OfferIntro } from "@/components/offer/OfferIntro";
import { GalleryIntro } from "@/components/gallery/GalleryIntro";
import { HeroIntro } from "@/components/hero/HeroIntro";
import { PageMainContainer } from "@/components/common/PageMainContainer";

export default function HomePage() {
	return (
		<>
			<HeroIntro />
			<PageMainContainer className="lg:gap-52">
				<AboutIntro />
				<OfferIntro />
				<GalleryIntro />
				<ContactIntro />
			</PageMainContainer>
		</>
	);
}
