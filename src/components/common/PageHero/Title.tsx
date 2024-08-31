import { Heading } from "@/components/common/Heading";

type PageHeroTitleProps = {
	title: string;
};

export const Title = ({ title }: PageHeroTitleProps) => {
	return (
		<article className="relative z-10 flex h-full flex-col items-center justify-center gap-8 py-20 ">
			<Heading
				level={1}
				className="flex flex-col items-center gap-4 font-bold text-brand-primary sm:text-5xl md:text-6xl"
			>
				{title}
				<div className="h-1.5 w-1/2 rounded-sm bg-brand-primary bg-opacity-40" />
			</Heading>
		</article>
	);
};
