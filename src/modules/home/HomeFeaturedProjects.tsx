// ============================================================================
// HomeFeaturedProjects.tsx
//
// Featured Projects component for the home page.
// ============================================================================

import ForwardArrowPage from "../../common/components/visuals/ForwardArrowPage";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import { ArthurSummary } from "../../content/experiences/projects/arthur/ArthurSummary";
import { StreamlineARSummary } from "../../content/experiences/projects/streamline-ar/StreamlineARSummary";
import { VitalsSimSummary } from "../../content/experiences/projects/vitals-sim/VitalsSimSummary";
import ExperienceCard from "../../common/components/ExperienceCard";
import "./Home.css";

export default function HomeFeaturedProjects() {

    const featuredProjects: ExperienceSummary[] = [
        VitalsSimSummary,
        StreamlineARSummary,
        ArthurSummary
    ]

    return (
        <section id="projects" className="section">
            <h2 className="sectionHeader">Featured Projects</h2>
            <div>
                {featuredProjects.map((project) => (
                    <ExperienceCard 
                        key={project.pageLink}
                        experience={project} />
                ))}
            </div>
            <div className="pl-7 mb-8">
                <ForwardArrowPage label="View Experience Archive" link="/archive" textColor="text-purple-700" hoverColor="hover:text-purple-900" />
            </div>
        </section>
    );
}