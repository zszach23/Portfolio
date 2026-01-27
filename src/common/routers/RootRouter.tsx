// ============================================================================
// RootRouter.tsx
// 
// Root router component for the application.
// ============================================================================

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../modules/home/HomePage'
import ExperienceArchivePage from '../../modules/experience-archive/ExperienceArchivePage'
import CertificationsPage from '../../modules/certifications/CertificationsPage';

export default function RootRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archive" element={<ExperienceArchivePage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
            </Routes>
        </Router>
    );
}