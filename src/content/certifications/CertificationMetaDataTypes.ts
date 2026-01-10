// ============================================================================
// CertificationMetaDataTypes.ts
//
// Type definitions for certification metadata.
// ============================================================================

import type { Skill } from "../../common/types/Skill";
import type { Topic } from "../../common/types/Topic";

export interface CertificationMetaData {
    title: string;
    date: string;
    pageLink: string;
    imageUrl: string;
    skills: Skill[];
    topics: Topic[];
}