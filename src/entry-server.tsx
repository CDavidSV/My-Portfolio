import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { DataProvider } from './data'
import App from './App'

export function render(_url: string) {
  const html = renderToString(
    <StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </StrictMode>,
  )
  return { html }
}
