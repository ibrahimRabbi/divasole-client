import { RouterProvider, createBrowserRouter } from "react-router-dom"
 
import Layout from "./Layout/Layout"
import Home from "./Home/Home"
import DaynamicCate from "./DaynamicCategory/DaynamicCate"
import SingleData from "./SignleData/SingleData"

 

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element:<Home/>
        },
        {
          path: ':id',
          element: <DaynamicCate />,
        },
        {
          path: '/:category/:id',
          element:<SingleData/>
        }
      ]
    },
   
  ])
   
  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
