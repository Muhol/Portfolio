"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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

		if (!service_id || !template_id || !public_key) {
			toast.error("Contact form configuration missing!");
			setLoading(false);
			return;
		}

		emailjs
			.sendForm(service_id, template_id, formRef.current!, public_key)
			.then(
				() => {
					toast.success("Message sent successfully!");
					setLoading(false);
					formRef.current?.reset();
				},
				(error) => {
					console.error(error);
					toast.error("Failed to send message. Please try again later.");
					setLoading(false);
				}
			);
	};

	return (
		<section
			id="contact"
			className="max-w-6xl mx-auto py-24 px-6 sm:px-10 lg:px-16"
		>
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
					Get In Touch
				</h2>
				<p className="text-foreground/60 max-w-xl mx-auto">
					Have a project in mind or just want to chat? I’m always open to new
					opportunities and collaborations.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				{/* Contact Information */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-10"
				>
					<div className="space-y-6">
						<h3 className="text-2xl font-bold text-white">Contact Info</h3>
						<div className="space-y-4">
							<a
								href="mailto:ianmuhol48@gmail.com"
								className="backdrop-blur flex items-center gap-4 group glass p-4 rounded-2xl border border-white/5 hover:border-accent/40 transition-colors"
							>
								<div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
									<FaEnvelope size={20} />
								</div>
								<div>
									<p className="text-xs text-foreground/50 font-medium">EMAIL</p>
									<p className="text-foreground/90 font-medium">ianmuhol48@gmail.com</p>
								</div>
							</a>

							<div className="backdrop-blur flex items-center gap-4 glass p-4 rounded-2xl border border-white/5 transition-colors">
								<div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent">
									<FaMapMarkerAlt size={20} />
								</div>
								<div>
									<p className="text-xs text-foreground/50 font-medium">LOCATION</p>
									<p className="text-foreground/90 font-medium">Nairobi, Kenya</p>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<h3 className="text-2xl font-bold text-white">Socials</h3>
						<div className="flex gap-4">
							{[
								{ icon: FaGithub, href: "https://github.com/Muhol", label: "GitHub" },
								{ icon: FaLinkedin, href: "https://www.linkedin.com/in/ian-mohol-a39351309/", label: "LinkedIn" }
							].map((social, i) => (
								<a
									key={i}
									href={social.href}
									target="_blank"
									aria-label={social.label}
									className="w-14 h-14 backdrop-blur rounded-2xl flex items-center justify-center text-foreground/70 hover:text-accent hover:scale-110 border border-accent/5 shadow-lg hover:shadow-xl shadow-accent/20 hover:border-accent/20 transition-all"
								>
									<social.icon size={24} />
								</a>
							))}
						</div>
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="glass p-8 sm:p-10 rounded-3xl shadow-2xl"
				>
					<form ref={formRef} onSubmit={handleSend} className="space-y-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="space-y-2">
								<label className="text-sm font-medium text-foreground/60 ml-1">Name</label>
								<input
									type="text"
									name="user_name"
									required
									placeholder="John Doe"
									className="backdrop-blur w-full bg-background/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium text-foreground/60 ml-1">Email</label>
								<input
									type="email"
									name="user_email"
									required
									placeholder="john@example.com"
									className="backdrop-blur w-full bg-background/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<label className="text-sm font-medium text-foreground/60 ml-1">Message</label>
							<textarea
								name="message"
								required
								rows={5}
								placeholder="Your message goes here..."
								className="backdrop-blur w-full bg-background/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 resize-none transition-colors"
							></textarea>
						</div>

						<button
							type="submit"
							disabled={loading}
							className="group relative w-full overflow-hidden rounded-xl bg-accent px-8 py-4 font-bold text-background transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
						>
							<div className="absolute inset-0 flex items-center justify-center bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
							<span className="relative">
								{loading ? "Sending..." : "Send Message"}
							</span>
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
