// ============================================================================
// ArchiveExperiencePreviewItem.tsx
//
// Archive Experience Preview Item Component for archive page
// ============================================================================

import type { ExperienceMetaData } from "../../content/experiences/ExperienceMetadataTypes";

export default function ArchiveExperiencePreviewItem({ previewData }: { previewData: ExperienceMetaData }) {
    return (
        <div>
            <img src={previewData.imageUrl} alt={`${previewData.title} Image`} />
            <h3>{previewData.title}</h3>
            <h4>{previewData.description}</h4>
            <h4>{previewData.dateRange}</h4>
            <button>Learn More</button>
        </div>
    )
}