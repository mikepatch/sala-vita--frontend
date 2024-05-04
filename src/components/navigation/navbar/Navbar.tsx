import Link from "next/link";
import NextImage from "next/image";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/constants";
import { ActiveLink } from "@/components/common/ActiveLink";

type NavbarProps = {
	isOpen: boolean;
	toggle: () => void;
};

export const Navbar = ({ isOpen, toggle }: Readonly<NavbarProps>) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const hamburgerLineClassName = `block absolute h-0.5 w-7 rounded-md transition ease-in-out transform duration-500 bg-brand-primary`;

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`flex h-navbar w-full items-center justify-between bg-white px-8 py-4 text-brand-primary shadow-md transition-all ${isScrolled && "h-navbar-small"}`}
		>
			<div className="mx-auto flex w-full max-w-5xl items-center justify-between">
				<Link href="/" className="h-full">
					<NextImage src="/images/logo-normal.png" alt="Logo" width={50} height={50} />
				</Link>
				<button
					type="button"
					onClick={toggle}
					className={`relative z-50 flex aspect-square h-12 items-center justify-center overflow-hidden md:hidden`}
					aria-label="Open menu"
					tabIndex={0}
				>
					<span className="sr-only">Open menu</span>
					<div className="relative w-7" aria-hidden="true">
						<span
							className={`${hamburgerLineClassName} ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
						/>
						<span
							className={`${hamburgerLineClassName} ${isOpen && "translate-x-full opacity-0"}`}
						/>
						<span
							className={`${hamburgerLineClassName} ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
						/>
					</div>
				</button>
				<ul className="hidden gap-4 font-semibold md:flex">
					{NAV_ITEMS.map((item) => (
						<li key={item.href}>
							<ActiveLink
								href={item.href}
								className="border-b-2 border-transparent !border-opacity-50 py-1 transition-colors hover:border-brand-primary-light hover:text-brand-primary-light"
								activeClassName="text-brand-primary-light !border-brand-primary-light"
							>
								{item.label}
							</ActiveLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
