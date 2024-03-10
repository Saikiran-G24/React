/*
Header
    -Logo      (Righthand side)
    -Nav Items
    -Home      (Left Hand side)
    -Aboutus   (Left Hand side)
    -Contact   (Left Hand side)
    -cart      (Left Hand side)
Body
    -Search Bar
    -Restaurent List
    -Restaurent cards
       -Image
       -Name of the Restaurent
       -Rating
       -cuisines
          -North Indians
          -South Indians
       -Price
       -Address

Footer
    -Links
    -copyrights

*/
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";
// import About from "./Components/About";
import Contact from "./Components/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error.js";
import Restaurantmenu from "./Components/Restaurantmenu.js";
import Profile from "./Components/Profile.js";
import Shimmer from "./Components/Shimmer.js";
import Usercontext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import store from "./utils/Store.js";
import Cart from "./Components/Cart.js";
/***
 * CHUNKING
 * CODE SPLITTING
 * DYNAMIC IMPORT
 * ON DEMAND LOADING
 * LAZY LOADING
 * DYNAMIC BUNDLING
 */

//LAZY LOADING
const About = lazy(() => import("./Components/About.js"));
const Instamart = lazy(() => import("./Components/Instamart.js"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Saikiran Kudurupaka", //overwritting usercontext
    email: "saikiran0756@gmail.com",
  });
  return (
    <Provider store={store}>
      <Usercontext.Provider value={{ user: user, setUser: setUser }}>
        <Header />

        <Outlet />

        <Footer />
      </Usercontext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:resid",
        element: <Restaurantmenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
