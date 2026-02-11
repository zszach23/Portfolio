// ============================================================================
// ExperienceChallengesSection.tsx
//
// Challenges component for experience pages
// ============================================================================

import type { Challenge } from "./ExperiencePageTypes";
import "./Experience.css";

export default function ExperienceChallengesSection({ challenges }: { challenges: Challenge[]}) {
    return (
        <section className="section">
            <h2 className="sectionTitle">Encountered Challenges and Solutions</h2>
            {challenges.map((challenge, index) => (
                <div key={index} className="my-4">
                    <h3 className="challengeTitle">
                        {challenge.title}
                    </h3>
                    {challenge.systemOverview && (
                        <div className="challengeItem">
                            <h4 className="challengeLabel">System Overview</h4>
                            <p className="">{challenge.systemOverview}</p>
                        </div>
                    )}
                    <div className="challengeItem">
                        <h4 className="challengeLabel">Problem Statement</h4>
                        <p className="">{challenge.problemStatement}</p>
                    </div>
                    <div className="challengeItem">
                        <h4 className="challengeLabel">Solution</h4>
                        {challenge.solution.map((step, stepIndex) => (
                            <p key={stepIndex} className="mb-2">{step}</p>
                        ))}
                    </div>
                    <div className="challengeItem">
                        <h4 className="challengeLabel">What I Learned</h4>
                        <p className="">{challenge.whatILearned}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}