import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home/Home'
import Login from "../Components/Login/Login"
import Signup from "../Components/Signup/Signup"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/cart" element={<Cart/>} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      {/* <Route path="/wishlist" element={<Wishlist/>} /> */}
      {/* <Route path="/help" element={<Help/>} /> */}
    </Routes>
  )
}

export default MainRoutes