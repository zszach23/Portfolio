// ============================================================================
// ExperienceNavigation.tsx
//
// Navigation component for experience pages.
// ============================================================================

import NavigationItem from "../NavigationItem";

export default function ExperienceNavigation() {
        return (
            <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                <ul className="w-max">
                    <NavigationItem label="Home" href="/" />
                    <NavigationItem label="Experience Archive" href="/archive" />
                </ul>
            </nav>
        );
}