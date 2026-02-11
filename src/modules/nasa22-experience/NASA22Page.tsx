// ============================================================================
// NASA22Page.tsx
//
// Page component for the NASA 22 Experience
// ============================================================================

import { NASA22Summary } from "../../content/experiences/work/nasa-22/NASA22Summary";
import { NASA22Content } from "../../content/experiences/work/nasa-22/NASA22Content";
import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";

export default function NASA22Page() {
    return (
        <ExperiencePage experienceSummary={NASA22Summary} experienceContent={NASA22Content} />
    )
}