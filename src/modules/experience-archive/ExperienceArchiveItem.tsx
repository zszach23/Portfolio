// ============================================================================
// ExperienceArchiveItem.tsx
//
// Component defining an item/row in the Experience Archive page.
// ============================================================================

import { extractYear } from "../../common/utils/DateUtils";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";

export default function ExperienceArchiveItem({ data }: { data: ExperienceSummary}) {
    return (
        <tr className="group border-b border-gray-200 hover:bg-purple-50 transition-colors cursor-pointer shadow-sm hover:shadow-md" onClick={() => window.location.href = data.pageLink}>
            <td className="py-5 pr-4 text-sm text-gray-600 align-top">
                {extractYear(data.endDate)}
            </td>
            <td className="py-5 pr-4 text-sm text-gray-600 align-top">
                {data.title}
            </td>
            <td className="py-5 pr-4 text-sm text-gray-600 align-top hidden md:table-cell">
                {data.company || '-'}
            </td>
            <td className="py-5 pr-4 align-top hidden lg:table-cell">
                <ul className="flex flex-wrap gap-x-2 gap-y-1">
                    {data.skills.map((skill, index) => (
                        <li key={index}>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                {skill}
                            </span>
                        </li>
                    ))}
                </ul>
            </td>
            <td className="py-5 pl-4 align-top">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </td>
        </tr>
    )
}