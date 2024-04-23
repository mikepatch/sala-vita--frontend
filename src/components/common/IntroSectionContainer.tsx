import clsx from "clsx";

type IntroSectionContainerProps = {
	children: React.ReactNode;
	id?: string;
	layout?: "column" | "row" | "row-reverse";
};

export const IntroSectionContainer = ({
	children,
	id,
	layout = "column",
}: IntroSectionContainerProps) => {
	return (
		<section
			id={id}
			className={clsx(
				"container flex flex-col gap-6  xl:gap-12",
				layout && `xl:flex-${layout} xl:justify-between`,
			)}
		>
			{children}
		</section>
	);
};
