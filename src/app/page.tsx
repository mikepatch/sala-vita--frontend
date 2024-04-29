import { AboutIntro } from "@/components/about/about-intro/AboutIntro";
import { ContactIntro } from "@/components/contact/contact-intro/ContactIntro";
import { OfferIntro } from "@/components/offer/offer-intro/OfferIntro";
import { GalleryIntro } from "@/components/gallery/gallery-intro/GalleryIntro";
import { HeroIntro } from "@/components/hero/hero-intro/HeroIntro";
import { ImageDivider } from "@/components/common/ImageDivider";
import { PageContainer } from "@/components/common/PageContainer";

export default function Home() {
	return (
		<PageContainer isRoot>
			<HeroIntro />
			<AboutIntro />
			<OfferIntro />
			<GalleryIntro />
			<ImageDivider />
			<ContactIntro />
		</PageContainer>
	);
}
