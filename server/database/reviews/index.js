import { mongo, Mongoose } from "mongoose";

const ReviewSchema = new Mongoose.Schema({
    food:{type:Mongoose.Type.ObjectId, ref:"Foods"},
    restaurant:{type:Mongoose.Type.ObjectId, ref:"Restaurants"},
    user:{type:Mongoose.Type.ObjectId, ref:"Users"},
    rating:{type: Number, require:true},
    reviewText:{type: String, require:true},
    isRestaurantReview:Boolean,
    isFoodReview:Boolean,
    photos: [
        {
            type:Mongoose.Type.ObjectId,
            ref:"Images"
        },
    ],

},
{
    timestamps:true,
}
);
export const ReviewModel = Mongoose.model("Reviews",ReviewSchema);