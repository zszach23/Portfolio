// ============================================================================
// ExperienceArchiveItem.tsx
//
// Component defining an item/row in the Experience Archive page.
// ============================================================================

import { useNavigate, type NavigateFunction } from "react-router-dom";
import Chevron from "../../common/components/visuals/Chevron";
import SkillTag from "../../common/components/visuals/SkillTag";
import { extractYear } from "../../common/utils/DateUtils";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";

export default function ExperienceArchiveItem({ data }: { data: ExperienceSummary}) {

    const navigate: NavigateFunction = useNavigate();

    return (
        <tr className="group border-b border-gray-200 hover:bg-purple-50 transition-colors cursor-pointer shadow-sm hover:shadow-md" onClick={() => navigate(data.pageLink)}>
            <td className="py-5 pr-4 text-sm text-gray-600 align-top">
                {extractYear(data.endDate)}
            </td>
            <td className="py-5 pr-4 text-sm text-gray-600 align-top">
                {data.title}
            </td>
            <td className="py-5 pr-4 text-sm text-gray-600 align-top">
                {data.company || '-'}
            </td>
            <td className="py-5 pr-4 align-top hidden lg:table-cell">
                <ul className="flex flex-wrap gap-x-2 gap-y-1">
                    {data.skills.map((skill, index) => (
                        <li key={index}>
                            <SkillTag skill={skill} />
                        </li>
                    ))}
                </ul>
            </td>
            <td className="py-5 pl-4 align-top">
                <Chevron />
            </td>
        </tr>
    )
}