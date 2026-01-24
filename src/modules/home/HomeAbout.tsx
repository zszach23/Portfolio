// ============================================================================
// HomeAbout.tsx
//
// About section component for the home page.
// ============================================================================

import { aboutSummary } from "../../content/experiences/about/AboutSummary";

export default function HomeAbout() {
    return (
        <section id="about" className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutSummary}
            </p>
        </section>
    )
}