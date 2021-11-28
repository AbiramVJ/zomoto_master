import joi from "joi";


export const ValidateRestaurantCity = (RestaurantObject)=>{
    const Schema = joi.object({
        city: joi.string().required(),
    });
    return Schema.validateAsync(RestaurantObject);
};

export const ValidateRestaurantSearchString = () =>{
    const Schema= joi.object({
        searchString:joi.string().required(),
    });

    return Schema.validateAsync(RestaurantObject);
};