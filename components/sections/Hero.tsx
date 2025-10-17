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
			className="min-h-screen flex flex-col items-center justify-center md:justify-end w-full max-w-6xl mx-auto px-5 py-20 gap-10"
		>
			<div className="w-full flex flex-col-reverse md:flex-row gap-10">
				{/* LEFT SIDE - Text */}
				<div className="flex-1 flex gap-4 md:gap-10 flex-col">
					<motion.div
						initial={{ opacity: 0, x: -200 }}
						whileInView={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -200 }}
						transition={{ duration: 1 }}
						className="md:flex-1  bg-background/30 backdrop-blur p-6 sm:p-8 rounded-2xl text-left"
					>
						<p className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-linear-65 from-accent2 from-5% to-40% to-accent text-transparent bg-clip-text mb-4">
							Hello, I’m
						</p>

						<TypeAnimation
							sequence={[
								"Mohol Samwel",
								1500,
								"A Web Developer",
								1500,
								"A Mobile Developer",
								1500,
								"A UI/UX Designer",
								1500,
							]}
							wrapper="span"
							speed={50}
							className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground"
							repeat={Infinity}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 200 }}
						whileInView={{ opacity: 1, y: 0 }}
						exit={{ y: 200, opacity: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="flex gap-4 items-center justify-center"
					>
						<div className="px-4 md:px-11 py-2 bg-gradient-to-r from-foreground/20 to-secondary/45 bg-[length:200%_100%] bg-right hover:bg-left active:bg-left  backdrop-blur rounded-full transition-all duration-500 ease-in-out cursor-pointer">
							<p className="text-lg font-semibold">Hire Me</p>
						</div>
						<div className="px-4 md:px-11 py-2 bg-gradient-to-r from-background/45 to-accent/45 bg-[length:200%_100%] bg-left hover:bg-right active:bg-right backdrop-blur rounded-full transition-all duration-500 ease-in-out cursor-pointer">
							<p className="text-lg font-semibold">Download CV</p>
						</div>
					</motion.div>
				</div>

				{/* RIGHT SIDE - Image */}
				<div className="flex-1 flex items-center justify-center md:justify-end">
					<motion.div
						initial={{ opacity: 0, scale: 0, y: -50 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="relative w-[200px] sm:w-[300px] md:w-[350px] h-[200px] sm:h-[300px] md:h-[350px] rounded-full shadow-2xl shadow-accent/25 hover:shadow-accent/50 transition-all duration-300 overflow-hidden"
					>
						<Image
							src="/images/profile.jpg"
							alt="Profile picture"
							fill
							className="rounded-full object-cover"
						/>
					</motion.div>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				exit={{ y: -50, opacity: 0 }}
				transition={{ duration: 0.3, delay: 0.9 }}
				className="w-full hidden md:block"
			>
				<AchievementsSection />
			</motion.div>
		</section>
	);
};

export default Hero;
