import NextImage, { type StaticImageData } from "next/image";
import {
	type SlideImage,
	isImageSlide,
	useLightboxProps,
	useLightboxState,
	isImageFitCover,
	type RenderSlideProps,
} from "yet-another-react-lightbox";

const isNextJsImage = (slide: SlideImage): slide is StaticImageData => {
	return isImageSlide(slide) && typeof slide.width === "number" && typeof slide.height === "number";
};

export const NextJsSlideImage = ({ slide, offset, rect }: RenderSlideProps) => {
	const {
		on: { click },
		carousel: { imageFit },
	} = useLightboxProps();

	const { currentIndex } = useLightboxState();

	const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

	if (!isNextJsImage(slide)) return undefined;

	const width =
		slide.height && slide.width && !cover
			? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width))
			: rect.width;

	const height =
		slide.height && slide.width && !cover
			? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height))
			: rect.height;

	return (
		<div style={{ position: "relative", width, height }}>
			<NextImage
				fill
				alt=""
				src={slide}
				loading="lazy"
				draggable={false}
				placeholder={slide.blurDataURL ? "blur" : undefined}
				style={{
					objectFit: cover ? "cover" : "contain",
					cursor: click ? "pointer" : undefined,
				}}
				sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
				onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
			/>
		</div>
	);
};
