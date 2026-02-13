// ============================================================================
// LearningAssistantPage.tsx
// 
// Learning Assistant Page Component for the Application.
// ============================================================================

import { LearningAssistantSummary } from "../../content/experiences/work/ucf-la/LearningAssistantSummary";
import { LearningAssistantContent } from "../../content/experiences/work/ucf-la/LearningAssistantContent";
import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";

export default function LearningAssistantPage() {
    return (
        <ExperiencePage experienceSummary={LearningAssistantSummary} experienceContent={LearningAssistantContent} />
    )
}