import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//import {RouteProvider, createBrowserRouter} from 'react-router'
import Layout from './Layout'
import Home from './components/Home/Home'
import Semester_Home from './components/Semesters/Semester_Home/Semester_Home'
import Advice from './components/Advice/Advice'
import First_Year from './components/Semesters/First_Year/First_Year';

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
          path: "Semesters",
          element: <Semester_Home/>,
          children: [
            { path: "First_Year",
              element: <First_Year/> }
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
