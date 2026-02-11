// ============================================================================
// NASA23Summary.ts
//
// NASA-23 summary.
// ============================================================================

import type { ExperienceSummary } from "../../ExperienceSummaryTypes";

export const NASA23Summary: ExperienceSummary = {
    title: "Software Engineer Intern",
    description: "Wrote automated tests for a system monitor that tracks the status of firing room systems during launch operations.",
    startDate: "06-2023",
    endDate: "08-2023",
    pageLink: "/nasa-23",
    imageUrl: `${import.meta.env.BASE_URL}assets/images/work/nasa/nasa-logo.jpg`,
    company: "NASA - Kennedy Space Center",
    skills: [
        "Automated Testing Frameworks"
    ],
    topics: [
        "Software Engineering",
        "Documentation",
        "Quality Assurance"
    ]
};