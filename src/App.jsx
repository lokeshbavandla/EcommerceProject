import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {CartPage, Home,Product,Products, OrderStatus} from './pages'
import { ErrorComponent, Layout } from './components';
import SavedItems from './pages/SavedItems/SavedItems';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorComponent />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products/:productCategory',
          element: <Products />
        },
        {
          path: '/product/:productId',
          element: <Product />
        },
        {
          path:'/productCollection',
          element: <SavedItems />
        },
        {
          path:'/orders',
          element: <OrderStatus />
        },
      ]
    },
    {
      path: '/checkout',
      element: <CartPage />
    }
  ])

  return (
    <div className='w-[100%] overflow-hidden'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
