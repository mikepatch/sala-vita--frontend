"use client";

import { useState } from "react";

import { Navbar } from "@/components/navigation/navbar/Navbar";
import { Sidebar } from "@/components/navigation/sidebar/Sidebar";

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
