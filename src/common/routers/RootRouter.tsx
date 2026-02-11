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
import ScrollToTop from '../components/ScrollToTop';
import NASA23Page from '../../modules/nasa23-experience/NASA23Page';
import ASquarePage from '../../modules/a-square-experience/ASquarePage';
import PandorasPartyBoxPage from '../../modules/ppb-experience/PandorasPartyBoxPage';
import ArthurPage from '../../modules/arthur-experience/ArthurPage';
import T4TPage from '../../modules/t4t-experience/T4TPage';
import SciFiWarehouseVRPage from '../../modules/sci-fi-warehouse-vr-experience/SciFiWarehouseVRPage';

export default function RootRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/archive" element={<ExperienceArchivePage />} />
                
                {/* Professional Experience Pages */}
                <Route path="/t4t" element={<T4TPage />} />
                <Route path="/a-square" element={<ASquarePage />} />
                <Route path="/nasa-23" element={<NASA23Page />} />
                <Route path="/nasa-22" element={<NASA22Page />} />

                {/* Project Experience Pages */}
                <Route path="/t4t/arthur" element={<ArthurPage />} />
                <Route path="/sci-fi-warehouse-vr" element={<SciFiWarehouseVRPage />} />
                <Route path="/a-square/ppb" element={<PandorasPartyBoxPage />} />
                <Route path="/cards-and-castles" element={<CardsAndCastlesPage />} />
            </Routes>
        </Router>
    );
}