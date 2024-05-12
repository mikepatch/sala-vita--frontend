import { ContactItemList } from "@/components/contact/ContactItemList";
import { PageSectionContainer } from "@/components/common/PageSectionContainer";
import { Heading } from "@/components/common/Heading";

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
			<iframe
				title="Mapa dojazdu do sali bankietowej VITA"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.9121098341802!2d19.06817547706106!3d50.665892371827546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710ccf9a6ccc40f%3A0xc6d5eb7618edb214!2sGminna%204%2C%2042-261%20Starcza!5e0!3m2!1spl!2spl!4v1713545380060!5m2!1spl!2spl"
				width="800"
				height="600"
				style={{ border: 0 }}
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				className="h-[400px] w-full max-w-full overflow-hidden"
			/>
		</>
	);
};
