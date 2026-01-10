// ============================================================================
// src/modules/home/CertificationPreviewItem.tsx
//
// Certification Preview Item Component for home page
// ============================================================================

import type { CertificationPreview } from "../../content/certifications/CertificationPreviewTypes";

export default function CertificationPreviewItem({ previewData }: { previewData: CertificationPreview }) {
    return (
        <div>
            <img src={previewData.imageUrl} alt="Preview Image" />
            <h3>{previewData.title}</h3>
            <p>{previewData.date}</p>
            <button>Learn More</button>
        </div>
    )
}