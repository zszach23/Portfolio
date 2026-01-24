// ============================================================================
// CertificationSummaryTypes.ts
//
// Type definitions for certification summary content.
// ============================================================================

import type { Skill } from "../../common/types/Skill";
import type { Topic } from "../../common/types/Topic";

export interface CertificationSummary {
    title: string;
    date: string;
    pageLink: string;
    imageUrl: string;
    skills: Skill[];
    topics: Topic[];
}