"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
	ssr: false,
});

interface Achievement {
	metric: string;
	value: number;
	prefix?: string;
	postfix?: string;
}

const achievementsList: Achievement[] = [
	{ metric: "Projects Completed", value: 12, postfix: "+" },
	{ metric: "Happy Clients", value: 8, postfix: "+" },
	{ metric: "Technologies", value: 15, postfix: "+" },
	{ metric: "Experience", value: 3, postfix: "+ Yrs" },
];

const AchievementsSection: React.FC = () => {
	const [displayValues, setDisplayValues] = useState<number[]>([]);

	useEffect(() => {
		setDisplayValues(achievementsList.map(() => 0));
		const timer = setTimeout(() => {
			setDisplayValues(achievementsList.map((item) => item.value));
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="w-full">
			<div className="glass rounded-3xl py-10 px-6 sm:px-12 flex flex-wrap items-center justify-around gap-8">
				{achievementsList.map((achievement, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center min-w-[140px]"
					>
						<div className="text-white text-4xl sm:text-5xl font-bold flex items-center mb-2">
							{achievement.prefix && <span>{achievement.prefix}</span>}
							<AnimatedNumbers
								animateToNumber={displayValues[index] || 0}
								locale="en-US"
								className="font-bold"
								transitions={() => ({
									mass: 1,
									friction: 100,
									tension: 140 * (index + 1),
								})}
							/>
							{achievement.postfix && (
								<span className="text-accent ml-1">{achievement.postfix}</span>
							)}
						</div>
						<p className="text-foreground/50 text-sm font-medium uppercase tracking-wider">
							{achievement.metric}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AchievementsSection;
