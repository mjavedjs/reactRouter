import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import About from './screens/About'
import Home from './screens/Home'
import Contant from './screens/Contant'
import Services from './screens/Services'
const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'contant',
      element:<Contant/>
    },
    {
       path:'services',
       element:<Services/>
    },
    {
      path:'*',
      element:<Home/>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
    <RouterProvider  router={router} />
)
