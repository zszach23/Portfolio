// ============================================================================
// ExperienceContributionsSection.tsx
//
// Contributions component for experience pages
// ============================================================================

import type { Contributions } from "./ExperiencePageTypes";
import "./Experience.css";

export default function ExperienceContributionsSection({ contributions }: { contributions: Contributions}) {
    return (
        <section className="section">
            <h2 className="sectionTitle">
                Contributions
            </h2>
            <div className="">
                {contributions.overview.map((paragraph, index) => (
                    <p key={index} className="">
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="">
                {contributions.features.map((feature, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-1 mb-8 items-center">
                        {feature.media && (
                            <div className="md:w-1/2 flex-shrink-0">
                                {feature.media.type === "image" ? (
                                    <img src={feature.media.url} alt={feature.media.alt || ""} className="" />
                                ) : (
                                    <iframe src={feature.media.url} title={feature.media.caption} className="" />
                                )}
                            </div>
                        )}
                        <div className="flex-1">
                            <h3 className="contributionTitle">{feature.title}</h3>
                            <p className="">{feature.details}</p>
                            {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                                <ul>
                                    {feature.bulletPoints.map((point, bpIndex) => (
                                        <li key={bpIndex}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}