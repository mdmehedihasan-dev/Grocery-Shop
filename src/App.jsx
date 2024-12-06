import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout"; 
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <Home/> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/productsdetails", element: <ProductDetails/> },
      
    ],
  },
]);

export default router;
