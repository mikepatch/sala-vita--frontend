import clsx from "clsx";
import NextImage, { type StaticImageData } from "next/image";

type PageHeroProps = {
	children: React.ReactNode;
	image: StaticImageData;
	isRoot?: boolean;
};

export const PageHeroContainer = ({ children, image, isRoot = false }: PageHeroProps) => {
	return (
		<section
			className={clsx(
				"relative z-10 flex h-screen w-full justify-center overflow-hidden text-brand-primary",
				{
					"max-h-[50vh] pt-navbar": !isRoot,
				},
			)}
			style={{ clipPath: "inset(0 0 0 0)" }}
		>
			<figure className="fixed left-0 top-0 -z-10 h-full w-full">
				<NextImage
					src={image}
					fill
					placeholder="blur"
					alt="Hero background image"
					sizes="100vw"
					loading="eager"
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
			</figure>
			<div className="absolute inset-0 -mb-1 bg-gradient-hero" />
			{children}
		</section>
	);
};
