import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
// import AboutUs from './pages/AboutUs'   // HIDDEN — uncomment to restore
import TeamsPage from './pages/TeamsPage'
// import Gallery from './pages/Gallery'   // HIDDEN — uncomment to restore
// import Alumni from './pages/Alumni'     // HIDDEN — uncomment to restore
// import Fixtures from './pages/Fixtures' // HIDDEN — uncomment to restore
// import Events from './pages/Events'     // HIDDEN — uncomment to restore

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // { path: 'about', element: <AboutUs /> },        // HIDDEN — uncomment to restore
      // { path: 'gallery',  element: <Gallery /> },  // HIDDEN — uncomment to restore
      // { path: 'alumni',   element: <Alumni /> },   // HIDDEN — uncomment to restore
      // { path: 'fixtures', element: <Fixtures /> }, // HIDDEN — uncomment to restore
      // { path: 'events',   element: <Events /> },   // HIDDEN — uncomment to restore
    ],
  },
  {
    // Standalone full-screen page — no Layout/header
    path: '/teams',
    element: <TeamsPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
