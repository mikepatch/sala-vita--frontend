import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "../styles/globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
	title: "VITA – Sala bankietowa",
	description:
		"Sala VITA to idealne miejsce na organizację wesela, bankietu, stypy, imprezy okolicznościowej, spotkania biznesowego, imprezy firmowej, imprezy integracyjnej, czy spotkania rodzinnego.",
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="pl" className="scroll-pt-header scroll-smooth ">
			<body className={`${poppins.className} bg-white text-brand-primary-dark antialiased`}>
				<header>
					<Navigation />
				</header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
