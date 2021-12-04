
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import HomeLayout from '../layout/HomeLayout';


function HomeLayoutHoc({ component: Component, ...rest }) {
  return(
    <>
     <Routes>
        <Route
          {...rest}
          element={
            <HomeLayout>
              <Component/>
            </HomeLayout>
          }  
        />

     
      </Routes>
    </>
  );
}

export default HomeLayoutHoc;