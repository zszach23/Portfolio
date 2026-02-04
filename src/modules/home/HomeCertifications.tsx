// ============================================================================
// HomeCertifications.tsx
//
// Certifications component for the home page.
// ============================================================================

import ForwardArrowPage from "../../common/components/visuals/ForwardArrowPage";
import type { CertificationSummary } from "../../content/certifications/CertificationSummaryTypes";
import { CyberdefenseProSummary } from "../../content/certifications/CyberDefenseProSummary";
import { ModelSimSummary } from "../../content/certifications/ModelSimSummary";
import HomeCertificationCard from "./HomeCertificationCard";
import "./Home.css";

export default function HomeCertifications() {

    const certifications: CertificationSummary[] = [
        CyberdefenseProSummary,
        ModelSimSummary
    ]

    return (
        <section id="certifications" className="section">
            <div className="max-w-7xl mx-auto">
                <h2 className="sectionHeader">Certifications</h2>
                <div>
                    {certifications.map((certification) => (
                        <HomeCertificationCard
                            key={certification.pageLink}
                            certification={certification} 
                        />
                    ))}
                </div>
            </div>
            <div className="pl-7 mb-8">
                <ForwardArrowPage label="View All Certifications" link="/certifications" textColor="text-purple-700" hoverColor="hover:text-purple-900" />
            </div>
        </section>
    )
}