"use client";
import React from "react";
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaGitAlt,
	FaHtml5,
	FaCss3Alt,
	FaDocker,
	FaDatabase,
} from "react-icons/fa";
import {
	SiMongodb,
	SiTypescript,
	SiNextdotjs,
	SiPostgresql,
	SiTailwindcss,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
	{
		icon: <FaReact className="text-sky-400 text-4xl sm:text-5xl" />,
		name: "React",
	},
	{
		icon: <SiNextdotjs className="text-white text-4xl sm:text-5xl" />,
		name: "Next.js",
	},
	{
		icon: <FaNodeJs className="text-green-500 text-4xl sm:text-5xl" />,
		name: "Node.js",
	},
	{
		icon: <SiMongodb className="text-green-400 text-4xl sm:text-5xl" />,
		name: "MongoDB",
	},
	{
		icon: <SiPostgresql className="text-blue-500 text-4xl sm:text-5xl" />,
		name: "PostgreSQL",
	},
	{
		icon: <FaPython className="text-yellow-400 text-4xl sm:text-5xl" />,
		name: "Python",
	},
	{
		icon: <SiTypescript className="text-blue-400 text-4xl sm:text-5xl" />,
		name: "TypeScript",
	},
	{
		icon: <FaGitAlt className="text-orange-500 text-4xl sm:text-5xl" />,
		name: "Git",
	},
	{
		icon: <FaDocker className="text-blue-400 text-4xl sm:text-5xl" />,
		name: "Docker",
	},
	{
		icon: <FaHtml5 className="text-orange-500 text-4xl sm:text-5xl" />,
		name: "HTML5",
	},
	{
		icon: <FaCss3Alt className="text-blue-500 text-4xl sm:text-5xl" />,
		name: "CSS3",
	},
	{
		icon: <SiTailwindcss className="text-cyan-400 text-4xl sm:text-5xl" />,
		name: "Tailwind",
	},
	{
		icon: <FaDatabase className="text-gray-300 text-4xl sm:text-5xl" />,
		name: "SQL",
	},
];

const repeatedSkills = [...skills, ...skills];

const sectionVariants = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -30 },
};

const Skills = () => {
	return (
		<AnimatePresence>
			<motion.section
				id="skills"
				className="relative py-20 overflow-hidden bg-transparent mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				variants={sectionVariants}
				initial="initial"
				whileInView="animate"
				exit="exit"
				transition={{ duration: 0.8 }}
			>
				{/* Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
						Skills & Tools
					</h2>
					<p className="text-foreground/60 max-w-2xl mx-auto">
						Technologies I use to build modern, scalable, and high-performance
						applications.
					</p>
				</motion.div>

				{/* Scrolling Skills */}
				<motion.div
					className="relative overflow-hidden glass py-12 rounded-3xl"
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
				>
					{/* Gradient Fades */}
					<div className="absolute left-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10" />
					<div className="absolute right-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10" />

					{/* Animated Icons */}
					<div className="flex gap-12 sm:gap-20 animate-marquee whitespace-nowrap">
						{repeatedSkills.map((skill, index) => (
							<div
								key={index}
								className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[150px] group"
							>
								<div className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.3)]">
									{skill.icon}
								</div>
								<p className="mt-4 text-foreground/70 text-sm sm:text-base font-medium transition-colors group-hover:text-accent">
									{skill.name}
								</p>
							</div>
						))}
					</div>
				</motion.div>

				{/* Marquee animation */}
				<style jsx>{`
					@keyframes marquee {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(-50%);
						}
					}
					.animate-marquee {
						display: inline-flex;
						animation: marquee 40s linear infinite;
					}
					.animate-marquee:hover {
						animation-play-state: paused;
					}
				`}</style>
			</motion.section>
		</AnimatePresence>
	);
};

export default Skills;
