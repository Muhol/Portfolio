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

// Duplicate skills for infinite scroll
const repeatedSkills = [...skills, ...skills];

const sectionVariants = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -60 },
};

const Skills = () => {
	return (
		<AnimatePresence>
			<motion.section
				id="skills"
				className="relative py-20 overflow-hidden bg-transparent mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				variants={sectionVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.8, ease: "easeInOut" }}
			>
				{/* Header */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-accent2 mb-3">
						Skills & Tools
					</h2>
					<p className="rounded-full bg-background/10 text-sm sm:text-base text-foreground/90 self-center w-fit px-4 py-1 mx-auto">
						Technologies I use to build modern and scalable
						applications
					</p>
				</motion.div>

				{/* Scrolling Skills */}
				<motion.div
					className="relative overflow-hidden backdrop-blur-md py-6 sm:py-10 px-2 sm:px-4 rounded-2xl"
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					{/* Gradient Fades */}
					<div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
					<div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

					{/* Animated Icons */}
					<div className="flex gap-10 sm:gap-16 animate-marquee whitespace-nowrap">
						{repeatedSkills.map((skill, index) => (
							<motion.div
								key={index}
								className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[150px]"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									delay: index * 0.05,
								}}
								viewport={{ once: true }}
							>
								{skill.icon}
								<p className="mt-2 sm:mt-3 text-gray-300 text-sm sm:text-base font-medium">
									{skill.name}
								</p>
							</motion.div>
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
						animation: marquee 30s linear infinite;
					}
				`}</style>
			</motion.section>
		</AnimatePresence>
	);
};

export default Skills;
