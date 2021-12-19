import React from 'react'
 import { useState } from 'react';
 import { TiStarOutline } from "react-icons/ti";
 import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// //component
import Navbar from '../components/Navbar';
import ImageGrid from '../components/restaurant/ImageGrid';
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import InfoButton from '../components/restaurant/InfoButtons';
import Tabs from '../components/restaurant/Tabs';
import Reviews from '../components/restaurant/Reviews/Reviews';


 function Restaurantlayout({children}) {
    const [restaurant, setRestaurant] = useState({
        images: [
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg",
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg"
        ],
        name: "Bakehouse Comfort",
        cuisine: ["Bakery, Desserts, Fast Food"],
        address: "Biryani, Jaffna, Colombo, Vavunija , Trncomale, Kandy",
        restaurantRating: 4.1,
        deliveryRating: 3.2,
      });
    //   const images=[
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg",
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",

    //   ]
   
    return (
        <>
        
           <Navbar/> 
            <div className="container mx-auto px-4 mt-8 lg:px-20 pb-10">
                  <ImageGrid images={restaurant.images} />  
                   <RestaurantInfo 
                        name={restaurant?.name}
                        restaurantRating={restaurant?.restaurantRating || 0}
                        deliveryRating={restaurant?.restaurantRating || 0}
                        cuisine={restaurant?.cuisine}
                        address={restaurant?.address}
               />

            <div className="my-4 flex flex-wrap gap-3 mx-auto m-32">
              <InfoButton isActive>
                <TiStarOutline /> Add Review
              </InfoButton>
              <InfoButton>
                <RiDirectionLine /> Direction
              </InfoButton>
              <InfoButton>
                <BiBookmarkPlus /> Bookmark
              </InfoButton>
              <InfoButton>
                <RiShareForwardLine /> Share
              </InfoButton>
            </div>
            <div className="my-10">
              <Tabs /> 
             </div>
             
             {children}   
                
        
            </div>
            
                      
            
        </>
    )
}

export default Restaurantlayout;
