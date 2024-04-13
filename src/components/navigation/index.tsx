"use client";

import { useState } from "react";

import { Navbar } from "@/components/navigation/navbar";
import { Sidebar } from "@/components/navigation/sidebar";

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<nav>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar isOpen={isOpen} toggle={toggle} />
		</nav>
	);
};
