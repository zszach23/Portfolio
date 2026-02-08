// ============================================================================
// Chevron.tsx
//
// Simple Chevron SVG Component
// ============================================================================

export default function Chevron({color, hoverColor}: {color: string; hoverColor: string}) {
    return (
        <svg className={`w-4 h-4 ${color} group-hover:${hoverColor} transition-colors`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )
}