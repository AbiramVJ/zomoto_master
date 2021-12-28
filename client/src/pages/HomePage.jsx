import React from 'react'
import { useParams } from 'react-router-dom';
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from "../components/NightLife/index";
import Nutrition from "../components/Nutrition/index";
import ImageGrid from '../components/restaurant/ImageGrid';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// redux action
import { getRestaurant } from '../redux/reducers/restaurant/restaurant.action';

export const HomePage = () => {
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRestaurant());

    },[]);
    
    return (
        <>
        hello
            <div className="my-5">
            {type === "delivery" && <Delivery />}  
            {type === "dining" && <Dining />} 
            {type === "night" && <NightLife/>} 
            {type === "nutri" && <Nutrition />}
                       
             </div>


          
        </>
    )
}

export default HomePage;