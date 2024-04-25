import Link from "next/link";

import { CONTACT_ITEMS } from "@/constants";

export const ContactIntroList = () => {
	return (
		<ul className="flex flex-col gap-6 xl:flex-row xl:justify-evenly">
			{CONTACT_ITEMS.map((item) => (
				<li key={item.title} className="flex flex-col gap-2 text-brand-primary xl:items-center">
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
