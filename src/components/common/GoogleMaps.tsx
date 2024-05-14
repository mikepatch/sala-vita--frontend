"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState } from "react";

export const GoogleMaps = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const position = {
			lat: 50.665791434175816,
			lng: 19.070722508930864,
		};
		const initMap = async () => {
			setIsLoading(true);
			try {
				const loader = new Loader({
					apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
					version: "quarterly",
				});

				const { Map } = await loader.importLibrary("maps");
				const { AdvancedMarkerElement } = await loader.importLibrary("marker");

				const map = new Map(mapRef.current as HTMLDivElement, {
					center: position,
					zoom: 16,
					mapId: "Sala bankietowa VITA",
				});

				new AdvancedMarkerElement({
					position,
					map,
					title: "Sala bankietowa VITA",
				});
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		initMap();
	}, [isLoading]);

	return (
		<>
			{isLoading && (
				<div className="flex h-full w-full items-center justify-center text-8xl text-brand-primary">
					<div className="animate-pulse">...</div>
				</div>
			)}
			<div className="h-full w-full" ref={mapRef} />
		</>
	);
};