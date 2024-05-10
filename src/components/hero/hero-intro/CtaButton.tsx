"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CtaButton = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 0.8 }}
			className="flex flex-col gap-4"
		>
			<Link
				href="/kontakt"
				className="rounded-sm bg-white px-6 py-3 text-center text-brand-primary shadow-sm transition-all hover:text-brand-primary-light hover:shadow-md"
			>
				Zarezerwuj termin
			</Link>
		</motion.footer>
	);
};
