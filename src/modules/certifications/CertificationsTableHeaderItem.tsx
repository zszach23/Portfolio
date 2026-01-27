// ============================================================================
// CertificationsTableHeaderItem.tsx
//
// Component defining the table header item for the Certifications page.
// ============================================================================

export default function CertificationsTableHeaderItem({ label, constraints }: { label: string, constraints?: string }) {
    return (
        <th className={`py-4 pr-4 text-md font-bold text-left text-gray-900 ${constraints}`}>
            {label}
        </th>
    );
}