// ============================================================================
// ExperienceArchivePage.tsx
// 
// Experience Archive Page Component for the Application.
// ============================================================================

import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import { CardsAndCastlesSummary } from "../../content/experiences/projects/cc/CardsAndCastlesSummary";
import { NASA22Summary } from "../../content/experiences/work/nasa-22/NASA22Summary";
import { NASA23Summary } from "../../content/experiences/work/nasa-23/NASA23Summary";
import ExperienceArchiveFooter from "./ExperienceArchiveFooter";
import ExperienceArchiveHero from "./ExperienceArchiveHero";
import ExperienceArchiveTable from "./ExperienceArchiveTable";

export default function ExperienceArchivePage() {

    const experiences: ExperienceSummary[] = [
        NASA23Summary,
        NASA22Summary,
        CardsAndCastlesSummary
    ]

    return (
        <div className=" px-6 py-12 min-h-screen bg-white">
            <ExperienceArchiveHero />
            <ExperienceArchiveTable experiences={experiences}/>
            <ExperienceArchiveFooter displayedExperiencesCount={experiences.length} />
        </div>
    );
}