/* 
  Main entry point for the React application.
  Renders the App component into the root DOM element.
  Sets up the React application to run in the browser.
*/

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/index.css"

// Mount React app to root element in index.html
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
