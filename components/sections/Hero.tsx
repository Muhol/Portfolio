"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import AchievementsSection from "../ui/AchievementsSection";

const Hero = () => {
	return (
		<section
			id="hero"
			className="min-h-screen flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-5 py-20 gap-16"
		>
			<div className="w-full flex flex-col-reverse md:flex-row items-center gap-12">
				{/* LEFT SIDE - Text */}
				<div className="flex-1 flex flex-col gap-8 text-center md:text-left">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className="glass p-8 sm:p-10 rounded-3xl"
					>
						<p className="text-xl sm:text-2xl font-medium text-accent mb-4">
							Hello, I’m
						</p>
						<h1 className="text-5xl sm:text-7xl font-bold text-gradient mb-6">
							Mohol Samwel
						</h1>
						
						<div className="h-16 flex items-center justify-center md:justify-start">
							<TypeAnimation
								sequence={[
									"A Full-stack Web Developer",
									2000,
									"A Mobile App Developer",
									2000,
									"A UI/UX Design Specialist",
									2000,
									"A Computer Science Student",
									2000,
								]}
								wrapper="span"
								speed={50}
								className="text-2xl sm:text-3xl font-semibold text-foreground/80"
								repeat={Infinity}
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="flex flex-wrap gap-4 items-center justify-center md:justify-start"
					>
						<a href="#contact" className="relative group">
							<div className="absolute -inset-0.5 bg-accent rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
							<div className="relative px-8 md:px-12 py-3 bg-accent text-background rounded-full font-bold text-lg transition duration-500">
								Hire Me
							</div>
						</a>
						
						<a 
							href="https://drive.google.com/file/d/1w1prCAgb4WUT4ynwMw_yBXjXiEv_ubvf/view?usp=sharing"
							target="_blank"
							className="px-8 md:px-12 py-3 glass rounded-full font-semibold text-lg hover:border-accent/40 transition-all duration-300"
						>
							Download CV
						</a>
					</motion.div>
				</div>

				{/* RIGHT SIDE - Image */}
				<div className="flex-1 flex items-center justify-center md:justify-end">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						className="relative w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px]"
					>
						{/* Background Glow */}
						<div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
						
						<div className="relative w-full h-full rounded-full glass border-2 border-accent/20 p-2 shadow-2xl shadow-accent/10">
							<div className="relative w-full h-full rounded-full overflow-hidden">
								<Image
									src="/images/profile3.png"
									alt="Mohol Samwel Profile"
									fill
									className="object-cover transition-transform duration-700 hover:scale-110"
									priority
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.8 }}
				className="w-full hidden md:block"
			>
				<AchievementsSection />
			</motion.div>
		</section>
	);
};

export default Hero;
