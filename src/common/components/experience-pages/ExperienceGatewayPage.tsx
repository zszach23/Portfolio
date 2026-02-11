// ============================================================================
// ExperienceGatewayPage.tsx
//
// Page component that provides a gateway to multiple related experience pages.
// ============================================================================

import type { ExperienceSummary } from "../../../content/experiences/ExperienceSummaryTypes";
import SocialBar from "../SocialBar";
import ExperienceGatewayProjectsSection from "./ExperienceGatewayProjectsSection";
import ExperienceHero from "./ExperienceHero";
import ExperienceNavigation from "./ExperienceNavigation";
import ExperienceOverviewSection from "./ExperienceOverviewSection";
import type { ExperienceGatewayPageData } from "./ExperiencePageTypes";
import SidebarHero from "./SidebarHero";
import "./Experience.css"

export default function ExperienceGatewayPage({ experienceSummary, experienceContent }: { experienceSummary: ExperienceSummary, experienceContent: ExperienceGatewayPageData }) {
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
                <ExperienceGatewayProjectsSection relatedExperiences={experienceContent.relatedExperiences} />
            </div>
        </div>
    )
}