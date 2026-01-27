// ============================================================================
// ForwardArrow.tsx
//
// Animated Forward Arrow to link to a page
// ============================================================================

import { Link } from "react-router-dom";

export default function ForwardArrowPage({label, link, textColor, hoverColor}: {label: string, link: string, textColor: string, hoverColor: string}) {
    return (
        <Link to={link} className={`group mb-2 inline-flex items-center font-semibold ${textColor} ${hoverColor} transition-colors`}>
            {label}
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </Link>
    )
}