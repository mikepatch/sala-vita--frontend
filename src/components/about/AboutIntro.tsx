import sectionImg from "../../../public/images/sala-bankietowa-vita-1.jpg";
import { Container, Header, Image } from "@/components/common/IntroSection";
import { LinkButton } from "@/components/common/LinkButton";

export const AboutIntro = () => {
	return (
		<Container layout="row">
			<article className="flex flex-col px-8 lg:max-w-lg">
				<Header title="O nas" />
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
					<LinkButton href="/kontakt" className="self-start">
						Kontakt
					</LinkButton>
				</div>
			</article>
			<Image img={sectionImg} alt="Udekorowany stół z zastawą" />
		</Container>
	);
};
