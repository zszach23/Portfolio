// ============================================================================
// HomePage.tsx
//
// Home page component for the application.
// ============================================================================

import SocialBar from "../../common/components/SocialBar";
import HomeAbout from "./HomeAbout";
import HomeCertifications from "./HomeCertifications";
import HomeFeaturedProfessionalExperiences from "./HomeFeaturedProfessionalExperiences";
import HomeFeaturedProjects from "./HomeFeaturedProjects";
import HomeHero from "./HomeHero";
import HomeNavigation from "./HomeNavigation";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white lg:flex">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 mx-5">
                <HomeHero />
                <HomeNavigation />
                <SocialBar />
            </div>
            <div className="lg:w-1/2 lg:flex-col lg:justify-between lg:py-16 mx-5">
                <HomeAbout />
                <HomeFeaturedProfessionalExperiences />
                <HomeFeaturedProjects />
                <HomeCertifications />
            </div>
        </div>
    );
}