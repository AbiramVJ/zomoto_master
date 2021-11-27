import  Mongoose from "mongoose";

const ImageSchema = new Mongoose.Schema({
    images:[{location:{type:String, require:true}}]


});
export const ImageModel = Mongoose.model("Image",ImageSchema);