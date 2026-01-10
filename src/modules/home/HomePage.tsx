// ============================================================================
// HomePage.tsx
//
// Home page component for the application.
// ============================================================================

import SocialBar from "../../common/components/SocialBar";
import MainLayout from "../../common/layout/MainLayout";
import HomeHero from "./HomeHero";

export default function HomePage() {
    return (
        <MainLayout>
            <HomeHero />
            <SocialBar />
        </MainLayout>
    );
}