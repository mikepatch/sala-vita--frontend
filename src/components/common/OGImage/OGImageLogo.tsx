/* eslint-disable @next/next/no-img-element */

export const OGImageLogo = () => {
	if (process.env.NEXT_PUBLIC_BASE_URL === undefined) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
	}

	return (
		<img
			src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo-big.png`}
			alt="Sala bankietowa VITA"
			style={{
				objectFit: "contain",
				width: "140px",
				height: "150px",
				position: "absolute",
				left: "2rem",
				top: "2rem",
			}}
			width={140}
			height={150}
		/>
	);
};
