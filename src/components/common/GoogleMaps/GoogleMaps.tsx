"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { MarkerWithInfoWindow } from "@/components/common/GoogleMaps/MarkerWithInfoWindow";

export const GoogleMaps = () => {
	const position = {
		lat: 50.665791434175816,
		lng: 19.070722508930864,
	};

	if (!process.env.NEXT_PUBLIC_MAPS_API_KEY) {
		throw new Error("Missing NEXT_PUBLIC_MAPS_API_KEY");
	}

	return (
		<APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
			<Map
				defaultCenter={position}
				defaultZoom={16}
				disableDefaultUI={true}
				mapId={"90877ebf238920a9"}
				className="h-full w-full"
			>
				<MarkerWithInfoWindow position={position} />
			</Map>
		</APIProvider>
	);
};
