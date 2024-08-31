import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import { Suspense } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";
import Loading from "@/app/loading";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

if (process.env.NEXT_PUBLIC_BASE_URL === undefined) {
	throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
	title: "VITA – Sala bankietowa",
	description:
		"Sala VITA to idealne miejsce na organizację wesela, bankietu, stypy, imprezy okolicznościowej, spotkania biznesowego, imprezy firmowej, imprezy integracyjnej, czy spotkania rodzinnego.",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pl" className="scroll-pt-navbar-small scroll-smooth">
			<body
				className={`${poppins.className} overflow-x-hidden bg-white bg-bg-pattern text-brand-primary-dark antialiased`}
			>
				<Navigation />
				<Suspense fallback={<Loading />}>{children}</Suspense>
				<Footer />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
