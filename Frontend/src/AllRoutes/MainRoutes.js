import React from "react";
import { Route, Routes } from "react-router";
import { Furniture } from "../Components/DropDownCategory";
import Home from "../Components/Home/Home";
import { KichenPage } from "../Components/Kichen/KichenPage";
import { LightPage } from "../Components/light/Light";
import Login from "../Components/Login/Login";
import { HomedecorePage } from "../Components/Matress/Materess";
import CartSideBar from "../Components/Product/CartSideBar";
import { FurniturePage } from "../Components/Product/Furniturepage";
import SinglePage from "../Components/Product/single";
import Signup from "../Components/Signup/Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/cart" element={<Cart/>} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<CartSideBar/>} />
      {/* <Route path="/help" element={<Help/>} /> */}
      <Route path="/furniture" element={<FurniturePage />} />
      <Route path="/furniture/:_id" element={<SinglePage />} />
      {/* <Route path="/mattresses" element={<Mattresses/>} /> */}
      <Route path="/kitchendining" element={<KichenPage />} />
      <Route path="/mattresses" element={<HomedecorePage />} />
    
      <Route path="/light" element={<LightPage/>} />
      {/* <Route path="/appliances" element={<Appliances/>} /> */}
    </Routes>
  );
};

export default MainRoutes;
