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

        <RestaurantLayout>
            <Component/>
          </RestaurantLayout>
      
        </>
    )
}

export default RestaurantLayoutHoc;
