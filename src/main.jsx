import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChatProvider } from './context/ChatContext.jsx'
import RouterApp from './router/RouterApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <RouterApp />
    </ChatProvider>
  </StrictMode>,
)