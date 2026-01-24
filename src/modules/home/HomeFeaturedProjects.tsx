// ============================================================================
// HomeFeaturedProjects.tsx
//
// Featured Projects component for the home page.
// ============================================================================

import ForwardArrow from "../../common/components/visuals/ForwardArrow";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import { ArthurSummary } from "../../content/experiences/projects/arthur/ArthurSummary";
import { StreamlineARSummary } from "../../content/experiences/projects/streamline-ar/StreamlineARSummary";
import { VitalsSimSummary } from "../../content/experiences/projects/vitals-sim/VitalsSimSummary";
import HomeFeaturedExperienceCard from "./HomeFeaturedExperienceCard";



export default function HomeFeaturedProjects() {

    const featuredProjects: ExperienceSummary[] = [
        VitalsSimSummary,
        StreamlineARSummary,
        ArthurSummary
    ]

    return (
        <section id="projects">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Projects</h2>
            <div>
                {featuredProjects.map((project) => (
                    <HomeFeaturedExperienceCard 
                        key={project.pageLink}
                        experience={project} />
                ))}
            </div>
            <div className="pl-7 mb-8">
                <ForwardArrow label="View Experience Archive" link="/archive" textColor="text-purple-700" hoverColor="hover:text-purple-900" />
            </div>
        </section>
    );
}