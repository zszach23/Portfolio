// ============================================================================
// CardsAndCastlesPage.tsx
//
// Page component for the Cards and Castles Experience
// ============================================================================

import ExperienceHero from "../../common/components/experience-pages/ExperienceHero";
import { CardsAndCastlesSummary } from "../../content/experiences/projects/cc/CardsAndCastlesSummary";
import { CardsAndCastlesContent } from "../../content/experiences/projects/cc/CardsAndCastlesContent";
import ExperienceOverviewSection from "../../common/components/experience-pages/ExperienceOverviewSection";
import ExperienceContributionsSection from "../../common/components/experience-pages/ExperienceContributionsSection";
import ExperienceChallengesSection from "../../common/components/experience-pages/ExperienceChallengesSection";

export default function CardsAndCastlesPage() {
    return (
        <div className="">
            <ExperienceHero bannerImageUrl={CardsAndCastlesContent.bannerImageUrl} experienceSummary={CardsAndCastlesSummary} />
            <ExperienceOverviewSection overview={CardsAndCastlesContent.overview} />
            <ExperienceContributionsSection contributions={CardsAndCastlesContent.contributions} />
            <ExperienceChallengesSection challenges={CardsAndCastlesContent.challenges} />
        </div>
    )
}