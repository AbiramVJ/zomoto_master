

import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
  {
    menus: [
      {
        name: { type: String, required: true },
        items: [
          {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
          },
        ],
      },
    ],
    recommended: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const MenuModel = mongoose.model("menus", MenuSchema);

// const MenuSchema = new Mongoose.Schema({
//     menus:[
//         {
//             name:{type:String, require:true}, 
//             item:[{type:Mongoose.Types.ObjectId, ref:"Foods"}], 
            
           
//         },
//     ],
//     recommended:[{type:Mongoose.Types.ObjectId, ref:"Foods", unique: true}] ,
// });
// export const MenuModel = Mongoose.model("menus",MenuSchema);