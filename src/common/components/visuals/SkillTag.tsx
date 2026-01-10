// ============================================================================
// SkillTag.tsx
//
// Component for displaying a skill tag.
// ============================================================================

export default function SkillTag({ skill }: { skill: string }) {
    return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            {skill}
        </span>
    )
}