// ============================================================================
// ExperienceContributionsSection.tsx
//
// Contributions component for experience pages
// ============================================================================

import type { Contributions } from "./ExperiencePageTypes";

export default function ExperienceContributionsSection({ contributions }: { contributions: Contributions}) {
    return (
        <section className="">
            <h2 className="">
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
                    <div key={index} className="">
                        {feature.media && (
                            <div className="">
                                {feature.media.type === "image" ? (
                                    <img src={feature.media.url} alt={feature.media.alt || ""} className="" />
                                ) : (
                                    <iframe src={feature.media.url} title={feature.media.caption} className="" />
                                )}
                            </div>
                        )}
                        <h3 className="">{feature.title}</h3>
                        <p className="">{feature.details}</p>
                        {feature.bulletPoints && feature.bulletPoints.length > 0 && (
                            <ul className="">
                                {feature.bulletPoints.map((point, bpIndex) => (
                                    <li key={bpIndex} className="">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}