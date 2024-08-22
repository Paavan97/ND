// src/App.tsx
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhyUS from "./pages/WhyUs";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga4";
import Blog from "./pages/Blogs";
import BlogRoute from "./pages/BlogsRoute";
import ProductCategories from "./pages/ProductCategories";
import Products from "./pages/Products";

const measurementID = "G-TPWWKY7TGC";
ReactGA.initialize(measurementID);

const App = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page",
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhyUs" element={<WhyUS />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:title" element={<BlogRoute />} />
          <Route path="/categories" element={<ProductCategories />} />
          <Route path={`/products/:id`} element={<Products />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
