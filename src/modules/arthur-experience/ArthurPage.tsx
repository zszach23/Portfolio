// ============================================================================
// ArthurPage.tsx
//
// Arthur experience page component for the application.
// ============================================================================

import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";
import { ArthurSummary } from "../../content/experiences/projects/arthur/ArthurSummary";
import { ArthurContent } from "../../content/experiences/projects/arthur/ArthurContent";

export default function ArthurPage() {
    return (
        <ExperiencePage experienceSummary={ArthurSummary} experienceContent={ArthurContent} />
    )
}