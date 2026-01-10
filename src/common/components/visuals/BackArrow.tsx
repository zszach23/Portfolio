// ============================================================================
// BackArrow.tsx
//
// Animated Back Arrow
// ============================================================================

export default function BackArrow({label, link, textColor, hoverColor}: {label: string, link: string, textColor: string, hoverColor: string}) {
    return (
        <a href={link} className={`group mb-2 inline-flex items-center font-semibold ${textColor} ${hoverColor} transition-colors`}>
            <svg className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {label}
        </a>
    )
}