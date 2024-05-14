import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
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
				{children}
				<Footer />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
