"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code, Briefcase, Mail, MessageSquare } from "lucide-react";

const navItems = [
	{ name: "Hero", href: "hero", icon: Home },
	{ name: "About", href: "about", icon: User },
	{ name: "Skills", href: "skills", icon: Code },
	{ name: "Projects", href: "projects", icon: Briefcase },
	{ name: "Testimonials", href: "testimonials", icon: MessageSquare },
	{ name: "Contact", href: "contact", icon: Mail },
];

const Navbar = () => {
	// const [active, setActive] = useState("Hero");
	const [activeSection, setActiveSection] = useState("hero");


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

	return (
		<nav className="fixed bottom-6 left-1/2 rounded-full bg-white/ backdrop-blur -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0 md:top-1/2 md:right-6 md:-translate-y-1/2 z-50">
			<motion.div
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				className=" rounded-full px-4 py-4 md:px-3 md:py-6 flex flex-row md:flex-col items-center gap-6 md:gap-8 shadow-2xl shadow-black/50"
			>
				{navItems.map((item) => {
					const Icon = item.icon;
					const isActive = activeSection === item.href;

					return (
						<a
							key={item.name}
							href={`#${item.href}`}
							className="relative group flex items-center justify-center p-2 transition-transform duration-300 hover:scale-125"
							onClick={(e) => {
								e.preventDefault();
								console.log(`#${item.href}`);
								const el = document.querySelector(`#${item.href}`);
								if (el) {
									el.scrollIntoView({ behavior: "smooth" });
								}
							}}
						>
							<Icon
								size={22}
								className={`transition-all duration-300 ${
									isActive 
										? "text-accent drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]" 
										: "text-foreground/40 group-hover:text-foreground"
								}`}
							/>
							
							<AnimatePresence>
								{isActive && (
									<motion.div
										layoutId="nav-glow"
										className="absolute -inset-2 bg-accent/10 blur-xl rounded-full -z-10"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									/>
								)}
							</AnimatePresence>

							{/* Tooltip */}
							<span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-accent text-background text-xs font-bold opacity-0 group-hover:md:opacity-100 transition-opacity pointer-events-none hidden md:block whitespace-nowrap">
								{item.name}
							</span>
							<span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-accent text-background text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:hidden whitespace-nowrap">
								{item.name}
							</span>
						</a>
					);
				})}
			</motion.div>
		</nav>
	);
};

export default Navbar;
