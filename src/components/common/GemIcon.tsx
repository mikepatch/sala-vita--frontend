import clsx from "clsx";
import { Gem } from "lucide-react";

type GemIconProps = {
	className?: string;
	size?: number;
};

export const GemIcon = ({ className = "", size = 32 }: GemIconProps) => {
	return <Gem strokeWidth={2} size={size} className={clsx("text-brand-primary", className)} />;
};
