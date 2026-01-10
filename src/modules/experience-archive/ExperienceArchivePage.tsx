// ============================================================================
// ExperienceArchivePage.tsx
// 
// Experience Archive Page Component for the Application.
// ============================================================================

import { ArthurSummary } from "../../content/experiences/projects/arthur/ArthurSummary";
import { PandorasPartyBoxSummary } from "../../content/experiences/projects/ppb/PandorasPartyBoxSummary";
import { NASA22Summary } from "../../content/experiences/work/nasa-22/NASA22Summary";
import ExperienceArchiveTable from "./ExperienceArchiveTable";

export default function ExperienceArchivePage() {
    return (
        <div>
            <h1>Experience Archive</h1>
            <ExperienceArchiveTable experiences={[
                ArthurSummary, 
                PandorasPartyBoxSummary, 
                NASA22Summary]} />
        </div>
    );
}