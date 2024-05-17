import { OGImageBackground } from "@/components/common/OGImage/OGImageBackground";
import { OGImageLogo } from "@/components/common/OGImage/OGImageLogo";
import { OGImageLogoMini } from "@/components/common/OGImage/OGImageLogoMini";

type OGImageContainerProps = {
	children: React.ReactNode;
};

export const OGImageContainer = ({ children }: OGImageContainerProps) => {
	if (process.env.NEXT_PUBLIC_BASE_URL === undefined) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
	}

	return (
		<div
			style={{
				alignItems: "center",
				background: "#FBFAF5",
				backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL}/images/bg-pattern.svg')`,
				color: "#6d5915",
				display: "flex",
				flexDirection: "column",
				height: "100%",
				justifyContent: "center",
				position: "relative",
				width: "100%",
			}}
		>
			<OGImageBackground />
			<OGImageLogo />
			<OGImageLogoMini />
			{children}
		</div>
	);
};
