// ============================================================================
// ExperienceArchiveFooter.tsx
//
// Footer Component for the Experience Archive Page.
// ============================================================================

export default function ExperienceArchiveFooter({ displayedExperiencesCount}: { displayedExperiencesCount: number}) {
    return (
        <div className="mt-12 text-sm text-gray-600">
            Showing {displayedExperiencesCount} experiences.
        </div>
    )
}