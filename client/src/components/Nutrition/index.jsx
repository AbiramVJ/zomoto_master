import React from 'react'

//component
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousel from "./NutritionCarousel";
import NutritionCard from "./NutritionCard";

function Nutrition() {
    return (
        <div>
            <NutritionHeroCarousel/>
            <div className="my-6">
                <NutritionCarousel/>
            </div>
            <div className="flex justify-between flex-wrap">
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp"/>
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp"/>
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp"/>
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp"/>
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp"/>
                <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp"/>
               

            </div>
            
        </div>
    )
}

export default Nutrition;
