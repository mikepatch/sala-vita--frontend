import clsx from "clsx";

type PageContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export const PageSectionContainer = ({ children, className = "" }: PageContainerProps) => {
	return (
		<section className={clsx("container mx-auto flex w-full flex-col gap-16", className)}>
			{children}
		</section>
	);
};
