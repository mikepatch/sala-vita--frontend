import Link from "next/link";
import NextImage from "next/image";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/constants";

type NavbarProps = {
	isOpen: boolean;
	toggle: () => void;
};

export const Navbar = ({ isOpen, toggle }: Readonly<NavbarProps>) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const hamburgerLineClassName = `block absolute h-0.5 w-7 rounded-md transition ease-in-out transform duration-500 ${isScrolled || isOpen ? "bg-brand-primary" : "bg-brand-primary"}`;

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
			className={`fixed left-0 top-0 z-50 flex h-[80px] w-full items-center justify-between px-8 py-4 text-brand-primary transition-colors ${isScrolled && !isOpen && "bg-white !text-brand-primary shadow-md"}`}
		>
			<div className="mx-auto flex w-full max-w-5xl items-center justify-between">
				<div>
					<Link href="/" className={`hidden h-full ${isScrolled && !isOpen && "!block"}`}>
						<NextImage src="/logo-normal.png" alt="Logo" width={50} height={50} />
					</Link>
				</div>
				<button
					type="button"
					onClick={toggle}
					className={`relative z-50 flex aspect-square h-12 items-center justify-center overflow-hidden md:hidden`}
					aria-label="Open menu"
					tabIndex={0}
				>
					<span className="sr-only">Open menu</span>
					<div className="relative w-7">
						<span
							aria-hidden="true"
							className={`${hamburgerLineClassName} ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
						></span>
						<span
							aria-hidden="true"
							className={`${hamburgerLineClassName} ${isOpen && "translate-x-full opacity-0"}`}
						></span>
						<span
							aria-hidden="true"
							className={`${hamburgerLineClassName} ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
						></span>
					</div>
				</button>
				<ul className="hidden gap-4 md:flex">
					{NAV_ITEMS.map((item) => (
						<li key={item.href}>
							<Link href={item.href}>{item.label}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
