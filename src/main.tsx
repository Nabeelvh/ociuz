import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import Collage1Page from './components/collage1'
import ServicePage from './pages/service'
import ContactPage from './pages/contact'
import Collagelistpage from './components/collagelist'


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
    errorElement:<h1>404 The Page Is Not Found</h1>
  },
  { 
    path:"/about",
    element:<AboutPage/>
  },
  {
    path:"/collage/:id",
    element:<Collage1Page/>
  },

  {
    path:"/about",
    element:<AboutPage/>
  },
  {
    path:"/service",
    element:<ServicePage/>
  },
  {
    path:"/contact",
    element:<ContactPage/>
  },
  {
    path:"/collagelist",
    element:<Collagelistpage/>
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
