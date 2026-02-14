// ============================================================================
// KnightrodexPage.tsx
//
// Knightrodex Experience Page Component for the Application.
// ============================================================================

import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";
import { KnightrodexContent } from "../../content/experiences/projects/knightrodex/KnightrodexContent";
import { KnightrodexSummary } from "../../content/experiences/projects/knightrodex/KnightrodexSummary";

export default function KnightrodexPage() {
    return (
        <ExperiencePage experienceSummary={KnightrodexSummary} experienceContent={KnightrodexContent} />
    );
}