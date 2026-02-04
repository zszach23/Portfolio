// ============================================================================
// ExperienceHero.tsx
//
// Hero component for experience pages
// ============================================================================

import type { ExperienceSummary } from "../../../content/experiences/ExperienceSummaryTypes";
import { formatDateRange } from "../../utils/DateUtils";

export default function ExperienceHero({ bannerImageUrl, experienceSummary }: { bannerImageUrl: string; experienceSummary: ExperienceSummary }) {
    return (
        <div className="">
            <img src={bannerImageUrl} alt={`Experience Banner`} className="pageBannerImage" />
            <h1 className="pageTitle">{experienceSummary.title}</h1>
            <h2 className="pageDescription">
                {experienceSummary.description}
            </h2>
            <h2 className="pageDateRange">{formatDateRange(experienceSummary.startDate, experienceSummary.endDate)}</h2>
        </div>
    )
}