/* eslint-disable @next/next/no-img-element */

export const OGImageBackground = () => {
	if (process.env.NEXT_PUBLIC_BASE_URL === undefined) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
	}

	return (
		<figure
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				height: "100%",
				width: "100%",
			}}
		>
			<img
				alt="Sala bankietowa VITA"
				src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/sala-bankietowa-vita-2.jpg`}
				style={{
					height: "100%",
					objectFit: "cover",
					width: "100%",
				}}
				width={2000}
				height={2000}
			/>
			<div
				style={{
					backgroundImage:
						"linear-gradient(0deg, rgba(251,250,245,1) 0%, rgba(251,250,245,0.6) 30%)",
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
			/>
		</figure>
	);
};
