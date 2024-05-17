"use client";

import { useEffect } from "react";
import { Heading } from "@/components/common/Heading";

type ErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex h-screen flex-col items-center justify-center gap-8">
			<Heading level={2}>Coś poszło nie tak 😢</Heading>
			<button
				className="rounded-sm border border-brand-primary-light border-opacity-60 bg-brand-primary px-6 py-3 text-center font-bold text-white shadow-sm transition-colors hover:bg-white hover:text-brand-primary-light"
				onClick={() => reset()}
			>
				Spróbuj ponownie
			</button>
		</div>
	);
}
