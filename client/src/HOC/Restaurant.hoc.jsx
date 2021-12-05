import React from 'react';
import { Routes,Route } from 'react-router';

//layout
import RestaurantLayout from '../layout/Restaurant.Layout';

function RestaurantLayoutHoc({component:Component, ...rest}) {
    return (
        <>
         {/* <Routes>
          <Route
          {...rest}
            component={(props) => (
              <RestaurantLayout>
                <Component {...props} />
              </RestaurantLayout>
            )}/>
        </Routes>  */}

        {/* <RestaurantLayout>
            <Component/>
          </RestaurantLayout> */}


          <Routes>
        <Route
          {...rest}
      
          element={
            <RestaurantLayout>
            <Component/>
          </RestaurantLayout>
          }  
        />

     
      </Routes>

      
        </>

        
    )
}

export default RestaurantLayoutHoc;
