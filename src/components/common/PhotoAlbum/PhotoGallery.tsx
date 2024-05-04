"use client";

import PhotoAlbum, { type PhotoAlbumProps } from "react-photo-album";
import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { NextJsGalleryImage } from "@/components/common/PhotoAlbum/NextJsGalleryImage";
import { NextJsSlideImage } from "@/components/common/PhotoAlbum/NextJsSlideImage";

type PhotoGalleryProps = {
	photos: PhotoAlbumProps["photos"];
};

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(-1);

	return (
		<>
			<PhotoAlbum
				photos={photos}
				layout="rows"
				renderPhoto={NextJsGalleryImage}
				onClick={({ index }) => setCurrentImageIndex(index)}
				sizes={{
					size: "calc(100vw - 40px)",
					sizes: [
						{ viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
						{ viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
						{ viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
					],
				}}
			/>

			<Lightbox
				slides={photos}
				open={currentImageIndex >= 0}
				index={currentImageIndex}
				render={{ slide: NextJsSlideImage }}
				close={() => setCurrentImageIndex(-1)}
				plugins={[Thumbnails, Counter]}
			/>
		</>
	);
};
