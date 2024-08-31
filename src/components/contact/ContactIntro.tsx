import { Container, Header } from "@/components/common/IntroSection";
import { LocationMap } from "@/components/common/LocationMap";
import { ContactItemList } from "@/components/contact/ContactItemList";

export const ContactIntro = () => {
	return (
		<Container layout="row-reverse">
			<article className="flex w-full flex-col px-8 pb-8 lg:max-w-lg">
				<Header title="Kontakt" />
				<div className="flex flex-col gap-6">
					<p>
						Chcesz zorganizować wydarzenie w <strong>VITA</strong>? Skontaktuj się z nami, a
						pomożemy Ci w zorganizowaniu Twojego wydarzenia.
					</p>
					<ContactItemList direction="column" />
				</div>
			</article>
			<div className="h-[600px] max-w-full overflow-hidden lg:basis-1/2 lg:rounded-sm">
				<LocationMap />
			</div>
		</Container>
	);
};
