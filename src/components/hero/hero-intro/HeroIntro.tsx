import NextImage from "next/image";
import Link from "next/link";

import logoImg from "../../../../public/images/logo-big.png";

export const HeroIntro = () => {
	return (
		<section
			className="z-10 flex h-screen w-full justify-center bg-cover bg-fixed bg-no-repeat text-white"
			style={{ backgroundImage: "url(/images/hero-background.webp)" }}
		>
			<div className="absolute inset-0 bg-gradient-hero" />
			<article className="flex h-full flex-col items-center justify-center gap-8 py-20 ">
				<NextImage
					src={logoImg}
					alt="Logo"
					className="w-[250px] animate-fade-up object-cover animation-delay-450 md:w-[400px]"
					sizes="(max-width: 768px) 250px, 400px"
				/>
				<div className="sr-only">
					<h1>VITA</h1>
					<p>SALA BANKIETOWA</p>
				</div>
				<footer className="flex animate-fade-up flex-col gap-4 animation-delay-850">
					<Link
						href="#kontakt"
						className="rounded-sm bg-white px-6 py-3 text-center text-brand-primary shadow-sm transition-all hover:shadow-md"
					>
						Zarezerwuj termin
					</Link>
				</footer>
			</article>
		</section>
	);
};
