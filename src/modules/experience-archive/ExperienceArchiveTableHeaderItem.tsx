// ============================================================================
// ExperienceArchiveTableHeaderItem.tsx
//
// Component defining the table header item for the Experience Archive page.
// ============================================================================

export default function ExperienceArchiveTableHeaderItem({ label, constraints }: { label: string, constraints?: string }) {
    return (
        <th className={`py-4 pr-4 text-md font-bold text-left text-gray-900 ${constraints}`}>
            {label}
        </th>
    );
}