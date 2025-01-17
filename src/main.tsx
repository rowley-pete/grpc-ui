import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GrpcClientContextProvider } from './providers/GrpcClientContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GrpcClientContextProvider>
      <App />
    </GrpcClientContextProvider>
  </StrictMode>,
)
