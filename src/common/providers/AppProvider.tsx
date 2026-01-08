// ============================================================================
// src/common/providers/AppProvider.tsx
//
// Application provider component for the application.
// ============================================================================

import RootRouter from "../routers/RootRouter";

export default function AppProvider() {
    return (
        <>
            <RootRouter />
        </>
    )
}