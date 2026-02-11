// ============================================================================
// SciFiWarehouseVRSummary.ts
//
// Summary component for the Sci-Fi Warehouse VR project experience page.
// ============================================================================

import type { ExperienceSummary } from "../../ExperienceSummaryTypes";

export const SciFiWarehouseVRSummary: ExperienceSummary = {
    title: "Sci-Fi Warehouse VR",
    description: "VR Class Project",
    startDate: "01-2024",
    endDate: "05-2024",
    pageLink: "/sci-fi-warehouse-vr",
    imageUrl: `${import.meta.env.BASE_URL}assets/images/projects/sci-fi-warehouse-vr/sci-fi-warehouse-vr-logo.png`,
    externalLink: "https://dev.azure.com/Zach-Sally/_git/VR-Engineering",
    externalLinkText: "View Repository",
    skills: [
        "Unity",
        "C#",
        "Project Management",
        "Microsoft Azure"
    ],
    topics: [
        "AR/VR",
        "Game Development",
        "Model & Simulation",
        "Project Management"
    ]
}