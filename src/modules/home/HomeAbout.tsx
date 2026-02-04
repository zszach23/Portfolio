// ============================================================================
// HomeAbout.tsx
//
// About section component for the home page.
// ============================================================================

import { aboutSummary } from "../../content/experiences/about/AboutSummary";
import "./Home.css";

export default function HomeAbout() {
    return (
        <section id="about" className="section">
            <h2 className="sectionHeader">About Me</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutSummary}
            </p>
        </section>
    )
}