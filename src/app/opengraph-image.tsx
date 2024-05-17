/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const alt = "VITA – Sala bankietowa";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

if (process.env.NEXT_PUBLIC_BASE_URL === undefined) {
	throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

export default async function OGImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img
					src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo-big.png`}
					alt={alt}
					style={{
						objectFit: "contain",
						height: "100%",
					}}
				/>
			</div>
		),
		{
			...size,
		},
	);
}
