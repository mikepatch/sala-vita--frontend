import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef, Pin } from "@vis.gl/react-google-maps";
import Link from "next/link";
import { useCallback, useState } from "react";

type MarkerWithInfoWindowProps = {
	position: google.maps.LatLngLiteral;
};

export const MarkerWithInfoWindow = ({ position }: MarkerWithInfoWindowProps) => {
	const [markerRef, marker] = useAdvancedMarkerRef();
	const [infoWindowShown, setInfoWindowShown] = useState(true);

	const handleMarkerClick = useCallback(() => setInfoWindowShown((isShown) => !isShown), []);

	const handleClose = useCallback(() => setInfoWindowShown(false), []);

	return (
		<>
			<AdvancedMarker ref={markerRef} position={position} onClick={handleMarkerClick}>
				<Pin background={"#806919"} borderColor={"#806919"} glyphColor={"#fff"} />
			</AdvancedMarker>

			{infoWindowShown && (
				<InfoWindow anchor={marker} onClose={handleClose} className="flex flex-col gap-4 p-2">
					<h2 className="text-lg font-semibold text-brand-primary">Tu jesteśmy</h2>
					<article className="flex flex-col gap-2">
						<h3 className="font-semibold text-brand-primary">Sala VITA</h3>
						<p>ul. Gminna 4, 42-261 Starcza</p>
						<Link href="https://maps.app.goo.gl/hTUJYDz5p9s7WVAn9" className="underline">
							Wskazówki dojazdu
						</Link>
					</article>
				</InfoWindow>
			)}
		</>
	);
};
