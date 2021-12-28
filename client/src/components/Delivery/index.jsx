import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// component
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";
import { useState, useEffect } from "react";

//redux
import { useSelector } from 'react-redux';



function Delivery() {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector((store) => store.restaurant.restaurants);
  
    useEffect(() => {
      reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);
  

    return (
        <>
           <DeliveryCarousel/>

           <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
               Delivery Restaurants in NCR(Colombo)
            </h1>
            <div className="flex justify-between flex-wrap mt-5">
                {restaurantList.map((Restaurant) => (
                    <RestaurantCard {...Restaurant} key={Restaurant._id} />
                ))}
            </div>
        </>
    )
}
export default Delivery;
