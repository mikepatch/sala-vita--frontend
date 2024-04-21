import NextImage from "next/image";
import Link from "next/link";

export const AboutIntro = () => {
	return (
		<section className="container flex flex-col gap-6 xl:flex-row xl:justify-between xl:gap-12">
			<article className="flex flex-col px-8 xl:max-w-lg">
				<header>
					<h2 className="py-6  text-4xl font-bold text-brand-primary">Sala VITA</h2>
				</header>
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
					<Link
						href="/onas"
						className="self-start rounded-sm border border-brand-primary border-opacity-60 bg-white px-6 py-3 text-center text-brand-primary shadow-sm transition-colors "
					>
						Dowiedz się więcej
					</Link>
				</div>
			</article>
			<figure className="h-[600px] max-w-full overflow-hidden xl:basis-1/2 xl:rounded-sm">
				<NextImage
					src="/images/1.jpeg"
					alt="2"
					width={1500}
					height={1500}
					className="h-full w-full animate-fade-right object-cover object-center"
				/>
			</figure>
		</section>
	);
};
