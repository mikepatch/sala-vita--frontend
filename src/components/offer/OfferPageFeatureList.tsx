"use client";

import { type Variants, motion } from "framer-motion";
import NextImage from "next/image";
import clsx from "clsx";

import { OFFER_ITEMS } from "@/constants";
import { GemIcon } from "@/components/common/GemIcon";
import { Heading } from "@/components/common/Heading";

export const OfferPageFeatureList = () => {
	const offerItemVariants: Variants = {
		offscreenMinus: {
			x: -200,
			opacity: 0,
		},
		offscreen: {
			x: 200,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				x: {
					type: "spring",
					bounce: 0.1,
					duration: 2.5,
				},
			},
		},
	};

	return (
		<ul className="flex flex-col gap-6 lg:gap-52">
			{OFFER_ITEMS.map((item, index) => (
				<li key={index}>
					<motion.section
						initial={index % 2 === 0 ? "offscreenMinus" : "offscreen"}
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.3 }}
						className={clsx(`flex flex-col justify-between gap-6 lg:flex-row lg:gap-12`, {
							"lg:flex-row-reverse": index % 2 !== 0,
						})}
					>
						<motion.article
							variants={offerItemVariants}
							className="flex flex-col gap-4 px-4 lg:basis-1/2"
						>
							<header className="flex w-fit items-center gap-2">
								<GemIcon className="shrink-0" />
								<Heading level={2}>{item.title}</Heading>
							</header>
							<p>{item.description}</p>
						</motion.article>
						<motion.figure
							initial={index % 2 === 0 ? "offscreen" : "offscreenMinus"}
							whileInView="onscreen"
							variants={offerItemVariants}
							viewport={{ once: true }}
							className="relative aspect-square w-full overflow-hidden lg:max-w-[400px] lg:basis-1/2 lg:rounded-sm"
						>
							<NextImage
								src={item.image}
								alt={item.title}
								fill
								loading="lazy"
								className="object-cover object-center"
								sizes="(max-width: 1280px) 100vw, 768px"
							/>
						</motion.figure>
					</motion.section>
				</li>
			))}
		</ul>
	);
};
