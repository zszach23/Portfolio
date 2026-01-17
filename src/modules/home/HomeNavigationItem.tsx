// ============================================================================
// HomeNavigationItem.tsx
//
// Navigation item component for the home page.
// ============================================================================

export default function HomeNavigationItem({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <a href={href} className="group flex items-center py-3 text-gray-600 hover:text-purple-700 transition-colors">
                <span className="mr-4 h-px w-8 rounded-full bg-purple-400 group-hover:bg-purple-600 transition-colors"></span>
                <span className="text-xs font-bold uppercase tracking-widest">
                    {label}
                </span>
            </a>
        </li>
    );
}