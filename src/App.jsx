import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Home/Home"
import DaynamicCate from "./DaynamicCategory/DaynamicCate"
import SingleData from "./SignleData/SingleData"
import { Provider } from "react-redux"
import store from "./redux/store"
import Cart from "./cart/Cart"
import AuthContext from "./Authentication/AuthContext"
import SignUp from "./Form/Signup"
import Signin from "./Form/Signin"
import PrivetRoute from "./privetRoute/PrivetRoute"
import Search from "./Search/Search"
import Contact from "./contact/Contact"
import BuyNow from "./directBuyNow/BuyNow"
import Verification from "./Form/Verification"
import OrderForm from "./PlaceOrderForm/OrderForm"
import Invoice from "./Invoice/Invoice"
import DashBoard from "./Admin/DashBoard"
import MyToys from "./Admin/MyToys"
import UpdateToy from "./Admin/UpdateToy"
import AddToys from "./Admin/AddToy"
import Orders from "./Admin/Orders"
import ViewDetail from "./Admin/ViewDetail"




function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: ':category',
          element: <DaynamicCate />
        },
        {
          path: '/:category/:id',
          element: <SingleData />
        },
        {
          path: '/cart',
          element: <PrivetRoute><Cart /></PrivetRoute>
        },
        {
          path: '/buynow',
          element: <BuyNow />
        },
        {
          path: '/addtoys',
          element: <AddToys />
        },
        {
          path: '/mytoys',
          element: <MyToys />
        },
        {
          path: '/update/:id',
          element: <UpdateToy />,

        },
        {
          path: '/search/:name',
          element: <Search/>
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/place-order',
          element: <OrderForm />
        }
      ]
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/signup/verified',
      element: <Verification />
    },
    {
      path: '/signin',
      element: <Signin />
    },
    {
      path: '/invoice',
      element: <Invoice />
    },
    {
      path: '/dashboard',
      element: <DashBoard />,
      children: [
        {
          path: 'addproduct',
          element: <AddToys />
        },
        {
          path: 'orders',
          element: <Orders />
        },
        {
          path: '/dashboard/order/view-details',
          element: <ViewDetail/>
        },
        {
          path: 'manage',
          element: <MyToys />
        },
        {
          path: 'update/:id',
          element: <UpdateToy />
        }
      ]
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
