// ============================================================================
// HomeNavigation.tsx
//
// Navigation component for the home page.
// ============================================================================

import HomeNavigationItem from "./HomeNavigationItem";

export default function HomeNavigation() {

    return (
        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
            <ul className="w-max">
                <HomeNavigationItem href="#about" label="About" />
                <HomeNavigationItem href="#professional-experiences" label="Professional Experiences" />
                <HomeNavigationItem href="#projects" label="Projects" />
                <HomeNavigationItem href="#certifications" label="Certifications" />
            </ul>
        </nav>
    );
}