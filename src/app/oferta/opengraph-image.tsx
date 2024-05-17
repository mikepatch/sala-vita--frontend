import { ImageResponse } from "next/og";
import { OGImageContainer } from "@/components/common/OGImage/OGImageContainer";

export const alt = "Oferta – Sala bankietowa VITA";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
	if (process.env.NEXT_PUBLIC_BASE_URL === undefined) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
	}

	return new ImageResponse(
		(
			<OGImageContainer>
				<h1 style={{ fontSize: 100, fontWeight: 700 }}>Oferta</h1>
				<ul style={{ display: "flex", gap: "4rem", fontSize: 24 }}>
					<li>Chrzciny</li>
					<li>Komunie</li>
					<li>Wesela</li>
					<li>Imprezy okolicznościowe</li>
				</ul>
			</OGImageContainer>
		),
		{
			...size,
		},
	);
}
