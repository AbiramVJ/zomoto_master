import React from "react";
import { useState,useEffect } from "react";
//component
import ReviewCard from "./ReviewCard";
import AddReviewCard from "./AddReviewCard";

//redux action
import { getReviews } from "../../../redux/reducers/review/review.action";
import { useDispatch,useSelector } from "react-redux";

function Reviews() {
  const [reviews, setReviews] = useState([]);

 
  const reduxState = useSelector((globalState) => globalState.restaurant.selectedRestaurant.restaurant);
  //console.log(reduxState);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(reduxState){
      dispatch(getReviews(reduxState?._id)).then((data)=>{
        //console.log(data);
        setReviews(data.payload.reviews);
      })
    }
   

  },[reduxState])
  return (
    <>
    
      <div className="w-full h-full flex-col md:flex md:flex-row relative gap-5">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="md:hidden mb-4">
          
            <AddReviewCard />
          </div>
          {reviews.map((review,index) => (
            <ReviewCard {...review} key={index}/>
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-4 shadow-md flex-col gap-3"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
}

export default Reviews;
