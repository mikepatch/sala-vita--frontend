"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

type ContainerProps = {
	children: React.ReactNode;
	id?: string;
	layout?: "column" | "row" | "row-reverse";
	className?: string;
};

export const Container = ({ children, id, layout = "column", className }: ContainerProps) => {
	return (
		<motion.section
			initial={{
				opacity: 0,
				y: 80,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
				},
			}}
			viewport={{ once: true, amount: 0.01 }}
			id={id}
			className={clsx("container flex flex-col gap-8 lg:gap-12", className, {
				"justify-between lg:flex-row": layout === "row",
				"justify-between lg:flex-row-reverse": layout === "row-reverse",
				"lg:flex-col": layout === "column",
			})}
		>
			{children}
		</motion.section>
	);
};
