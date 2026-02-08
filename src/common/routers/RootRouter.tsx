// ============================================================================
// RootRouter.tsx
// 
// Root router component for the application.
// ============================================================================

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../modules/home/HomePage'
import ExperienceArchivePage from '../../modules/experience-archive/ExperienceArchivePage'
import NASA22Page from '../../modules/nasa22-experience/NASA22Page';
import CardsAndCastlesPage from '../../modules/cards-and-castles-experience/CardsAndCastlesPage';

export default function RootRouter() {
    return (
        <Router>
            <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/archive" element={<ExperienceArchivePage />} />
                
                {/* Professional Experience Pages */}
                <Route path="/nasa-22" element={<NASA22Page />} />

                {/* Project Experience Pages */}
                <Route path="/cards-and-castles" element={<CardsAndCastlesPage />} />
            </Routes>
        </Router>
    );
}