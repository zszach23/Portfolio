// ============================================================================
// NASA23Page.tsx
//
// Page component for the NASA 2023 Experience
// ============================================================================

import { NASA23Summary } from "../../content/experiences/work/nasa-23/NASA23Summary";
import { NASA23Content } from "../../content/experiences/work/nasa-23/NASA23Content";
import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";

export default function NASA23Page() {
    return (
        <ExperiencePage experienceSummary={NASA23Summary} experienceContent={NASA23Content} />
    )
}