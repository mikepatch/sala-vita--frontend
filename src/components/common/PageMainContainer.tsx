import clsx from "clsx";

type PageContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export const PageMainContainer = ({ children, className = "" }: PageContainerProps) => {
	return (
		<main
			className={clsx(
				"flex flex-col items-center justify-center gap-8 overflow-hidden lg:gap-16",
				className,
			)}
		>
			{children}
		</main>
	);
};
