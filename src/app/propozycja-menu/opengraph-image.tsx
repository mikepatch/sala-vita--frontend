/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { OGImageContainer } from "@/components/common/OGImageContainer";

export const alt = "Propozycja menu – Sala bankietowa VITA";
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
				<img
					src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo-big.png`}
					alt={alt}
					style={{
						objectFit: "contain",
						height: "40%",
					}}
				/>
				<h1 style={{ fontSize: 100, fontWeight: 700 }}>Propozycja menu</h1>
				<p style={{ fontSize: 24 }}>Sprawdź nasze menu</p>
			</OGImageContainer>
		),
		{
			...size,
		},
	);
}
