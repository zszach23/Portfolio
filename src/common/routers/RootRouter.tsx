// ============================================================================
// RootRouter.tsx
// 
// Root router component for the application.
// ============================================================================

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../modules/home/HomePage'
import ArchivePage from '../../modules/archive/ArchivePage'

export default function RootRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archive" element={<ArchivePage />} />
            </Routes>
        </Router>
    );
}