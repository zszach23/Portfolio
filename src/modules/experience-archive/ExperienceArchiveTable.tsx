// ============================================================================
// ExperienceArchiveTable.tsx
//
// Component defining the table structure for the Experience Archive page.
// ============================================================================

import { sortByYearDescending } from "../../common/utils/ExperienceUtils";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";
import ExperienceArchiveItem from "./ExperienceArchiveItem";
import ExperienceArchiveTableHeaderItem from "./ExperienceArchiveTableHeaderItem";

export default function ExperienceArchiveTable({ experiences }: { experiences: ExperienceSummary[]}) {

    const sortedExperiences: ExperienceSummary[] = sortByYearDescending(experiences);

    return (
        <div>
            <table className="w-full border-collapse">
                <thead className="sticky top-0 z-10 border-b border-gray-500 bg-white-100/50 backdrop-blur">
                    <tr>
                        <ExperienceArchiveTableHeaderItem label="Year" />
                        <ExperienceArchiveTableHeaderItem label="Title" />
                        <ExperienceArchiveTableHeaderItem label="Company" />
                        <ExperienceArchiveTableHeaderItem label="Skills" constraints="hidden lg:table-cell"/>
                        <ExperienceArchiveTableHeaderItem label="" />
                    </tr>
                </thead>
                <tbody>
                    {sortedExperiences.map((experience) => (
                        <ExperienceArchiveItem key={experience.pageLink} data={experience} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}