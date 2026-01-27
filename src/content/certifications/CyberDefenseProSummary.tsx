// ============================================================================
// CyberDefenseProSummary.tsx
//
// Cyberdefense Pro Certification summary.
// ============================================================================

import type { CertificationSummary } from "./CertificationSummaryTypes";

export const CyberdefenseProSummary: CertificationSummary = {
    title: "TestOut Cyberdefense Pro",
    date: "December 2024",
    description: "Validates skills in network monitoring, threat detection, and incident response using industry-standard tools on Windows and Linux platforms.",
    pageLink: "https://www.comptia.org/en-us/certifications/cyber-defense-pro/",
    imageUrl: `${import.meta.env.BASE_URL}assets/images/certifications/cyberdefense-pro-logo.jpg`,
    skills: [
        "Network Monitoring Tools",
        "Windows",
        "Linux"
    ],
    topics: [
        "Cybersecurity",
        "Networking"
    ]
};