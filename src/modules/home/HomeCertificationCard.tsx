// ============================================================================
// HomeCertificationCard.tsx
//
// Certification Card component for the home page.
// ============================================================================

import { Link } from "react-router-dom";
import type { CertificationSummary } from "../../content/certifications/CertificationSummaryTypes";

export default function HomeCertificationCard({certification}: {certification: CertificationSummary}) {
    return (
        <Link to={certification.pageLink} className="group block mb-12 p-6 rounded-lg transition-all hover:bg-purple-50 hover:shadow-md">
            
        </Link>
    )
}