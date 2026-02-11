// ============================================================================
// ASquareContent.ts
//
// Content for the A Square Experience Page.
// ============================================================================

import type { ExperienceGatewayPageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";
import { PandorasPartyBoxSummary } from "../../projects/ppb/PandorasPartyBoxSummary";

export const ASquareContent: ExperienceGatewayPageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/work/a-square/a-square-banner.jpeg`,
    overview: {
        paragraphs: [
            "During my internship at A Square, I had the opportunity to work as a Unity Game Developer intern. I worked alongside a multi-disciplinary team of programmers, artists, and producers in an agile environment to advance the development of a game called Pandora's Party Box."
        ]
    },
    relatedExperiences: [
        PandorasPartyBoxSummary
    ]
}