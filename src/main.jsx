import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Gallery from './pages/Gallery'
import Alumni from './pages/Alumni'
import Fixtures from './pages/Fixtures'
import Events from './pages/Events'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'alumni',
        element: <Alumni />,
      },
      {
        path: 'fixtures',
        element: <Fixtures />,
      },
      {
        path: 'events',
        element: <Events />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
