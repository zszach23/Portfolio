// ============================================================================
// CertificationsPage.tsx
//
// Certification Page Component for the Application.
// ============================================================================

import type { CertificationSummary } from "../../content/certifications/CertificationSummaryTypes";
import { CyberdefenseProSummary } from "../../content/certifications/CyberDefenseProSummary";
import { ModelSimSummary } from "../../content/certifications/ModelSimSummary";
import CertificationsFooter from "./CertificationsFooter";
import CertificationsHero from "./CertificationsHero";
import CertificationsTable from "./CertificationsTable";

export default function CertificationsPage() {

    const certifications: CertificationSummary[] = [
        CyberdefenseProSummary,
        ModelSimSummary
    ]

    return (
        <div className=" px-6 py-12 min-h-screen bg-white">
            <CertificationsHero />
            <CertificationsTable certifications={certifications} />
            <CertificationsFooter displayedCertificationsCount={certifications.length} />
        </div>
    );
}