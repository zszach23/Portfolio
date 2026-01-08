// ============================================================================
// src/common/components/NavBar.tsx
//
// Navigation bar component for the application.
// ============================================================================

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/professional-experiences">Professional Experiences</Link>
            <Link to="/project-experiences">Projects</Link>
            <Link to="/certifications">Certifications</Link>
        </nav>
    );
}