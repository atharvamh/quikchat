import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error} : any){
  return (
    <div>
      <h1>Something went wrong</h1>
      <h2 style={{ color : "red" }}>
        <pre>{error.message}</pre>
      </h2>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
  </React.StrictMode>,
)
