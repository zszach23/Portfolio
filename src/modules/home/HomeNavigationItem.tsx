// ============================================================================
// HomeNavigationItem.tsx
//
// Navigation item component for the home page.
// ============================================================================

import type React from "react";

export default function HomeNavigationItem({ href, label }: { href: string; label: string }) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return (
        <li>
            <a href={href} className="group flex items-center py-3 text-gray-600 hover:text-purple-700 transition-colors cursor-pointer" onClick={handleClick}>
                <span className="mr-4 h-px w-8 rounded-full bg-purple-400 group-hover:bg-purple-600 transition-colors"></span>
                <span className="text-xs font-bold uppercase tracking-widest">
                    {label}
                </span>
            </a>
        </li>
    );
}