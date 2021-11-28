import  Mongoose from "mongoose";

const ReviewSchema = new Mongoose.Schema({
    food:{type:Mongoose.Types.ObjectId, ref:"Foods"},
    restaurant:{type:Mongoose.Types.ObjectId, ref:"Restaurants"},
    user:{type:Mongoose.Types.ObjectId, ref:"Users"},
    rating:{type: Number, require:true},
    reviewText:{type: String, require:true},
    isRestaurantReview:Boolean,
    isFoodReview:Boolean,
    photos: [
        {
            type:Mongoose.Types.ObjectId,
            ref:"Images"
        },
    ],

},
{
    timestamps:true,
}
);
export const ReviewModel = Mongoose.model("reviews",ReviewSchema);