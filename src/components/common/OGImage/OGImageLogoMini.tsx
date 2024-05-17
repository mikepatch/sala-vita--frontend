/* eslint-disable @next/next/no-img-element */

export const OGImageLogoMini = () => {
	return (
		<img
			src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo-mini.png`}
			alt="Sala bankietowa VITA"
			style={{ objectFit: "cover", height: "200px" }}
			width={260}
			height={200}
		/>
	);
};
