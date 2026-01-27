// ============================================================================
// HomeCertificationCard.tsx
//
// Certification Card component for the home page.
// ============================================================================

import { Link } from "react-router-dom";
import type { CertificationSummary } from "../../content/certifications/CertificationSummaryTypes";
import Chevron from "../../common/components/visuals/Chevron";
import SkillTag from "../../common/components/visuals/SkillTag";

export default function HomeCertificationCard({certification}: {certification: CertificationSummary}) {
    return (
        <Link to={certification.pageLink} target="_blank" rel="noopener noreferrer" className="group block mb-12 p-6 rounded-lg transition-all hover:bg-purple-50 hover:shadow-md">
            <div className="flex gap-4 items-center">
                <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden">
                    {certification.imageUrl && (
                        <img src={certification.imageUrl} alt={certification.title} className="w-full h-full object-cover"
                        />
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors inline-flex items-center">
                        {certification.title}
                        <span className="ml-1 transition-transform group-hover:translate-x-1 align-middle">
                            <Chevron />
                        </span>
                    </h3>
                    
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {certification.date}
                    </p>

                    <p className="mt-2 text-sm leading-normal text-gray-600">
                        {certification.description}
                    </p>
                    
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {certification.skills.map((skill, index) => (
                            <li key={index}>
                                <SkillTag skill={skill} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Link>
    )
}