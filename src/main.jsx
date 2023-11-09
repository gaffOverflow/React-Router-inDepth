import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// Pages
import Home from "./pages/home";
import RootLayout from "./layouts/rootLayout";
import About from "./pages/about";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Help from "./layouts/helpLayout";
import ErrorPage from "./pages/errorPage";

const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route path="/" element={} /> */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rout} />
  </React.StrictMode>,
);
