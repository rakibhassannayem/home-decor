import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
      {
        path: "/product/:id",
        Component: ProductDetails,
      },
    ],
  },
]);

export default router;
