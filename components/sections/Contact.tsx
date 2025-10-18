"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);

	const handleSend = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const service_id: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
		const template_id: string = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
		const public_key: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

		emailjs
			.sendForm(
				service_id,
				template_id,
				formRef.current!,
				public_key
			)
			.then(
				() => {
					toast.success("Message sent successfully!");
					setLoading(false);
					formRef.current?.reset();
				},
				(error) => {
					console.error(error);
					toast.error(
						"Failed to send message. Please try again later."
					);
					setLoading(false);
				}
			);
	};

	return (
		<section
			id="contact"
			className="text-white py-20 px-6 sm:px-10 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-14"
		>
			{/* Contact Form */}
			<motion.div
				initial={{ opacity: 0, x: -60 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
				className="w-full md:w-1/2"
			>
				<h2 className="text-3xl sm:text-4xl font-bold mb-6 text-accent2 text-center md:text-left">
					Contact Me
				</h2>
				<p className="text-gray-300 mb-8 text-center md:text-left">
					Feel free to reach out — whether it’s a project idea,
					collaboration, or just to say hi!
				</p>

				<form
					ref={formRef}
					onSubmit={handleSend}
					className="space-y-6 w-full"
				>
					<div>
						<label className="block mb-2 text-sm font-medium">
							Name
						</label>
						<input
							type="text"
							name="user_name"
							required
							className="w-full p-3 rounded-xl bg-transparent border border-foreground/10 backdrop-blur focus:border-accent/40 focus:ring-0 outline-none text-gray-100 text-sm sm:text-base"
							placeholder="Your Name"
						/>
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">
							Email
						</label>
						<input
							type="email"
							name="user_email"
							required
							className="w-full p-3 rounded-xl bg-transparent border border-foreground/10 backdrop-blur focus:border-accent/40 focus:ring-0 outline-none text-gray-100 text-sm sm:text-base"
							placeholder="you@example.com"
						/>
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">
							Message
						</label>
						<textarea
							name="message"
							rows={5}
							required
							className="w-full p-3 rounded-xl bg-transparent border border-foreground/10 backdrop-blur focus:border-accent/40 focus:ring-0 outline-none text-gray-100 text-sm sm:text-base"
							placeholder="Your message..."
						></textarea>
					</div>

					<motion.button
						type="submit"
						disabled={loading}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="w-full sm:w-auto px-8 py-3 rounded-xl bg-accent text-background font-semibold shadow-lg transition-all text-sm sm:text-base"
					>
						{loading ? "Sending..." : "Send Message"}
					</motion.button>
				</form>
			</motion.div>

			{/* Social Links */}
			<motion.div
				initial={{ opacity: 0, x: 60 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full md:w-1/2 flex flex-col items-center md:items-start"
			>
				<h3 className="text-2xl font-semibold mb-6 text-accent2 text-center md:text-left">
					Connect with me
				</h3>

				<div className="flex flex-col gap-6 text-lg w-full max-w-md">
					<a
						href="mailto:ianmuhol48@gmail.com"
						className="flex items-center justify-center md:justify-start gap-4 group hover:text-accent2 transition-colors "
					>
						<div className="group-hover:text-accent">
							<FaEnvelope size={22} />
						</div>
						ianmuhol48@gmail.com
					</a>
					<a
						href="https://github.com/Muhol"
						target="_blank"
						className="flex items-center justify-center md:justify-start gap-4 group hover:text-accent2 transition-colors "
					>
						<div className="group-hover:text-accent">
							<FaGithub size={22} />
						</div>
						github.com/Muhol
					</a>
					<a
						href="https://www.linkedin.com/in/ian-mohol-a39351309/"
						target="_blank"
						className="flex items-center justify-center md:justify-start gap-4 group hover:text-accent2 transition-colors "
					>
						<div className="group-hover:text-accent">
							<FaLinkedin size={22} />
						</div>
						linkedin.com/in/ian-mohol
					</a>
				</div>
			</motion.div>
		</section>
	);
};

export default Contact;
