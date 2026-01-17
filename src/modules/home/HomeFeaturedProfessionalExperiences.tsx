// ============================================================================
// HomeFeaturedProfessionalExperiences.tsx
//
// Featured Professional Experiences component for the home page.
// ============================================================================

import HomeFeaturedExperienceCard from "./HomeFeaturedExperienceCard";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import { T4TSummary } from "../../content/experiences/work/t4t/T4TSummary";
import { LearningAssistantSummary } from "../../content/experiences/work/ucf-la/LearningAssistantMetaData";
import { ASquareSummary } from "../../content/experiences/work/a-square/ASquareSummary";
import { NASA23Summary } from "../../content/experiences/work/nasa-23/NASA23Summary";
import { NASA22Summary } from "../../content/experiences/work/nasa-22/NASA22Summary";
import { sortByYearDescending } from "../../common/utils/ExperienceUtils";

export default function HomeFeaturedProfessionalExperiences() {
    const featuredExperiences: ExperienceSummary[] = [
        T4TSummary,
        LearningAssistantSummary,
        ASquareSummary,
        NASA23Summary,
        NASA22Summary];

    const sortedExperiences = sortByYearDescending(featuredExperiences);

    return (
        <section id="professional-experiences">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Professional Experiences</h2>
            <div>
                {sortedExperiences.map((experience) => (
                    <HomeFeaturedExperienceCard
                        key={experience.pageLink}
                        experience={experience} 
                    />
                ))}
            </div>
        </section>
    )
}