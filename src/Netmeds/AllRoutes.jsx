import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";
import LowerNav from "./LowerNav";
import { Main } from "./Main";
import Navbar from "./Navbar";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";


export const AllRoutes = () => {

    const [toggle,setToggle] = useState(false)

  return (
     <>
    <Navbar toggle={toggle} />
    <LowerNav/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
      <Route path="/login" element={<Login setToggle={setToggle} />}/>
      <Route path="/profile" element={<PrivateRoute><Profile setToggle={setToggle} /></PrivateRoute>}/>

    </Routes>
    </>
  );
};
