// ============================================================================
// ASquarePage.tsx
// 
// A-Square experience page component.
// ============================================================================

import ExperienceGatewayPage from "../../common/components/experience-pages/ExperienceGatewayPage";
import { ASquareSummary } from "../../content/experiences/work/a-square/ASquareSummary";
import { ASquareContent } from "../../content/experiences/work/a-square/ASquareContent";

export default function ASquarePage() {
    return (
        <ExperienceGatewayPage experienceSummary={ASquareSummary} experienceContent={ASquareContent} />
    )
}