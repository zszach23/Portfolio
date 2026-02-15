// ============================================================================
// ExperienceArchivePage.tsx
// 
// Experience Archive Page Component for the Application.
// ============================================================================

import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import { ArthurSummary } from "../../content/experiences/projects/arthur/ArthurSummary";
import { CardsAndCastlesSummary } from "../../content/experiences/projects/cc/CardsAndCastlesSummary";
import { KnightrodexSummary } from "../../content/experiences/projects/knightrodex/KnightrodexSummary";
import { PandorasPartyBoxSummary } from "../../content/experiences/projects/ppb/PandorasPartyBoxSummary";
import { SciFiWarehouseVRSummary } from "../../content/experiences/projects/sci-fi-warehouse-vr/SciFiWarehouseVRSummary";
import { StreamlineARSummary } from "../../content/experiences/projects/streamline-ar/StreamlineARSummary";
import { VitalsSimSummary } from "../../content/experiences/projects/vitals-sim/VitalsSimSummary";
import { NASA22Summary } from "../../content/experiences/work/nasa-22/NASA22Summary";
import { NASA23Summary } from "../../content/experiences/work/nasa-23/NASA23Summary";
import { LearningAssistantSummary } from "../../content/experiences/work/ucf-la/LearningAssistantSummary";
import ExperienceArchiveFooter from "./ExperienceArchiveFooter";
import ExperienceArchiveHero from "./ExperienceArchiveHero";
import ExperienceArchiveTable from "./ExperienceArchiveTable";

export default function ExperienceArchivePage() {

    const experiences: ExperienceSummary[] = [
        LearningAssistantSummary,
        NASA23Summary,
        NASA22Summary,
        StreamlineARSummary,
        VitalsSimSummary,
        ArthurSummary,
        SciFiWarehouseVRSummary,
        KnightrodexSummary,
        PandorasPartyBoxSummary,
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