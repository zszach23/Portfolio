// ============================================================================
// ExperienceUtils.ts
//
// Utility functions for experience data manipulation and formatting.
// ============================================================================

import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import { compareDatesDesc } from "./DateUtils";

export function sortByYearDescending(experiences: ExperienceSummary[]): ExperienceSummary[] {
    const sortedExperiences: ExperienceSummary[] = [...experiences].sort((a, b) => {
        if (a.endDate !== b.endDate) {
            return compareDatesDesc(a.endDate, b.endDate);
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return sortedExperiences;
}