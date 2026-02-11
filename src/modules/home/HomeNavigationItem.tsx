// ============================================================================
// HomeNavigationItem.tsx
//
// Navigation item component for the home page.
// ============================================================================

import type React from "react";
import NavigationItem from "../../common/components/NavigationItem";

export default function HomeNavigationItem({ href, label }: { href: string; label: string }) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return (
        <NavigationItem label={label} href={href} onClick={handleClick} />
    );
}