import { mongo, Mongoose } from "mongoose";

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
            type:Mongoose.Type.ObjectId,
            ref:"Images",
        },
        menu:{
            type:Mongoose.Type.ObjectId,
            ref:"Menus"
        },
        reviews:[{type: Mongoose.Type.ObjectId, ref:"Reviews"}],
        photos:{type: Mongoose.Type.ObjectId, ref:"Images"},


    },
    {
        timestamps:true,
    }
)
export const RestaurantModel = Mongoose.model("Restaurants",RestaurantSchema);