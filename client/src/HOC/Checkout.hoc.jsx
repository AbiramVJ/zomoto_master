
import React from "react";
import { Route, Routes } from "react-router-dom";

// layout
import CheckoutLayout from "../layout/Checkout.layout";
//import Navbar from "../components/Navbar/CheckoutNavbar";

function CheckoutLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
    <Routes>
        <Route
          {...rest}
          element={
            <CheckoutLayout>
              <Component/>
            </CheckoutLayout>
          }  
        />
      </Routes>
    </>
  );
}

export default CheckoutLayoutHoc;