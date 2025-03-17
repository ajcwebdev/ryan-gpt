// src/app.tsx

import { Suspense } from 'solid-js'
import { FileRoutes } from '@solidjs/start/router'
import { Router } from '@solidjs/router'
import "./app.css";

/**
 * The main app layout in SolidStart, wrapping the entire application
 * in a Suspense boundary and hooking up file-based routing.
 *
 * @returns {JSX.Element} The root app component
 */
export default function App() {
  return (
    <Router
      root={(props) => (
        <Suspense fallback={<div>Loading...</div>} children={props.children} />
      )}
    >
      <FileRoutes />
    </Router>
  )
}
