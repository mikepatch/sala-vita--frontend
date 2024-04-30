import { IntroSectionContainer } from "@/components/common/IntroSectionContainer";
import { IntroSectionHeader } from "@/components/common/IntroSectionHeader";
import { ContactIntroList } from "@/components/contact/contact-intro/ContactIntroList";

export const ContactIntro = () => {
	return (
		<IntroSectionContainer id="kontakt">
			<article className="flex w-full flex-col px-8 xl:items-center">
				<IntroSectionHeader title="Kontakt" />
				<div className="flex flex-col gap-6">
					<p>
						Chcesz zorganizować wydarzenie w <strong>VITA</strong>? Skontaktuj się z nami, a
						pomożemy Ci w zorganizowaniu Twojego wydarzenia.
					</p>
					<ContactIntroList direction="row" />
				</div>
			</article>
			<iframe
				title="Mapa dojazdu do sali bankietowej VITA"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.9121098341802!2d19.06817547706106!3d50.665892371827546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710ccf9a6ccc40f%3A0xc6d5eb7618edb214!2sGminna%204%2C%2042-261%20Starcza!5e0!3m2!1spl!2spl!4v1713545380060!5m2!1spl!2spl"
				width="800"
				height="600"
				style={{ border: 0 }}
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				className="h-[400px] w-full max-w-full overflow-hidden xl:rounded-sm"
			/>
		</IntroSectionContainer>
	);
};
