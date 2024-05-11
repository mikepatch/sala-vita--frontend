import { type RenderPhotoProps } from "react-photo-album";
import NextImage from "next/image";
import clsx from "clsx";

export const NextJsGalleryImage = ({
	photo,
	imageProps: { alt, title, sizes, className, onClick },
	wrapperStyle,
}: RenderPhotoProps) => {
	return (
		<figure
			style={{ ...wrapperStyle, position: "relative" }}
			className="overflow-hidden rounded-sm"
		>
			<NextImage
				fill
				src={photo}
				loading="lazy"
				placeholder={"blurDataURL" in photo ? "blur" : undefined}
				className={clsx(className, "object-cover object-center transition-all hover:brightness-90")}
				{...{ alt, title, sizes, onClick }}
			/>
		</figure>
	);
};
