import NextImage, { type StaticImageData } from "next/image";

type IntroSectionImageProps = {
	img: StaticImageData;
	alt: string;
};

export const Image = ({ img, alt }: IntroSectionImageProps) => {
	return (
		<figure className="relative h-[600px] w-full overflow-hidden lg:basis-1/2 xl:rounded-sm">
			<NextImage
				src={img}
				alt={alt}
				placeholder="blur"
				loading="lazy"
				fill
				className="object-cover object-center"
				sizes="(max-width: 1280px) 100vw, 768px"
			/>
		</figure>
	);
};
