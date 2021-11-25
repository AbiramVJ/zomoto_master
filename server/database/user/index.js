import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    fullname:{type:String,require:true},
    email:{type:String, require:true},
    password:{type:String,require:true},
    address:[{detail:{type:String}, for:{type:String}}],
    phoneNumber: [{type: Number}]


})
export const UserModel = Mongoose.model("User",userSchema);