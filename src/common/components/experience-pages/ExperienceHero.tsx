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
            <img src={bannerImageUrl} alt={`Experience Banner`} className="" />
            <h1 className="">{experienceSummary.title}</h1>
            <h2 className="">{experienceSummary.company} || {experienceSummary.description}</h2>
            <h2 className="">{formatDateRange(experienceSummary.startDate, experienceSummary.endDate)}</h2>
        </div>
    )
}