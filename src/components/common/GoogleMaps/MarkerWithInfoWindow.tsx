import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef, Pin } from "@vis.gl/react-google-maps";
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
				<InfoWindow anchor={marker} onClose={handleClose} className="p-2">
					<h2 className="text-lg font-semibold text-brand-primary">Tu jesteśmy</h2>
				</InfoWindow>
			)}
		</>
	);
};
