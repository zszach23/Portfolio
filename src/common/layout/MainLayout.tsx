// ============================================================================
// MainLayout.tsx
//
// Main layout for the application.
// ============================================================================

import type { MainLayoutProps } from "./MainLayoutTypes";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}