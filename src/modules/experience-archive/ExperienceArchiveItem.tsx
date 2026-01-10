// ============================================================================
// ExperienceArchiveItem.tsx
//
// Component defining an item/row in the Experience Archive page.
// ============================================================================

import type { ExperienceMetaData } from "../../content/experiences/ExperienceSummaryTypes";

export default function ExperienceArchiveItem({ data }: { data: ExperienceMetaData}) {
    return (
        <tr>
            <td>{data.endDate}</td>
            <td>{data.title}</td>
            <td>{data.company}</td>
            <td>{data.skills}</td>
            <td>{data.pageLink}</td>
        </tr>
    )
}