import Link from "next/link";

import { NAV_ITEMS } from "@/constants";

type SidebarProps = {
	isOpen: boolean;
	toggle: () => void;
};

export const Sidebar = ({ isOpen, toggle }: Readonly<SidebarProps>) => {
	return (
		<>
			<div
				className="fixed left-0 top-0 z-50 h-screen w-full overflow-hidden bg-clip-padding backdrop-blur-sm backdrop-filter"
				style={{ visibility: `${isOpen ? "visible" : "hidden"}` }}
				onClick={toggle}
			></div>
			<aside
				className="text-brand-primary fixed top-0 z-50 flex h-full items-center gap-4 bg-white p-4 px-6 py-8 shadow-md transition-all"
				style={{ opacity: `${isOpen ? "1" : "0"}`, right: `${isOpen ? "0" : "-100%"}` }}
			>
				<ul className="flex w-full flex-col gap-6 p-4 text-2xl">
					{NAV_ITEMS.map((item) => (
						<li key={item.href}>
							<Link href={item.href} className="block w-full" onClick={toggle}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
};
