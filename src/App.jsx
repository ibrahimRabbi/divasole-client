import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Home/Home"
import DaynamicCate from "./DaynamicCategory/DaynamicCate"
import SingleData from "./SignleData/SingleData"
import Payment from "./Payment/Payment"
import { Provider } from "react-redux"
import store from "./redux/store"
import Cart from "./cart/Cart"
import AuthContext from "./Authentication/AuthContext"
import SignUp from "./Form/Signup"
import Signin from "./Form/Signin"

 

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
          path: ':category',
          element: <DaynamicCate />,
        },
        {
          path: '/:category/:id',
          element:<SingleData/>
        },
        {
          path: '/cart',
          element:<Cart/>
        }
      ]
    },
    {
      path: '/payment',
      element:<Payment/>
    },
    {
      path: '/signup',
      element: <SignUp/>
    },
    {
      path: '/signin',
      element: <Signin/>
    }
   
  ])
   
  return (
    <Provider store={store}>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </Provider>
     
     
  )
}

export default App
