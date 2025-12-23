"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
	{
		name: "Alex Johnson",
		role: "CEO, TechFlow",
		text: "Mohol is an exceptional developer who delivered our project ahead of schedule. His attention to detail and UI/UX expertise is top-notch.",
		image: "https://i.pravatar.cc/150?u=alex",
	},
	{
		name: "Sarah Miller",
		role: "Product Manager, CreativeCo",
		text: "Working with Mohol was a breeze. He translated our complex requirements into a beautiful, functional web application. Highly recommended!",
		image: "https://i.pravatar.cc/150?u=sarah",
	},
	{
		name: "David Chen",
		role: "Founder, StartupHub",
		text: "The mobile app Mohol built for us has seen incredible user feedback. His technical skills and problem-solving abilities are outstanding.",
		image: "https://i.pravatar.cc/150?u=david",
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="py-24 max-w-6xl mx-auto px-6">
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
					What People Say
				</h2>
				<p className="text-foreground/60 max-w-xl mx-auto">
					Feedback from clients and collaborators I&apos;ve had the pleasure of working with.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{testimonials.map((t, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: i * 0.1 }}
						className="backdrop-blur bg p-8 rounded-3xl relative"
					>
						<div className="absolute top-6 right-8 text-6xl text-accent/10 font-serif">
							&ldquo;
						</div>
						<p className="text-foreground/80 mb-8 italic relative z-10">
							&ldquo;{t.text}&rdquo;
						</p>
						<div className="flex items-center gap-4">
							<div className="relative w-12 h-12 rounded-full overflow-hidden border border-accent/20">
								<Image
									src={t.image}
									alt={t.name}
									fill
									className="object-cover"
								/>
							</div>
							<div>
								<h4 className="font-bold text-white">{t.name}</h4>
								<p className="text-xs text-foreground/50">{t.role}</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
