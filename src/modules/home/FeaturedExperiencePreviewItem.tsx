// ============================================================================
// FeaturedExperiencePreviewItem.tsx
//
// Featured Experience Preview Item Component for home page
// ============================================================================

import type { ExperienceMetaData } from "../../content/experiences/ExperienceSummaryTypes";

export default function FeaturedExperiencePreviewItem({ previewData }: { previewData: ExperienceMetaData }) {
    return (
        <div>
            <img src={previewData.imageUrl} alt={`${previewData.title} Image`} />
            <h3>{previewData.title}</h3>
            <h4>{previewData.description}</h4>
            <h4>{previewData.endDate}</h4>
            <button>Learn More</button>
        </div>
    )
}