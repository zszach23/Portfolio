// ============================================================================
// ExperienceArchivePage.tsx
// 
// Experience Archive Page Component for the Application.
// ============================================================================

import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import { ArthurSummary } from "../../content/experiences/projects/arthur/ArthurSummary";
import { PandorasPartyBoxSummary } from "../../content/experiences/projects/ppb/PandorasPartyBoxSummary";
import { StreamlineARSummary } from "../../content/experiences/projects/streamline-ar/StreamlineARSummary";
import { VitalsSimSummary } from "../../content/experiences/projects/vitals-sim/VitalsSimSummary";
import { ASquareSummary } from "../../content/experiences/work/a-square/ASquareSummary";
import { NASA22Summary } from "../../content/experiences/work/nasa-22/NASA22Summary";
import { NASA23Summary } from "../../content/experiences/work/nasa-23/NASA23Summary";
import { T4TSummary } from "../../content/experiences/work/t4t/T4TSummary";
import { LearningAssistantSummary } from "../../content/experiences/work/ucf-la/LearningAssistantMetaData";
import ExperienceArchiveFooter from "./ExperienceArchiveFooter";
import ExperienceArchiveHero from "./ExperienceArchiveHero";
import ExperienceArchiveTable from "./ExperienceArchiveTable";

export default function ExperienceArchivePage() {

    const experiences: ExperienceSummary[] = [
        ArthurSummary,
        VitalsSimSummary,
        NASA22Summary,
        NASA23Summary,
        PandorasPartyBoxSummary,
        LearningAssistantSummary,
        StreamlineARSummary
    ]

    return (
        <div className=" px-6 py-12 min-h-screen bg-white">
            <ExperienceArchiveHero />
            <ExperienceArchiveTable experiences={experiences}/>
            <ExperienceArchiveFooter displayedExperiencesCount={experiences.length} />
        </div>
    );
}