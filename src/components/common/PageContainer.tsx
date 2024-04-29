import clsx from "clsx";

type PageContainerProps = {
	children: React.ReactNode;
	isRoot?: boolean;
};

export const PageContainer = ({ children, isRoot = false }: PageContainerProps) => {
	return (
		<main
			className={clsx("mx-auto flex flex-col items-center justify-center gap-6 xl:gap-32", {
				"pt-navbar": !isRoot,
			})}
		>
			{children}
		</main>
	);
};
