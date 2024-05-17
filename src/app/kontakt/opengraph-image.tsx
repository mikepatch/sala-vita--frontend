import { ImageResponse } from "next/og";
import { OGImageContainer } from "@/components/common/OGImage/OGImageContainer";

export const alt = "Kontakt – Sala bankietowa VITA";
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
				<h1 style={{ fontSize: 100, fontWeight: 700 }}>Kontakt</h1>
				<ul style={{ display: "flex", gap: "4rem", fontSize: 24 }}>
					<li>kontakt@sala-vita.pl</li>
					<li>+48 503 053 294</li>
					<li>ul. Gminna 4, 42-261 Starcza</li>
				</ul>
			</OGImageContainer>
		),
		{
			...size,
		},
	);
}
