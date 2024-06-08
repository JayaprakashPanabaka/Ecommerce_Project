import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";

import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound";
import ProductDetails from "./Components/ProductDetails";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      }
    ],
  },
]);

function App() {
  return (
    <div>
      {/* router defore v6.23 */}
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}

      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
