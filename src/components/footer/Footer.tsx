import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { CONTACT_ITEMS, NAV_ITEMS } from "@/constants";
import { ActiveLink } from "@/components/common/ActiveLink";

export const Footer = () => {
	return (
		<footer className=" bg-brand-primary text-white">
			<div className="container mx-auto p-8">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<h3 className="text-xl font-bold">Kontakt</h3>
						<ul className="mt-2 flex flex-col gap-2">
							{CONTACT_ITEMS.map((item) => (
								<li key={item.title}>
									<span className="sr-only">{item.title}</span>
									<Link href={item.href} target="_blank" rel="noopener noreferrer">
										{item.content}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold">O nas</h3>
						<p className="mt-2">
							Sala bankietowa <strong className="text-white">VITA</strong> to miejsce stworzone z
							myślą o organizacji wyjątkowych wydarzeń.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-bold">Mapa strony</h3>
						<ul className="mt-2 flex flex-col gap-2">
							{NAV_ITEMS.map((item) => (
								<li key={item.href}>
									<ActiveLink
										href={item.href}
										className="hover:underline"
										activeClassName="underline"
										aria-label={`Przejdź do ${item.label}`}
									>
										{item.label}
									</ActiveLink>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold">Social media</h3>
						<ul className="mt-2 flex flex-col gap-2">
							<li>
								<Link
									href="https://www.facebook.com/profile.php?id=61558106700689"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2"
								>
									<SiFacebook />
									<span className="sr-only">Facebook</span>
									<span>Sala VITA</span>
								</Link>
							</li>
							<li>
								<Link
									href="https://www.instagram.com/_vita_sala_"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2"
								>
									<SiInstagram />
									<span className="sr-only">Instagram</span>
									<span>_vita_sala_</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<p className="w-full pt-8 text-center">
					Copyright © 2024{" "}
					<Link
						href="https://whatacode.pl"
						className="font-bold"
						target="_blank"
						rel="noopener noreferrer"
					>
						whatacode.pl
					</Link>
				</p>
			</div>
		</footer>
	);
};
