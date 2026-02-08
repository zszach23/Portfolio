// ============================================================================
// ExperienceOverviewSection.tsx
//
// Overview component for experience pages
// ============================================================================

import type { Overview } from "./ExperiencePageTypes";
import "./Experience.css";

export default function ExperienceOverviewSection({ overview }: { overview: Overview}) {
    return (
        <section className="section">
            <h2 className="sectionTitle">
                Overview
            </h2>
            {overview.paragraphs.map((paragraph, index) => (
                <p key={index} className="my-2">
                    {paragraph}
                </p>
            ))}
            {overview.media && overview.media.length > 0 && (
                <div className="mx-2 my-4 flex gap-16 items-start justify-center flex-wrap">
                    {overview.media.map((mediaItem, index) => (
                        <div key={index} className=" bg-purple-700 w-full sm:w-80 lg:w-96">
                            <p className="px-2 py-2 text-center text-lg text-white font-bold">
                                {mediaItem.caption}
                            </p>
                            <div className="w-full h-48 sm:h-56 lg:h-64 bg-white flex items-center justify-center">
                                {mediaItem.type === 'image' ? (
                                    <img src={mediaItem.url} alt={mediaItem.alt || ''} className="w-full h-full object-cover" />
                                ) : (
                                    <iframe src={mediaItem.url} title={mediaItem.caption} className="w-full h-full aspect-video object-cover" />
                                )}
                            </div>
                            {mediaItem.subcaption && (
                                <p className="px-2 py-2 text-center text-white align-middle max-w-30">
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