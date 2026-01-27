// ============================================================================
// CertificationsTable.tsx
//
// Component defining the table structure for the Certifications page.
// ============================================================================

import type { CertificationSummary } from "../../content/certifications/CertificationSummaryTypes";
import CertificationsTableHeaderItem from "./CertificationsTableHeaderItem";
import CertificationTableItem from "./CertificationTableItem";

export default function CertificationsTable({ certifications }: { certifications: CertificationSummary[]}) {

    return (
        <div>
            <table className="w-full border-collapse">
                <thead className="sticky top-0 z-10 border-b border-gray-500 bg-white-100/50 backdrop-blur">
                    <tr>
                        <CertificationsTableHeaderItem label="Title" />
                        <CertificationsTableHeaderItem label="Skills" constraints="hidden lg:table-cell"/>
                        <CertificationsTableHeaderItem label="" />
                    </tr>
                </thead>
                <tbody>
                    {certifications.map((certification) => (
                        <CertificationTableItem key={certification.pageLink} data={certification} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}