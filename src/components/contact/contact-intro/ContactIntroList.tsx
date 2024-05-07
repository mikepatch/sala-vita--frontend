import Link from "next/link";

import clsx from "clsx";
import { CONTACT_ITEMS } from "@/constants";

type ContactIntroListProps = {
	direction?: "column" | "row";
};

export const ContactIntroList = ({ direction }: ContactIntroListProps) => {
	return (
		<ul
			className={clsx(
				"flex flex-col gap-6",
				direction === "row" && "lg:flex-row lg:justify-evenly",
			)}
		>
			{CONTACT_ITEMS.map((item) => (
				<li
					key={item.title}
					className={clsx(
						"flex flex-col gap-2 text-brand-primary",
						direction === "row" && "lg:items-center",
					)}
				>
					<header className="flex items-center gap-2">
						{item.icon}
						<h3 className="text-xl font-bold">{item.title}</h3>
					</header>
					<Link
						href={item.href}
						className="pl-8 text-brand-primary-dark"
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.content}
					</Link>
				</li>
			))}
		</ul>
	);
};
