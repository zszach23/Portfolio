// ============================================================================
// ExperienceGatewayProjectsSection.tsx
//
// Projects section for experience gateway pages
// ============================================================================

import type { ExperienceSummary } from "../../../content/experiences/ExperienceSummaryTypes";
import ExperienceCard from "../ExperienceCard";

export default function ExperienceGatewayProjectsSection({ relatedExperiences }: { relatedExperiences: ExperienceSummary[] }) {
    return (
        <section className="section">
            <h2 className="sectionTitle">Related Projects and Experiences</h2>
            <div className="flex flex-col gap-6">
                {relatedExperiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </div>
        </section>
    )
}