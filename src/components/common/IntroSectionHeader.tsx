import { Heading } from "@/components/common/Heading";

type IntroSectionHeaderProps = {
	title: string;
};

export const IntroSectionHeader = ({ title }: IntroSectionHeaderProps) => {
	return (
		<header>
			<Heading level={2} className="py-6 text-4xl font-bold">
				{title}
			</Heading>
		</header>
	);
};
