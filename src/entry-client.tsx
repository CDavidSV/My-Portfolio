import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ThemeProvider } from './theme-provider'
import { DataProvider } from './data'
import App from './App'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <DataProvider>
        <App />
      </DataProvider>
    </ThemeProvider>
  </StrictMode>,
)
