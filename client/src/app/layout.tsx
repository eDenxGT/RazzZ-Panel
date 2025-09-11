import type { Metadata } from "next";
import { Germania_One, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const germania = Germania_One({
	variable: "--font-germania",
	weight: "400",
	subsets: ["latin"],
});

const manrope = Manrope({
	variable: "--font-manrope",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "RazzZ Panel",
	description:
		"A Modern Hosting Management Platform where you can manage your game servers, bot hosting, and web hosting services.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${manrope.variable} ${germania.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
