import { Heading } from "@/components/common/Heading";

type HeaderProps = {
	title: string;
};

export const Header = ({ title }: HeaderProps) => {
	return (
		<header>
			<Heading level={2} className="py-6 text-4xl font-bold">
				{title}
			</Heading>
		</header>
	);
};
