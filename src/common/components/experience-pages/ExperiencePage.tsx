// ============================================================================
// ExperiencePage.tsx
//
// Main experience page component that composes all sections together
// ============================================================================

import type { ExperienceSummary } from "../../../content/experiences/ExperienceSummaryTypes";
import SocialBar from "../SocialBar";
import ExperienceChallengesSection from "./ExperienceChallengesSection";
import ExperienceContributionsSection from "./ExperienceContributionsSection";
import ExperienceHero from "./ExperienceHero";
import ExperienceNavigation from "./ExperienceNavigation";
import ExperienceOverviewSection from "./ExperienceOverviewSection";
import type { ExperiencePageData } from "./ExperiencePageTypes";
import SidebarHero from "./SidebarHero";

export default function ExperiencePage({ experienceSummary, experienceContent }: { experienceSummary: ExperienceSummary, experienceContent: ExperiencePageData }) {
    return (
        <div className="min-h-screen bg-white lg:flex">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/6 lg:flex-col lg:justify-between lg:py-24 mx-5">
                <SidebarHero />
                <ExperienceNavigation />
                <SocialBar />
            </div>
            <div className="lg:w-5/6 lg:flex-col lg:justify-between lg:py-16 mx-5">
                <ExperienceHero bannerImageUrl={experienceContent.bannerImageUrl} experienceSummary={experienceSummary} />
                <ExperienceOverviewSection overview={experienceContent.overview} />
                <ExperienceContributionsSection contributions={experienceContent.contributions} />
                <ExperienceChallengesSection challenges={experienceContent.challenges} />
            </div>
        </div>
    )
}