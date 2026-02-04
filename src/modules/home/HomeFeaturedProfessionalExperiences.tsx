// ============================================================================
// HomeFeaturedProfessionalExperiences.tsx
//
// Featured Professional Experiences component for the home page.
// ============================================================================

import HomeFeaturedExperienceCard from "./HomeFeaturedExperienceCard";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import { T4TSummary } from "../../content/experiences/work/t4t/T4TSummary";
import { LearningAssistantSummary } from "../../content/experiences/work/ucf-la/LearningAssistantSummary";
import { ASquareSummary } from "../../content/experiences/work/a-square/ASquareSummary";
import { NASA23Summary } from "../../content/experiences/work/nasa-23/NASA23Summary";
import { NASA22Summary } from "../../content/experiences/work/nasa-22/NASA22Summary";
import { sortByYearDescending } from "../../common/utils/ExperienceUtils";
import ForwardArrowDocument from "../../common/components/visuals/ForwardArrowDocument";
import "./Home.css";

export default function HomeFeaturedProfessionalExperiences() {
    const featuredExperiences: ExperienceSummary[] = [
        T4TSummary,
        LearningAssistantSummary,
        ASquareSummary,
        NASA23Summary,
        NASA22Summary];

    const sortedExperiences = sortByYearDescending(featuredExperiences);

    return (
        <section id="professional-experiences" className="section">
            <h2 className="sectionHeader">Professional Experiences</h2>
            <div>
                {sortedExperiences.map((experience) => (
                    <HomeFeaturedExperienceCard
                        key={experience.pageLink}
                        experience={experience} 
                    />
                ))}
            </div>
            <div className="pl-7 mb-8">
                <ForwardArrowDocument label="View Resume" link={`${import.meta.env.BASE_URL}assets/Zachary_Sally_Resume.pdf`} textColor="text-purple-700" hoverColor="hover:text-purple-900" />
            </div>
        </section>
    )
}