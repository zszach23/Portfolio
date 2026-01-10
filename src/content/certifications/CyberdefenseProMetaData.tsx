// ============================================================================
// CyberdefenseProMetaData.tsx
//
// Cyberdefense Pro Certification metadata.
// ============================================================================

import type { CertificationMetaData } from "./CertificationMetaDataTypes";
import image from "../../assets/certifications/cyberdefense-pro-logo.jpg";

export const CyberdefenseProMetaData: CertificationMetaData = {
    title: "TestOut Cyberdefense Pro",
    date: "December 2024",
    pageLink: "https://www.comptia.org/en-us/certifications/cyber-defense-pro/",
    imageUrl: image,
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