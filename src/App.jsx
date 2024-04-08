import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Components/RootLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Shop from "./Pages/Shop";

import ProductFilter from "./Pages/ProductFilter";
import Product from "./Pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route>
        <Route index element={<Home />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/shop" element={<Shop title="Products" />} />
        <Route
          path="/product/:productID"
          element={<Product title="Product" />}
        />

        <Route
          path="/productfilter"
          element={<ProductFilter title="Product" />}
        />
        <Route path="/contact" element={<Contact title="Contacts" />} />
        <Route path="/login" element={<Login title="Login" />} />
        <Route path="/signup" element={<Signup title="Signup" />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
