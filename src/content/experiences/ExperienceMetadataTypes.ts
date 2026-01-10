// ============================================================================
// ExperienceMetadataTypes.ts
//
// Type definitions for experience metadata.
// ============================================================================

import type { Skill } from "../../common/types/Skill";
import type { Topic } from "../../common/types/Topic";

export interface ExperienceMetaData {
    title: string;
    description: string;
    dateRange: string;
    pageLink: string;
    imageUrl: string;
    company?: string;
    skills: Skill[];
    topics: Topic[];
}