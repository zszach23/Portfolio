// ============================================================================
// CardsAndCastlesPage.tsx
//
// Page component for the Cards and Castles Experience
// ============================================================================

import { CardsAndCastlesSummary } from "../../content/experiences/projects/cc/CardsAndCastlesSummary";
import { CardsAndCastlesContent } from "../../content/experiences/projects/cc/CardsAndCastlesContent";
import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";

export default function CardsAndCastlesPage() {
    return (
        <ExperiencePage experienceSummary={CardsAndCastlesSummary} experienceContent={CardsAndCastlesContent} />
    )
}