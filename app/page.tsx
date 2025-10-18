"use client";
import { useEffect, useRef } from "react";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();

		let letters =
			"ABCDEFGHIJKLMNOPQRSTUVXYZ123456789@#$%&*abcdefghijklmnopqrstuvxyz";
		const lettersArray = letters.split("");

		const fontSize = 20; // 🔹 Increased from 10 → 16 for larger letters
		let columns = Math.floor(canvas.width / fontSize);
		const drops: number[] = Array(columns).fill(1);

		const draw = () => {
			ctx.fillStyle = "rgba(0, 0, 0, .1)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = "#00ff00";
			ctx.font = `${fontSize}px monospace`;

			for (let i = 0; i < drops.length; i++) {
				const text =
					lettersArray[
						Math.floor(Math.random() * lettersArray.length)
					];
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);

				drops[i]++;
				if (
					drops[i] * fontSize > canvas.height &&
					Math.random() > 0.95
				) {
					drops[i] = 0;
				}
			}
		};

		const interval = setInterval(draw, 33);
		window.addEventListener("resize", resizeCanvas);

		return () => {
			clearInterval(interval);
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return (
		<section className="h-screen w-screen overflow-x-hidden snap-y snap-mandatory overflow-y-scroll pt-[80px] relative">
			<canvas
				ref={canvasRef}
				className="fixed top-0 left-0 w-full h-full -z-10 bg-background"
			></canvas>

			<section
				id="hero"
				className="min-h-screen flex items-center justify-center snap-start md:bg-gradient-to-b from-background from-0% via-transparent to-background to-90%"
			>
				<Hero />
			</section>

			<section
				id="about"
				className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-b md:from-background from-10% md:from-29% md:via-background/45 md:via-60% to-background to-60% md:to-100%"
			>
				<About />
			</section>

			<section
				id="skills"
				className="min-h-screen flex items-center justify-center snap-start bg-radial from-transparent to-background from-20% to-60%"
			>
				<Skills />
			</section>

			<section
				id="projects"
				className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-b from-background from-10%  to-transparent"
			>
				<Projects />
			</section>

			<section
				id="contact"
				className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-b from-transparent from-10% via-transparent to-background to-90%"
			>
				<Contact />
			</section>
		</section>
	);
}
