"use client";

import { useState } from "react";
import { type TDishes } from "@/types";
import { AccordionItem } from "@/components/common/Accordion/AccordionItem";

type MenuListProps = {
	items: TDishes[];
};

export const Accordion = ({ items }: MenuListProps) => {
	const [openAccordions, setOpenAccordions] = useState<string[]>([]);

	const handleToggle = (title: string) => {
		setOpenAccordions((prevOpenAccordions) => {
			if (prevOpenAccordions.includes(title)) {
				return prevOpenAccordions.filter((item) => item !== title);
			} else {
				return [...prevOpenAccordions, title];
			}
		});
	};

	return (
		<>
			<ul className="w-fit">
				{items.map((item) => (
					<AccordionItem
						key={item.title}
						item={item}
						isOpen={openAccordions.includes(item.title)}
						onToggle={handleToggle}
					/>
				))}
			</ul>
			{openAccordions.length > 1 && (
				<button
					className="w-fit cursor-pointer border-b leading-5 transition-colors hover:border-b-brand-primary"
					onClick={() => setOpenAccordions([])}
				>
					zwiń wszystko
				</button>
			)}
		</>
	);
};
