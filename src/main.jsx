import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Physics from './components/Years/First_Year/Physics/Physics';
//import {RouteProvider, createBrowserRouter} from 'react-router'
import Layout from './Layout'
import Home from './components/Home/Home'
import Year_Home from './components/Years/Year_Home/Year_Home'
import Advice from './components/Advice/Advice'
import First_Year from './components/Years/First_Year/First_Year';

const physicsContent = [{
                path: "physics",
                element: <Physics/>,
                
              }]


const router = createBrowserRouter(
  [
    {
      path: '/',
      element : <Layout/> ,
      children : [
        {
          path: '',
          element: <Home/>,
        },
        {
          path: "Years",
          element: <Year_Home/>,
          children: [
            { path: "First_Year",
              element: <First_Year/>, 
              children : physicsContent
            }
          ]
        },
        {
          path: "Advice",
          element: <Advice/>
        },

      ]
    }

  ]
)

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router}/>

  </StrictMode>,
)
