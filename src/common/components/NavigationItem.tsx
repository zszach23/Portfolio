// ============================================================================
// NavigationItem.tsx
//
// Component for individual navigation items in the sidebar
// ============================================================================

import type React from "react";
import { Link } from "react-router-dom";

export default function NavigationItem({ label, href, onClick }: { label: string, href: string, onClick?: React.MouseEventHandler<HTMLAnchorElement> | (() => void) }) {
    return (
        <li>
            <Link to={href} className="group flex items-center py-3 text-gray-600 hover:text-purple-700 transition-colors cursor-pointer" onClick={onClick}>
                <span className="mr-4 h-px w-8 rounded-full bg-purple-400 group-hover:bg-purple-600 transition-colors"></span>
                <span className="text-xs font-bold uppercase tracking-widest">
                    {label}
                </span>
            </Link>
        </li>
    )
}