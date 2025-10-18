"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-animated-numbers (client-side only)
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
	ssr: false,
});

interface Achievement {
	metric: string;
	value: number;
	prefix?: string;
	postfix?: string;
}

// ✅ Achievements data
const achievementsList: Achievement[] = [
	{ metric: "Projects", value: 4, postfix: "+" },
	{ metric: "Live Projects", value: 3, postfix: "+" },
	{ metric: "Frameworks & Tools", value: 10, postfix: "+" },
	{ metric: "Hands-on Experience", value: 4, postfix: "+ yrs" },
];

const AchievementsSection: React.FC = () => {
	const [displayValues, setDisplayValues] = useState<number[]>([]);

	useEffect(() => {
		// Start with random values to create the "rolling" effect
		setDisplayValues(
			achievementsList.map(() => Math.floor(Math.random() * 50))
		);

		// Then update to actual values after short delay
		const timer = setTimeout(() => {
			setDisplayValues(achievementsList.map((item) => item.value));
		}, 800); // adjust delay as you like

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<div className="sm:border-background/5 sm:border bg-background/10 backdrop-blur rounded-3xl py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
				{achievementsList.map((achievement, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
					>
						<h2 className="text-white text-4xl font-bold flex flex-row items-center">
							{achievement.prefix && (
								<span>{achievement.prefix}</span>
							)}
							<AnimatedNumbers
								animateToNumber={displayValues[index] || 0}
								locale="en-US"
								className="text-white text-4xl font-bold"
								transitions={() => ({
									mass: 1,
									friction: 100,
									tension: 140 * (index + 1),
								})}
							/>
							{achievement.postfix && (
								<span>{achievement.postfix}</span>
							)}
						</h2>
						<p className="text-[#ADB7BE] text-base">
							{achievement.metric}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AchievementsSection;
