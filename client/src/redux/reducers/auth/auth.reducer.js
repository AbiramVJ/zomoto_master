import { bindActionCreators } from "redux";
import { SIGN_UP,SIGN_IN } from "./auth.type";

const initialState = {};

const authReducer = (state = initialState) =>{
    switch(bindActionCreators.type){
        case SIGN_IN:
            return{
                ...state,
            }
        case SIGN_UP:
            return{
                ...state,
            }
            default:
                return{
                    ...state,
                }
    }
};

export default authReducer;