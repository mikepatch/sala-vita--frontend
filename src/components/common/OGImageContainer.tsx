type OGImageContainerProps = {
	children: React.ReactNode;
};

export const OGImageContainer = ({ children }: OGImageContainerProps) => {
	return (
		<div
			style={{
				background: "#FBFAF5",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "#6d5915",
			}}
		>
			{children}
		</div>
	);
};
