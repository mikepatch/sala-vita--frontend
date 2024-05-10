import clsx from "clsx";

type HeadingProps = {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
	className?: string;
};

export const Heading = ({ level, children, className = "" }: HeadingProps) => {
	const Tag = `h${level}` as const;

	return (
		<Tag
			className={clsx("font-bold text-brand-primary", className, {
				"text-4xl sm:text-5xl": level === 1,
				"text-3xl sm:text-4xl": level === 2,
				"text-2xl sm:text-3xl": level === 3,
				"text-xl sm:text-2xl": level === 4,
				"text-lg sm:text-xl": level === 5,
				"text-md sm:text-lg": level === 6,
			})}
		>
			{children}
		</Tag>
	);
};
