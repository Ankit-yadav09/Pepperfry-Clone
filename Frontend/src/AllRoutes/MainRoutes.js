import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home/Home'
import Login from "../Components/Login/Login"
import Signup from "../Components/Signup/Signup"
import AddressPage from '../Pages/AddressPage'
import { PaymentPage } from '../Pages/PaymentPage'

import { KichenPage } from "../Components/Kichen/KichenPage";
import { LightPage } from "../Components/light/Light";
import { MattressesPage } from "../Components/Matress/Materess";
import { HomeDecorPage } from '../Components/HomeDecor/HomeDecor'
import CartSideBar from "../Components/Product/CartSideBar";
import Hero from "../Components/common/All"
import { FurniturePage } from "../Components/Product/Furniturepage";
import SinglePage from "../Components/Product/single";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<CartSideBar />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/furniture" element={<FurniturePage />} />
      <Route path="/furniture/:_id" element={<SinglePage />} />
      <Route path="/kitchendining" element={<KichenPage />} />
      <Route path="/mattresses" element={<MattressesPage />} />
      <Route path="/homedecor" element={< HomeDecorPage/>} />
      <Route path="/light" element={<LightPage />} />
      <Route path="/furnishing" element={<FurniturePage />} />
      <Route path="/appliances" element={<KichenPage />} />
      <Route path="/modular" element={<Hero />} />
 </Routes>
  );
};

export default MainRoutes;
