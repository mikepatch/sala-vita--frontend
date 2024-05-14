import { IntroSectionContainer } from "@/components/common/IntroSectionContainer";
import { IntroSectionHeader } from "@/components/common/IntroSectionHeader";
import { GoogleMaps } from "@/components/common/GoogleMaps";
import { ContactItemList } from "@/components/contact/ContactItemList";

export const ContactIntro = () => {
	return (
		<IntroSectionContainer layout="row-reverse">
			<article className="flex w-full flex-col px-8 pb-8 lg:max-w-lg">
				<IntroSectionHeader title="Kontakt" />
				<div className="flex flex-col gap-6">
					<p>
						Chcesz zorganizować wydarzenie w <strong>VITA</strong>? Skontaktuj się z nami, a
						pomożemy Ci w zorganizowaniu Twojego wydarzenia.
					</p>
					<ContactItemList direction="column" />
				</div>
			</article>
			<div className="max-w-full overflow-hidden lg:basis-1/2 lg:rounded-sm">
				<GoogleMaps />
			</div>
		</IntroSectionContainer>
	);
};
