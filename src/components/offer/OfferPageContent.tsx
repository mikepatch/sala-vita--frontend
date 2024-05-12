import { PageSectionContainer } from "@/components/common/PageSectionContainer";
import { Heading } from "@/components/common/Heading";
import { LinkButton } from "@/components/common/LinkButton";
import { OfferPageFeatureList } from "@/components/offer/OfferPageFeatureList";

export const OfferPageContent = () => {
	return (
		<>
			<PageSectionContainer>
				<p className="pt-8 text-center">
					W <strong>VITA</strong> oferujemy kompleksową organizację wydarzeń okolicznościowych. Nasz
					zespół pomoże Państwu w zaplanowaniu i zrealizowaniu każdego aspektu imprezy - od wyboru
					menu, przez dekoracje, po oprawę muzyczną.
				</p>
				<OfferPageFeatureList />
			</PageSectionContainer>
			<section className="flex flex-col items-center gap-4 px-4 pb-8">
				<Heading level={2}>Zapraszamy do kontaktu</Heading>
				<p className="text-center">
					Zapraszamy do kontaktu z nami, aby omówić szczegóły organizacji Państwa wydarzenia.
					Chętnie odpowiemy na wszystkie pytania i pomożemy w zorganizowaniu wymarzonego wydarzenia.
				</p>
				<LinkButton href="/kontakt" className="self-center">
					Skontaktuj się z nami
				</LinkButton>
			</section>
		</>
	);
};
