// ============================================================================
// Chevron.tsx
//
// Simple Chevron SVG Component
// ============================================================================

export default function Chevron(){
    return (
        <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )
}