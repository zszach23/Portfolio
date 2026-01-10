// ============================================================================
// CertificationPreviewItem.tsx
//
// Certification Preview Item Component for home page
// ============================================================================

import type { CertificationMetaData } from "../../content/certifications/CertificationMetaDataTypes";

export default function CertificationPreviewItem({ previewData }: { previewData: CertificationMetaData }) {
    return (
        <div>
            <img src={previewData.imageUrl} alt={`${previewData.title} Image`} />
            <h3>{previewData.title}</h3>
            <p>{previewData.date}</p>
            <button>Learn More</button>
        </div>
    )
}