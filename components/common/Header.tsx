"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.6 } // 60% visible
		);

		sections.forEach((section) => observer.observe(section));
		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	const navItems = [
		{ name: "about me", link: "about" },
		{ name: "my skills", link: "skills" },
		{ name: "projects", link: "projects" },
		{ name: "contact me", link: "contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background/30">
			<div className="mx-auto max-w-6xl px-4 md:px-10 flex items-center justify-between gap-24 h-[80px]">
				{/* Logo */}
				<a href="#hero" className="flex items-center-safe">
					<div className="w-[30px] h-[30px] relative">
						<Image src={"/m.png"} alt="logo" fill objectFit="contain"/>
					</div>
						<h1 className="text-2xl font-bold text-accent py-2">
							ohol
						</h1>
				</a>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex gap-8 items-center">
					{navItems.map((section, idx) => (
						<li key={idx}>
							<a
								href={`#${section.link}`}
								className={`capitalize font-medium transition-colors duration-300 ${
									activeSection === section.link
										? "text-accent"
										: "text-foreground hover:text-accent2"
								}`}
							>
								{section.name}
							</a>
						</li>
					))}
				</ul>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="md:hidden text-foreground hover:text-accent transition"
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-background/90 backdrop-blur-lg border-t border-accent/20"
					>
						<ul className="flex flex-col items-center gap-5 py-6">
							{navItems.map((section, idx) => (
								<li key={idx}>
									<a
										href={`#${section.link}`}
										onClick={() => setMenuOpen(false)}
										className={`capitalize font-medium text-lg transition-colors duration-300 ${
											activeSection === section.link
												? "text-accent"
												: "text-foreground hover:text-accent"
										}`}
									>
										{section.name}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
