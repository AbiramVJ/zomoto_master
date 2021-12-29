// import {GET_RESTAURANT} from './restauran.type';

// const initialState={
//    restaurants:[],

// };

// const restaurantReducer = (state = initialState, action)=>{
//     switch(action.type){
//         case GET_RESTAURANT: 
//             return{
//                 ...state,
//                 restaurants:action.payLoad,

//             };
//             default: return{
//                 ...state,
//             };
//     }
// };

// export default restaurantReducer;
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restauran.type";

const initialState = {
  restaurants: [],
  selectedRestaurant: {},
};

// action = {
//   type: "GET_RESTAURANT",
//   payload: [ ...restaurants ]
//}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT:
      return {
        ...state,
        restaurants: action.payload,
      };
    case GET_SPECIFIC_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;