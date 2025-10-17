"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import react-animated-numbers with SSR disabled
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
	ssr: false,
}) as any; // <-- Fixes TypeScript prop type issue

// Define the TypeScript interface for each achievement item
interface Achievement {
	metric: string;
	value: string;
	prefix?: string;
	postfix?: string;
}

// Achievements data
const achievementsList: Achievement[] = [
	{
		metric: "Projects",
		value: "4",
		postfix: "+",
	},
	{
		postfix: "+",
		metric: "live Projects",
		value: "3",
	},
	{
		metric: "Frameworks & Tools",
		value: "10",
		postfix: "+",
	},
	{
		metric: "Hands-on Experience",
		value: "4",
		postfix: "+ yrs",
	},
];

const AchievementsSection: React.FC = () => {
	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<div className="sm:border-background/5 sm:border bg-background/30 backdrop-blur rounded-3xl py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
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
								includeComma
								animateToNumber={parseInt(
									achievement.value,
									10
								)}
								locale="en-US"
								className="text-white text-4xl font-bold"
								configs={() => ({
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
