import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";

type TLinkButtonProps = {
	href: Route;
	children: React.ReactNode;
	className?: string;
};

export const LinkButton = ({ href, children, className = "", ...props }: TLinkButtonProps) => {
	return (
		<Link
			href={href}
			className={clsx(
				"rounded-sm border border-brand-primary-light border-opacity-60 bg-brand-primary px-6 py-3 text-center font-bold text-white shadow-sm transition-colors hover:bg-white hover:text-brand-primary-light",
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	);
};
