// ============================================================================
// CardsAndCastlesSummary.ts
//
// Summary data for the Cards and Castles project experience page.
// ============================================================================

import type { ExperienceSummary } from "../../ExperienceSummaryTypes";

export const CardsAndCastlesSummary: ExperienceSummary = {
    title: "Cards and Castles",
    description: "Award-winning Unity VR Project",
    startDate: "1-2023",
    endDate: "5-2023",
    pageLink: "/cards-and-castles",
    imageUrl: `${import.meta.env.BASE_URL}images/experiences/projects/cc/cc-logo.png`,
    skills: [
        "Unity",
        "C#",
        "Project Management",
        "Agile"
    ],
    topics: [
        "AR/VR",
        "Game Development",
        "Model & Simulation"
    ]
};