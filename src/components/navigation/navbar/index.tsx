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
	const hamburgerLineClassName = `block absolute h-0.5 w-6 rounded-md transition ease transform duration-300 ${isScrolled || isOpen ? "bg-brand-primary" : "bg-white"}`;

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
		<div
			className={`fixed left-0 top-0 z-50 flex w-full justify-between p-4 text-white transition-colors ${isScrolled && !isOpen && "!text-brand-primary bg-white shadow-md"}`}
		>
			<div>
				<Link href="/" className={`hidden ${isScrolled && !isOpen && "block"}`}>
					<NextImage src="/logo-normal.png" alt="Logo" width={50} height={50} />
				</Link>
			</div>
			<button
				type="button"
				onClick={toggle}
				className={`relative z-50 h-10 w-10 md:hidden ${isScrolled || isOpen ? "text-brand-primary" : "text-white"}`}
				aria-label="Open menu"
			>
				<span className="sr-only">Open menu</span>
				<div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
					<span
						aria-hidden="true"
						className={`${hamburgerLineClassName} ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
					></span>
					<span
						aria-hidden="true"
						className={`${hamburgerLineClassName} ${isOpen && "opacity-0"}`}
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
	);
};
