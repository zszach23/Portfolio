// ============================================================================
// NASA22Summary.ts
//
// NASA-22 summary.
// ============================================================================

import type { ExperienceSummary } from "../../ExperienceSummaryTypes";

export const NASA22Summary: ExperienceSummary = {
    title: "Software Engineer Intern",
    description: "Produced documentation for a packet analyzer used to facilitate communication between the Launch Control System and the Space Launch System.",
    startDate: "06-2022",
    endDate: "08-2022",
    pageLink: "/nasa-22",
    imageUrl: `${import.meta.env.BASE_URL}assets/images/work/nasa/nasa-logo.jpg`,
    company: "NASA - Kennedy Space Center",
    skills: [
        "Network Monitoring Tools",
        "Documentation"
    ],
    topics: [
        "Software Engineering",
        "Documentation",
        "Quality Assurance"
    ]
};