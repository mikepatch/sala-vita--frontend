type IntroSectionHeaderProps = {
	title: string;
};

export const IntroSectionHeader = ({ title }: IntroSectionHeaderProps) => {
	return (
		<header>
			<h2 className="py-6 text-4xl font-bold text-brand-primary">{title}</h2>
		</header>
	);
};
