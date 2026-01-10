// ============================================================================
// src/modules/archive/ArchiveExperiencePreviewItem.tsx
//
// Archive Experience Preview Item Component for archive page
// ============================================================================

import type { ExperiencePreview } from "../../content/experiences/ExperiencePreviewTypes";

export default function ArchiveExperiencePreviewItem({ previewData }: { previewData: ExperiencePreview }) {
    return (
        <div>
            <img src={previewData.imageUrl} alt="Preview Image" />
            <h3>{previewData.title}</h3>
            <h4>{previewData.description}</h4>
            <h4>{previewData.dateRange}</h4>
            <button>Learn More</button>
        </div>
    )
}