import Mongoose from "mongoose";

const MenuSchema = new Mongoose.Schema({
    menus:[
        {
            name:{type:String, require:true}, 
            item:[{type:Mongoose.Types.ObjectId, ref:"Foods"}], 
           
        },
    ],
    recommended:[{type:Mongoose.Types.ObjectId, ref:"Foods", unique: true}] ,
});
export const MenuModel = Mongoose.model("menus",MenuSchema);