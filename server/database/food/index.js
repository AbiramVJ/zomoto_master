import Mongoose from "mongoose";

const FoodSchema = new Mongoose.Schema({
    name:{type:String, require:true},
    rescript:{type:String, require:true},
    isVeg:{type:Boolean,require:true},
    isContainEgg:{type:Boolean,require:true},
    category:{type:String, require:true},
    photos:{type: Mongoose.Types.ObjectId, ref:"Images"},
    price:{type:Number, default:150, require:true},
    addOns:[{type:Mongoose.Types.ObjectId, ref:"Foods"}],
    restaurant:{type:Mongoose.Types.ObjectId, ref:"Restaurants", require:true}



});
export const FoodModel = Mongoose.model("Foods",FoodSchema);