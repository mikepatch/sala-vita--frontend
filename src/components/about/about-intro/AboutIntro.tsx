import sectionImg from "../../../../public/images/1.jpeg";
import { LinkButton } from "@/components/common/LinkButton";
import { IntroSectionImage } from "@/components/common/IntroSectionImage";
import { IntroSectionContainer } from "@/components/common/IntroSectionContainer";
import { IntroSectionHeader } from "@/components/common/IntroSectionHeader";

export const AboutIntro = () => {
	return (
		<IntroSectionContainer layout="row">
			<article className="flex flex-col px-8 xl:max-w-lg">
				<IntroSectionHeader title="O nas" />
				<div className="flex flex-col gap-6">
					<p>
						<strong>Sala bankietowa VITA</strong> to miejsce stworzone z myślą o organizacji
						wyjątkowych wydarzeń. Naszą misją jest zapewnienie niezapomnianych przeżyć dla naszych
						gości, niezależnie od tego, czy organizują u nas
						<strong> wesele, urodziny, konferencję czy inną uroczystość</strong>.
					</p>
					<p>
						Nasza sala znajduje się w miejscowości <strong>Starcza</strong> (pod Częstochową), przy
						<strong> ul. Gminnej 4</strong>.
					</p>
					<p>
						Dbamy o każdy detal, aby nasi goście mogli w pełni cieszyć się chwilą i celebrować ważne
						dla nich wydarzenia. Nasz doświadczony zespół zadba o to, aby Państwa impreza przebiegła
						sprawnie i spełniła Państwa oczekiwania.
					</p>
					<LinkButton href="#kontakt" className="self-start">
						Kontakt
					</LinkButton>
				</div>
			</article>
			<IntroSectionImage img={sectionImg} alt="Udekorowany stół z zastawą" />
		</IntroSectionContainer>
	);
};
