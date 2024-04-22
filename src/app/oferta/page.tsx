export default function OfferPage() {
	return (
		<main className="mx-auto flex flex-col items-center justify-center gap-6 xl:gap-32">
			<header
				className="relative z-10 flex h-[300px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center text-brand-primary"
				style={{ backgroundImage: "url(/images/1.jpeg)" }}
			>
				<div className="absolute inset-0 -z-10 bg-gradient-hero" />
				<h1 className="text-4xl font-bold">Nasza oferta</h1>
			</header>
			<section className="container px-8">
				<article className="flex flex-col gap-8">
					<p className="text-center">
						W VITA oferujemy kompleksową organizację wydarzeń okolicznościowych. Nasz zespół pomoże
						Państwu w zaplanowaniu i zrealizowaniu każdego aspektu imprezy - od wyboru menu, przez
						dekoracje, po oprawę muzyczną.
					</p>
					<section>
						<h2 className="text-2xl font-bold text-brand-primary">Wesela</h2>
						<p>
							Naszą specjalnością są wesela. Oferujemy kompleksową organizację przyjęć weselnych, od
							ceremonii zaślubin po bankiet. Nasi kucharze przygotują pyszne, tradycyjne dania, a
							nasz zespół zadba o oprawę muzyczną i dekoracje, aby Państwa ślub był wyjątkowy.
							Standardowy pakiet weselny obejmuje przystawkę, zupę, danie główne, deser oraz napoje,
							ale istnieje również możliwość skomponowania własnego, indywidualnego menu.
						</p>
					</section>
					<section>
						<h2 className="text-2xl font-bold text-brand-primary">Urodziny i imprezy rodzinne</h2>
						<p>
							Organizujemy również urodziny, chrzciny, komunie i inne imprezy rodzinne. Zadbamy o
							to, aby Państwa wydarzenie było pełne radości i pamiętane przez długi czas. Nasi
							kucharze przygotują pyszne dania, a nasz zespół zadba o oprawę muzyczną i dekoracje.
						</p>
					</section>
					<section>
						<h2 className="text-2xl font-bold text-brand-primary">Bankiety i imprezy firmowe</h2>
						<p>
							Nasza sala bankietowa to idealne miejsce na organizację konferencji, szkoleń,
							bankietów i innych wydarzeń firmowych. Dysponujemy nowoczesnym zapleczem technicznym,
							a nasz zespół zadba o sprawną organizację i profesjonalną obsługę Państwa gości.
							Zapraszamy do zapoznania się z pełną ofertą na naszej stronie internetowej. Chętnie
							dostosujemy się do Państwa preferencji i pomożemy w zorganizowaniu wymarzonego
							wydarzenia.
						</p>
					</section>
				</article>
			</section>
		</main>
	);
}
