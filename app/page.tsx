import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
		<section className="h-screen max-w-screen overflow-x-hidden snap-mandatory snap-y overflow-y-scroll pt-[80px]">
			{/* <video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover -z-10"
			>
				<source
					src="/videos/bg-video.mov"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video> */}
			<section
				id="hero"
				className="min-h-screen bg-linear-to-b from-background from-10% via-transparent to-background to-90% flex items-center justify-center snap-start"
			>
				<Hero />
			</section>
			<section
				id="about"
				className="min-h-screen flex items-center justify-center snap-start bg-background "
			>
				<About />
			</section>
			<section
				id="skills"
				className="min-h-screen flex items-center justify-center snap-start bg-radial to-background from-10% to-50% "
			>
				<Skills />
			</section>
			<section
				id="projects"
				className="min-h-screen flex items-center justify-center snap-start bg-linear-to-b from-background from-10% "
			>
				<Projects />
			</section>
			<section
				id="contact"
				className="min-h-screen flex items-center justify-center snap-start bg-linear-to-t from-background from-10% "
			>
				<Contact />
			</section>
		</section>
  );
}
