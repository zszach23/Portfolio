// ============================================================================
// ExperienceChallengesSection.tsx
//
// Challenges component for experience pages
// ============================================================================

import type { Challenge } from "./ExperiencePageTypes";

export default function ExperienceChallengesSection({ challenges }: { challenges: Challenge[]}) {
    return (
        <section className="">
            <h2 className="">Encountered Challenges and Solutions</h2>
            {challenges.map((challenge, index) => (
                <div key={index} className="">
                    <h3 className="">{challenge.title}</h3>
                    {challenge.systemOverview && (
                        <div className="">
                            <h4 className="">System Overview</h4>
                            <p className="">{challenge.systemOverview}</p>
                        </div>
                    )}
                    <div className="">
                        <h4 className="">Problem Statement</h4>
                        <p className="">{challenge.problemStatement}</p>
                    </div>
                    <div className="">
                        <h4 className="">Solution</h4>
                        {challenge.solution.map((step, stepIndex) => (
                            <p key={stepIndex} className="">{step}</p>
                        ))}
                    </div>
                    <div className="">
                        <h4 className="">What I Learned</h4>
                        <p className="">{challenge.whatILearned}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}