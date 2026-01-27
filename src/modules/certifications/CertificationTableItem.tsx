// ============================================================================
// CertificationTableItem.tsx
//
// Component defining an item/row in the Certification Archive page.
// ============================================================================

import Chevron from "../../common/components/visuals/Chevron";
import SkillTag from "../../common/components/visuals/SkillTag";
import type { CertificationSummary } from "../../content/certifications/CertificationSummaryTypes";

export default function CertificationTableItem({ data }: { data: CertificationSummary}) {

    return (
        <tr className="group border-b border-gray-200 hover:bg-purple-50 transition-colors cursor-pointer shadow-sm hover:shadow-md" onClick={() => window.open(data.pageLink, '_blank')}>
            <td className="py-5 pr-4 text-sm text-gray-600 align-top">
                {data.title}
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