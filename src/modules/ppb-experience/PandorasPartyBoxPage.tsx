// ============================================================================
// PandorasPartyBoxPage.tsx
//
// Page component for the Pandora's Party Box Experience
// ============================================================================

import { PandorasPartyBoxSummary } from "../../content/experiences/projects/ppb/PandorasPartyBoxSummary";
import { PandorasPartyBoxContent } from "../../content/experiences/projects/ppb/PandorasPartyBoxContent";
import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";

export default function PandorasPartyBoxPage() {
    return (
        <ExperiencePage experienceSummary={PandorasPartyBoxSummary} experienceContent={PandorasPartyBoxContent} />
    )
}