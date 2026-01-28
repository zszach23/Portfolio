// ============================================================================
// NASA22Page.tsx
//
// Page component for the NASA 22 Experience
// ============================================================================

import ExperienceHero from "../../common/components/experience-pages/ExperienceHero";
import { NASA22Summary } from "../../content/experiences/work/nasa-22/NASA22Summary";
import { NASA22Content } from "../../content/experiences/work/nasa-22/NASA22Content";
import ExperienceOverviewSection from "../../common/components/experience-pages/ExperienceOverviewSection";
import ExperienceContributionsSection from "../../common/components/experience-pages/ExperienceContributionsSection";
import ExperienceChallengesSection from "../../common/components/experience-pages/ExperienceChallengesSection";

export default function NASA22Page() {
    return (
        <div className="">
            <ExperienceHero bannerImageUrl={NASA22Content.bannerImageUrl} experienceSummary={NASA22Summary} />
            <ExperienceOverviewSection overview={NASA22Content.overview} />
            <ExperienceContributionsSection contributions={NASA22Content.contributions} />
            <ExperienceChallengesSection challenges={NASA22Content.challenges} />
        </div>
    )
}