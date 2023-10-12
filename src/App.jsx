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
import PrivetRoute from "./privetRoute/PrivetRoute"
import AddToys from "./Seller/AddToy"
import Search from "./Search/Search"
import AllToys from "./Seller/AllToys"
import MyToys from "./Seller/MyToys"
import UpdateToy from "./Seller/UpdateToy"
 

 

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
          element: <DaynamicCate/>,
        },
        {
          path: '/category/:id',
          element:<SingleData/>
        },
        {
          path: '/cart',
          element: <PrivetRoute><Cart/></PrivetRoute>
        },
        {
          path: '/addtoys',
          element:<AddToys/>
        },
        {
          path: '/alltoys',
          element:<AllToys/>
        },
        {
          path: '/mytoys',
          element:<MyToys/>
        },
        {
          path: '/update/:id',
          element: <UpdateToy />,
           
        },
        {
          path: '/search',
          element:<Search/>
        },
         
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
