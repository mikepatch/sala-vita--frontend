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
				height: "150px",
				position: "absolute",
				left: "30px",
				top: "30px",
			}}
			width={140}
			height={150}
		/>
	);
};
