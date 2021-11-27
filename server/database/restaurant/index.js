import Mongoose from "mongoose";

const RestaurantSchema = new Mongoose.Schema(
    {
        name:{type:String, require:true},
        city:{type:String, require:true},
        address:{type:String, require:true},
        maplocation:{type:String, require:true},
        cuisine:[String],
        restaurantTimings:String,
        contactNumber:Number,
        website:String,
        popularDishes:[String],
        averageCost:Number,
        amenities:[String],
        menuImage:{
            type:Mongoose.Types.ObjectId,
            ref:"images",
        },
        menu:{
            type:Mongoose.Types.ObjectId,
            ref:"menu",
        },
        reviews:[{type: Mongoose.Types.ObjectId, ref:"Reviews"}],
        photos:{type: Mongoose.Types.ObjectId, ref:"Images"},


    },
    {
        timestamps:true,
    }
)
export const RestaurantModel = Mongoose.model("Restaurants",RestaurantSchema);