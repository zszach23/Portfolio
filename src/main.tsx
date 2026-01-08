// ============================================================================
// main.tsx
// 
// Entry point for the React application.
// ============================================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProvider from './common/providers/AppProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
)
