import { ContactItemList } from "@/components/contact/ContactItemList";
import { PageSectionContainer } from "@/components/common/PageSectionContainer";
import { Heading } from "@/components/common/Heading";
import { GoogleMaps } from "@/components/common/GoogleMaps";

export const ContactPageContent = () => {
	return (
		<>
			<PageSectionContainer className="px-8">
				<p className="pt-16 text-center">
					Chcesz zorganizować wydarzenie w <strong>VITA</strong>? Skontaktuj się z nami, a pomożemy
					Ci w zorganizowaniu Twojego wydarzenia.
				</p>
				<Heading level={2} className="text-center">
					Dane kontaktowe
				</Heading>
				<ContactItemList direction="row" />
			</PageSectionContainer>
			<div className="h-[400px] w-full max-w-full overflow-hidden">
				<GoogleMaps />
			</div>
		</>
	);
};
