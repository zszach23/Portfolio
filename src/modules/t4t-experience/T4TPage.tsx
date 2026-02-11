// ============================================================================
// T4TPage.tsx
// 
// Tap 4 Technologies Experience Page Component for the Application.
// ============================================================================

import ExperienceGatewayPage from "../../common/components/experience-pages/ExperienceGatewayPage";
import { T4TContent } from "../../content/experiences/work/t4t/T4TContent";
import { T4TSummary } from "../../content/experiences/work/t4t/T4TSummary";

export default function T4TPage() {
    return (
        <ExperienceGatewayPage experienceSummary={T4TSummary} experienceContent={T4TContent} />
    )
}