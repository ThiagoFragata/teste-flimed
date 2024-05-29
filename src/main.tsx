import '@/styles/globals.css'

import { Routes } from '@/routes'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './contexts/themeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
