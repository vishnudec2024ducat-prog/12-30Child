import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import { Provider } from 'react-redux'
import store from '../Utility/Store.js'
import Zepto from '../Zepto/Zepto.jsx'
import Dashboard from '../Components/Dashboard.jsx'

const RoutingArea = () => {
    const ways = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
          { path: "/", element: <Zepto /> },
          { path: "/dashboard", element: <Dashboard /> },
        ],
      },
    ]);
  return (
    <Provider store={store}>
        <RouterProvider router={ways}/>
    </Provider>
  )
}

export default RoutingArea