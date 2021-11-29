
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import HomeLayout from '../layout/HomeLayout';

function HomeLayoutHoc({ component: Component, path, ...rest }) {
  return(
    <>
     <Routes>
        <Route
          {...rest}
          path={path}
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