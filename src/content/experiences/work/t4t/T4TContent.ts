// ============================================================================
// T4TContent.ts
//
// Content for the Tap 4 Technologies experience page.
// ============================================================================

import type { ExperienceGatewayPageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";
import { ArthurSummary } from "../../projects/arthur/ArthurSummary";
import { StreamlineARSummary } from "../../projects/streamline-ar/StreamlineARSummary";

export const T4TContent: ExperienceGatewayPageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/work/t4t/t4t-banner.png`,
    overview: {
        paragraphs: [
            "At Tap 4 Technologies, I had the opportunity to lead the development of multiple XR applications and backend services, including Arthur and StreamlineAR."
        ]
    },
    relatedExperiences: [
        StreamlineARSummary,
        ArthurSummary
    ]
}