// ============================================================================
// ExperienceHero.tsx
//
// Hero component for experience pages
// ============================================================================

import type { ExperienceSummary } from "../../../content/experiences/ExperienceSummaryTypes";
import { formatDateRange } from "../../utils/DateUtils";
import Chevron from "../visuals/Chevron";

export default function ExperienceHero({ bannerImageUrl, experienceSummary }: { bannerImageUrl: string; experienceSummary: ExperienceSummary }) {
    return (
        <section className="mb-8">
            <img src={bannerImageUrl} alt={`Experience Banner`} className="pageBannerImage" />
            <div className="flex items-center gap-4 flex-wrap">
                <h1 className="pageTitle">{experienceSummary.title}</h1>
                {experienceSummary.externalLink && (
                    <a href={experienceSummary.externalLink} target="_blank" rel="noopener noreferrer" className="externalLinkButton">
                        <span className="inline-flex items-center gap-1 group">
                            {experienceSummary.externalLinkText || "View Project"} 
                            <Chevron color="text-white" hoverColor="text-purple-300" />
                        </span>
                    </a>
                )}
            </div>
            <h2 className="pageDescription">
                {experienceSummary.company || experienceSummary.description}
            </h2>
            <h2 className="pageDateRange">{formatDateRange(experienceSummary.startDate, experienceSummary.endDate)}</h2>
        </section>
    )
}