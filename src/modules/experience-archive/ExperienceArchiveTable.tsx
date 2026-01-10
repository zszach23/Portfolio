// ============================================================================
// ExperienceArchiveTable.tsx
//
// Component defining the table structure for the Experience Archive page.
// ============================================================================

import type { ExperienceMetaData } from "../../content/experiences/ExperienceSummaryTypes";
import ExperienceArchiveItem from "./ExperienceArchiveItem";

export default function ExperienceArchiveTable({ experiences }: { experiences: ExperienceMetaData[]}) {

    const sortedExperiences: ExperienceMetaData[] = sortByYearDescending(experiences);

    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Skills</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {sortedExperiences.map((experience) => (
                    <ExperienceArchiveItem key={experience.title} data={experience} />
                ))}
            </tbody>    
        </table>
    )
}

function sortByYearDescending(experiences: ExperienceMetaData[]): ExperienceMetaData[] {
    const sortedExperiences: ExperienceMetaData[] = [...experiences].sort((a, b) => {
        if (a.endDate !== b.endDate) {
            return b.endDate.localeCompare(a.endDate);
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return sortedExperiences;
}