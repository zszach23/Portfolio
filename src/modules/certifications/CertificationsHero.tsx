// ============================================================================
// CertificationsHero.tsx
//
// Hero Component for the Certifications Page.
// ============================================================================

import BackArrow from "../../common/components/visuals/BackArrow";

export default function CertificationsHero() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-5 sm:px-3 sm:py-6 lg:px-8">
            <div className="mb-16">
                <BackArrow label="Home" link="/" textColor="text-purple-700" hoverColor="hover:text-purple-900" />
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    All Certifications
                </h1>
                
            </div>
        </div>
    )
}