import { mongo, Mongoose } from "mongoose";

const OrderSchema = new Mongoose.Schema(
        {
                user:{
                    type:Mongoose.Type.ObjectId,
                    ref:"Users"
                },
                orderDetails:[{
                    food:{type:Mongoose.Type.ObjectId,ref:"Foods"},
                    quantity:{type:Number, require:true},
                    paymode:{type:String, require:true},
                    status:{type:String, default:"placed"},
                        paymentDetails:{
                            itemTotal:{type:Number, require:true},
                            promo:{type:Number,require:true},
                            tax:{type:Number, require:true}
                        }
                }]
        },

        {
            timestamps: true

            
        }
);
export const OrderModel = Mongoose.model("User",OrderSchema);