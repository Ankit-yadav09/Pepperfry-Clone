import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home/Home'
import Login from "../Components/Login/Login"
import { ProductsPage } from '../Components/Product/Productpage'
import Signup from "../Components/Signup/Signup"
import AddressPage from '../Pages/AddressPage'
import { PaymentPage } from '../Pages/PaymentPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/cart" element={<Cart/>} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/payment" element={<PaymentPage/>} />
      <Route path="/address" element={<AddressPage/>} />
      {/* <Route path="/wishlist" element={<Wishlist/>} /> */}
      {/* <Route path="/help" element={<Help/>} /> */}
      <Route path="/furniture" element={<ProductsPage/>} />
      {/* <Route path="/mattresses" element={<Mattresses/>} /> */}
      {/* <Route path="/kitchen" element={<Kitchen/>} /> */}
      {/* <Route path="/homedecor" element={<Homedecor/>} /> */}
      {/* <Route path="/light" element={<Light/>} /> */}
      {/* <Route path="/appliances" element={<Appliances/>} /> */}
    </Routes>
  )
}

export default MainRoutes