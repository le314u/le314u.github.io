import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//let tag = document.getElementsByTagName('body')[0]
let tag = document.getElementById('root')!

ReactDOM.createRoot(tag!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
