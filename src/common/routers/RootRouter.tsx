// ============================================================================
// src/common/routers/RootRouter.tsx
// 
// Root router component for the application.
// ============================================================================

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../modules/home/HomePage'
import ProfessionalExperiencesPage from '../../modules/professional-experiences/ProfessionalExperiencesPage'
import ProjectExperiencesPage from '../../modules/project-experiences/ProjectExperiencesPage'
import CertificationsPage from '../../modules/certifications/CertificationsPage'

export default function RootRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/professional-experiences" element={<ProfessionalExperiencesPage />} />
                <Route path="/project-experiences" element={<ProjectExperiencesPage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
            </Routes>
        </Router>
    );
}