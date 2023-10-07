import { RouterProvider, createBrowserRouter } from "react-router-dom"
 
import Layout from "./Layout/Layout"
import Home from "./Home/Home"

 

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element:<Home/>
        }
      ]
    }
  ])
   
  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
