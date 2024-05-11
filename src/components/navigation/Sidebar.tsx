import { NAV_ITEMS } from "@/constants";
import { ActiveLink } from "@/components/common/ActiveLink";

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
				className="fixed top-0 z-50 flex h-full items-center gap-4 bg-white p-4 px-6 py-8 text-brand-primary shadow-md transition-all"
				style={{ opacity: `${isOpen ? "1" : "0"}`, right: `${isOpen ? "0" : "-100%"}` }}
			>
				<ul className="flex w-full flex-col gap-6 p-4 text-2xl font-semibold">
					{NAV_ITEMS.map((item) => (
						<li key={item.href}>
							<ActiveLink
								href={item.href}
								className={`block w-full`}
								activeClassName="underline"
								onClick={toggle}
							>
								{item.label}
							</ActiveLink>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
};
