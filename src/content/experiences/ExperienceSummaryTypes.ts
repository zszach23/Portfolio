// ============================================================================
// ExperienceSummaryTypes.ts
//
// Type definitions for experience summary.
// ============================================================================

import type { Skill } from "../../common/types/Skill";
import type { Topic } from "../../common/types/Topic";

export interface ExperienceSummary {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    pageLink: string;
    imageUrl: string;
    company?: string;
    skills: Skill[];
    topics: Topic[];
}