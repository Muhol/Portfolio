"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaExternalLinkAlt,
	FaGithub,
	FaChevronLeft,
	FaChevronRight,
	FaDownload,
} from "react-icons/fa";
import Image from "next/image";

const projects = [
	{
		title: "E-Commerce Web",
		description:
			"A full-stack e-commerce web app with product management, secure payments, and user authentication.",
		tech: ["React", "Node.js", "MongoDB", "Tailwind"],
		image: "/projects/3.png",
		demo: "https://shop-it-eosin.vercel.app/",
		code: "https://github.com/Muhol/shop-it",
	},
	{
		title: "Water Delivery App",
		description:
			"A multivendor mobile app for ordering and delivering water with real-time tracking and vendor management.",
		tech: ["React Native", "Python", "PostgreSQL"],
		image: "/projects/1.png",
		demo: "https://github.com/Muhol/Multivendor-Water-Delivery-App/releases/download/v1.0.0/vepo-preview-005.apk", // Replace with Play Store / APK link if available
		code: "https://github.com/Muhol/Multivendor-Water-Delivery-App",
	},
	{
		title: "Platinums Hostel",
		description:
			"A Next.js web platform for managing hostel rooms, bookings, and tenant records efficiently.",
		tech: ["Next.js", "PostgreSQL", "Tailwind"],
		image: "/projects/2.png",
		demo: "https://platinums-hostels-git-main-muhols-projects.vercel.app/",
		code: "https://github.com/Muhol/Platinums-Hostels",
	},
];

const Projects = () => {
	const [current, setCurrent] = useState(0);

	// Auto-slide every 6 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 6000);
		return () => clearInterval(interval);
	}, [current]);

	const nextSlide = () => {
		setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	const isMobileApp = projects[current].title.toLowerCase().includes("app");

	return (
		<section className="py-20 max-w-5xl w-full mx-auto px-2" id="projects">
			{/* Header */}
			<motion.div
				className="text-center mb-2 md:mb-12"
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				exit={{ y: 100, opacity: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="text-4xl font-bold text-accent">Projects</h2>
				<p className="mt-3 text-gray-300">
					A showcase of my featured work and technical capabilities
				</p>
			</motion.div>

			{/* Carousel Container */}
			<motion.div
				className="relative min-h-[480px] md:min-h-[520px] overflow-hidden md:flex md:items-center rounded-2xl shadow-lg backdrop-blur bg-background/30 px-4 md:px-[40px] py-[50px]"
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				exit={{ y: -100, opacity: 0 }}
				transition={{ duration: 0.3 }}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={current}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="inset-0 flex flex-col md:flex-row items-center w-full justify-center gap-6 px-6"
					>
						{/* Project Image */}
						<div className="relative w-full h-32 md:h-80 order-1 md:order-none">
							<Image
								src={projects[current].image}
								alt={projects[current].title}
								fill
								className="object-cover rounded-2xl"
							/>
						</div>

						{/* Project Details */}
						<div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-none">
							<h3 className="text-3xl font-bold mb-3 text-white">
								{projects[current].title}
							</h3>
							<p className="text-gray-300 mb-4 leading-relaxed">
								{projects[current].description}
							</p>

							{/* Tech Stack */}
							<div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
								{projects[current].tech.map((tech, i) => (
									<span
										key={i}
										className="bg-accent/10 text-accent px-3 py-1 text-xs rounded-full font-medium"
									>
										{tech}
									</span>
								))}
							</div>

							{/* Links */}
							<div className="flex justify-center md:justify-start gap-6">
								<a
									href={projects[current].demo}
									target="_blank"
									className="flex items-center gap-2 text-accent hover:underline"
								>
									{isMobileApp ? (
										<>
											<FaDownload /> Download App
										</>
									) : (
										<>
											<FaExternalLinkAlt /> Live Demo
										</>
									)}
								</a>
								<a
									href={projects[current].code}
									target="_blank"
									className="flex items-center gap-2 text-gray-300 hover:text-accent"
								>
									<FaGithub /> Code
								</a>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Navigation Buttons */}
				<button
					onClick={prevSlide}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur hover:bg-black/60 p-3 rounded-full text-accent transition"
				>
					<FaChevronLeft size={20} />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur hover:bg-black/60 p-3 rounded-full text-accent transition"
				>
					<FaChevronRight size={20} />
				</button>

				{/* Indicators */}
				<div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
					{projects.map((_, index) => (
						<div
							key={index}
							onClick={() => setCurrent(index)}
							className={`h-1.5 w-8 rounded-full cursor-pointer transition-all duration-300 ${
								index === current
									? "bg-accent"
									: "bg-foreground/20"
							}`}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Projects;
