// ============================================================================
// HomePage.tsx
//
// Home page component for the application.
// ============================================================================

import SocialBar from "../../common/components/SocialBar";
import HomeFeaturedProfessionalExperiences from "./HomeFeaturedProfessionalExperiences";
import HomeHero from "./HomeHero";
import HomeNavigation from "./HomeNavigation";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <HomeHero />
                <HomeNavigation />
                <SocialBar />
                <HomeFeaturedProfessionalExperiences />
            </div>
            <div className="lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                
            </div>
        </div>
    );
}