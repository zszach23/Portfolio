// ============================================================================
// NavBar.tsx
//
// Navigation bar component for the application.
// ============================================================================

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
        </nav>
    );
}