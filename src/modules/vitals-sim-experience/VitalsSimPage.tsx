// ============================================================================
// VitalsSimPage.tsx
// 
// Vitals Simulation Page Component for the Application.
// ============================================================================

import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";
import { VitalsSimContent } from "../../content/experiences/projects/vitals-sim/VitalsSimContent";
import { VitalsSimSummary } from "../../content/experiences/projects/vitals-sim/VitalsSimSummary";

export default function VitalsSimPage() {
    return (
        <ExperiencePage experienceSummary={VitalsSimSummary} experienceContent={VitalsSimContent} />
    )
}