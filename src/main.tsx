import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/styles/main.scss"
import CursorContextProvider from './context/CursorContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CursorContextProvider>    <App /></CursorContextProvider>

  </React.StrictMode>,
)
