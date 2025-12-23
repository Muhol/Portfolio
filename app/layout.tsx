import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/common/Navbar";

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mohol Samwel | Portfolio",
	description: "Full-stack Developer and Computer Science Student specializing in React, Next.js, and Mobile Development.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} antialiased`}>
				<Toaster position="top-center" />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
