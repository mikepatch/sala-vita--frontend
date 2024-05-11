import NextImage from "next/image";

import logoImg from "../../../public/images/logo-big.png";
import heroImg from "../../../public/images/sala-bankietowa-vita-2.jpg";
import { PageHeroContainer } from "@/components/common/PageHeroContainer";
import { CtaButton } from "@/components/hero/CtaButton";

export const HeroIntro = () => {
	return (
		<PageHeroContainer image={heroImg} isRoot>
			<article className="relative z-10 flex h-full flex-col items-center justify-center gap-8 py-20 ">
				<figure className="relative aspect-[460/470] w-[250px] md:w-[400px]">
					<NextImage src={logoImg} alt="Logo" fill style={{ objectFit: "contain" }} priority />
				</figure>
				<h1 className="sr-only">Sala bankietowa Vita</h1>
				<CtaButton />
			</article>
		</PageHeroContainer>
	);
};
