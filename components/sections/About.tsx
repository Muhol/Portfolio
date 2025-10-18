"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
	return (
		<section
			id="about"
			className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
		>
			{/* RIGHT SIDE - Image (on top for mobile) */}
			<motion.div
				initial={{ opacity: 0, y: 50, x: 100 }}
				whileInView={{ opacity: 1, y: 0, x: 0 }}
				exit={{ opacity: 0, y: 50, x: 100 }}
				transition={{ duration: 0.8, delay:0.3 }}
				// viewport={{ once: true }}
				className="flex justify-center order-first md:order-last"
			>
				<div className="relative w-[260px] h-[220px] sm:w-[320px] sm:h-[280px] md:w-[400px] md:h-[320px] rounded-2xl shadow-lg overflow-hidden">
					<Image
						src="/images/desk-setup.jpg"
						alt="My workspace setup"
						fill
						className="object-cover rounded-2xl"
					/>
				</div>
			</motion.div>

			{/* LEFT SIDE - Text */}
			<motion.div
				initial={{ opacity: 0, x: -150 }}
				whileInView={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -150 }}
				transition={{ duration: 0.8 }}
				className="text-center md:text-left"
			>
				<h2 className="text-3xl sm:text-4xl font-bold mb-6 text-accent2">
					About Me
				</h2>

				<p className="text-base sm:text-lg mb-4 leading-relaxed text-foreground/90">
					I’m{" "}
					<span className="text-accent font-bold">
						Ian Samwel Mohol
					</span>
					, a Computer Science student at the Catholic University of
					Eastern Africa with a strong passion for technology and
					problem-solving.
				</p>

				<p className="text-base sm:text-lg mb-4 leading-relaxed text-foreground/90">
					I specialize in building full-stack applications using
					<span className="text-accent font-bold"> React</span>,
					<span className="text-accent font-bold"> Next.js</span>,
					<span className="text-accent font-bold"> Node.js</span>, and
					<span className="text-accent font-bold"> MongoDB</span>. I love
					transforming ideas into functional, user-friendly, and
					visually appealing digital experiences.
				</p>

				<p className="text-base sm:text-lg leading-relaxed text-foreground/90">
					When I’m not coding, I enjoy exploring emerging tech trends,
					contributing to open-source projects, and learning new tools
					to enhance my craft. My goal is to become a versatile
					software engineer capable of delivering impactful solutions.
				</p>
			</motion.div>
		</section>
	);
};

export default About;
