import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Heading } from "@/components/common/Heading";
import { type TDishes } from "@/types";

type AccordionItemProps = {
	item: TDishes;
	isOpen: boolean;
	onToggle: (title: string) => void;
};

export const AccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => {
	const variants = {
		open: { opacity: 1, height: "auto" },
		collapsed: { opacity: 0, height: 0 },
	};
	const handleToggle = () => {
		onToggle(item.title);
	};

	return (
		<li className="flex flex-col gap-2 overflow-hidden py-4">
			<header
				className="group flex w-full cursor-pointer items-center gap-2"
				onClick={handleToggle}
				aria-label={`${item.title} rozwiń szczegóły`}
			>
				<figure className="rounded-sm border-2 border-brand-primary p-0.5 opacity-70 transition-all group-hover:scale-[1.03] group-hover:opacity-100">
					<ArrowDown
						size={16}
						strokeWidth={3}
						className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
					/>
				</figure>
				<Heading level={3}>{item.title}</Heading>
			</header>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={variants}
						transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<ul>
							{item.meals.map((meal) => (
								<li key={meal} className="ml-4 py-1.5">
									<p>{meal}</p>
								</li>
							))}
						</ul>
						<button
							className="ml-4 w-fit cursor-pointer border-b leading-5 transition-colors hover:border-b-brand-primary"
							onClick={handleToggle}
						>
							zwiń
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</li>
	);
};
// import { ArrowDown } from "lucide-react";
// import { Heading } from "@/components/common/Heading";
// import { type TDishes } from "@/types";

// type AccordionItemProps = {
// 	item: TDishes;
// 	isOpen: boolean;
// 	onToggle: (title: string) => void;
// };

// export const AccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => {
// 	const handleToggle = () => {
// 		onToggle(item.title);
// 	};

// 	return (
// 		<li key={item.title} className="flex flex-col gap-2 py-4">
// 			<header
// 				className="group flex w-full cursor-pointer items-center gap-2"
// 				onClick={handleToggle}
// 				aria-label={`${item.title} rozwiń szczegóły`}
// 			>
// 				<figure className="rounded-sm border-2 border-brand-primary p-0.5 opacity-70 transition-all group-hover:scale-[1.03] group-hover:opacity-100">
// 					<ArrowDown
// 						size={18}
// 						strokeWidth={3}
// 						className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
// 					/>
// 				</figure>
// 				<Heading level={3}>{item.title}</Heading>
// 			</header>
// 			{isOpen && (
// 				<>
// 					<ul>
// 						{item.meals.map((meal) => (
// 							<li key={meal} className="ml-4 flex w-fit items-center gap-2 py-1.5">
// 								<p>{meal}</p>
// 							</li>
// 						))}
// 					</ul>
// 					<button className="ml-4 w-fit cursor-pointer underline" onClick={handleToggle}>
// 						zwiń
// 					</button>
// 				</>
// 			)}
// 		</li>
// 	);
// };
