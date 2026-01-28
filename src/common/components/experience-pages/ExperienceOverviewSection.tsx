// ============================================================================
// ExperienceOverviewSection.tsx
//
// Overview component for experience pages
// ============================================================================

import type { Overview } from "./ExperiencePageTypes";

export default function ExperienceOverviewSection({ overview }: { overview: Overview}) {
    return (
        <section className="">
            <h2 className="">
                Overview
            </h2>
            {overview.paragraphs.map((paragraph, index) => (
                <p key={index} className="">
                    {paragraph}
                </p>
            ))}
            {overview.media && overview.media.length > 0 && (
                <div className="">
                    {overview.media.map((mediaItem, index) => (
                        <div key={index} className="">
                            {mediaItem.caption}
                            {mediaItem.type === 'image' ? (
                                <img src={mediaItem.url} alt={mediaItem.alt || ''} className="" />
                            ) : (
                                <iframe src={mediaItem.url} title={mediaItem.caption} className="" />
                            )}
                            {mediaItem.subcaption && (
                                <p className="">
                                    {mediaItem.subcaption}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}