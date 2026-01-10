// ============================================================================
// ExperienceArchiveTypes.ts
//
// Type definitions for the Experience Archive.
// ============================================================================

import type { Skill } from "../../common/types/Skill";
import type { Topic } from "../../common/types/Topic";

export interface ExperienceArchiveItem {
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    skills: Skill[];
    topics: Topic[];
    link: string;
}