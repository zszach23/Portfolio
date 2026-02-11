// ============================================================================
// SciFiWarehouseVRPage.tsx
//
// Sci-Fi Warehouse VR Experience Page Component for the Application.
// ============================================================================

import ExperiencePage from "../../common/components/experience-pages/ExperiencePage";
import { SciFiWarehouseVRContent } from "../../content/experiences/projects/sci-fi-warehouse-vr/SciFiWarehouseVRContent";
import { SciFiWarehouseVRSummary } from "../../content/experiences/projects/sci-fi-warehouse-vr/SciFiWarehouseVRSummary";

export default function SciFiWarehouseVRPage() {
    return (
        <ExperiencePage experienceSummary={SciFiWarehouseVRSummary} experienceContent={SciFiWarehouseVRContent} />
    )
}