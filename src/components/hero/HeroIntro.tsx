import NextImage from "next/image";

import logoImg from "../../../public/images/logo-big.png";
import heroImg from "../../../public/images/sala-bankietowa-vita-2.jpg";
import { CtaButton } from "@/components/hero/CtaButton";
import { Container } from "@/components/common/PageHero";

export const HeroIntro = () => {
	return (
		<Container image={heroImg} isRoot>
			<article className="relative z-10 flex h-full flex-col items-center justify-center gap-8 py-20 ">
				<figure className="relative aspect-[460/470] w-[250px] md:w-[400px]">
					<NextImage
						src={logoImg}
						alt="Logo"
						fill
						style={{ objectFit: "contain" }}
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</figure>
				<h1 className="sr-only">Sala bankietowa Vita</h1>
				<CtaButton />
			</article>
		</Container>
	);
};
