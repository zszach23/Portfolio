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
                    <p key={index} className="my-2">
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="mx-2 my-4">
                {contributions.features.map((feature, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-1 mb-8 items-center">
                        {feature.media && (
                            <div className="md:w-1/2 flex-shrink-0">
                                {feature.media.type === "image" ? (
                                    <img src={feature.media.url} alt={feature.media.alt || ""}  />
                                ) : (
                                    <iframe src={feature.media.url} title={feature.media.caption} allowFullScreen />
                                )}
                            </div>
                        )}
                        <div className="flex-1">
                            <h3 className="contributionTitle">{feature.title}</h3>
                            <p className="">{feature.details}</p>
                            {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
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